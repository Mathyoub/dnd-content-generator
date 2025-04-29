'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import type { CampaignSetting, City, NPC, Item } from '@/types/campaign';

export default function GenerateContent() {
  const router = useRouter();
  const [settings, setSettings] = useState<CampaignSetting | null>(null);
  const [cities, setCities] = useState<City[]>([]);
  const [npcs, setNPCs] = useState<NPC[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [isGenerating, setIsGenerating] = useState<'city' | 'npc' | 'item' | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('campaignSettings');
    if (stored) {
      setSettings(JSON.parse(stored));
    } else {
      router.replace('/campaign/new');
    }
  }, [router]);

  const generateContent = async (type: 'city' | 'npc' | 'item') => {
    if (!settings) return;
    setIsGenerating(type);
    setError(null);

    try {
      const response = await fetch(`/api/generate/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate ${type}`);
      }

      const data = await response.json();

      switch (type) {
        case 'city':
          setCities([...cities, data]);
          break;
        case 'npc':
          setNPCs([...npcs, data]);
          break;
        case 'item':
          setItems([...items, data]);
          break;
      }
    } catch (err) {
      setError(`Failed to generate ${type}. Please try again.`);
      console.error(err);
    } finally {
      setIsGenerating(null);
    }
  };

  if (!settings) return null;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Generate Content</h1>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Campaign Settings</h2>
          <div className="bg-white rounded shadow p-4 text-gray-900">
            <div><strong>Campaign Name:</strong> {settings.campaignName || 'N/A'}</div>
            <div><strong>Theme:</strong> {settings.theme || 'N/A'}</div>
            <div><strong>Tone:</strong> {Array.isArray(settings.tone) && settings.tone.length > 0 ? settings.tone.join(', ') : 'N/A'}</div>
            <div><strong>Homebrew Allowed:</strong> {settings.homebrewAllowed ? 'Yes' : 'No'}</div>
            <div><strong>Magic Commonality:</strong> {settings.magicCommonality || 'N/A'}</div>
            <div><strong>Geographical Scale:</strong> {settings.geographicalScale || 'N/A'}</div>
            <div><strong>Civilization State:</strong> {settings.civilizationState || 'N/A'}</div>
            <div><strong>Common Landscapes:</strong> {Array.isArray(settings.commonLandscapes) && settings.commonLandscapes.length > 0 ? settings.commonLandscapes.join(', ') : 'N/A'}</div>
            <div><strong>Technology Level:</strong> {settings.technologyLevel || 'N/A'}</div>
            <div><strong>Role of Religion:</strong> {settings.roleOfReligion || 'N/A'}</div>
            <div><strong>Religious Figures Perception:</strong> {settings.religiousFiguresPerception || 'N/A'}</div>
            <div><strong>Major Conflicts or Threats:</strong> {settings.majorConflictsThreats || 'N/A'}</div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Generate</h2>
          <div className="flex gap-4 mb-4">
            <button
              className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${isGenerating === 'city' ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => generateContent('city')}
              disabled={isGenerating === 'city'}
            >
              {isGenerating === 'city' ? 'Generating...' : 'Generate City'}
            </button>
            <button
              className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ${isGenerating === 'npc' ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => generateContent('npc')}
              disabled={isGenerating === 'npc'}
            >
              {isGenerating === 'npc' ? 'Generating...' : 'Generate NPC'}
            </button>
            <button
              className={`bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 ${isGenerating === 'item' ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => generateContent('item')}
              disabled={isGenerating === 'item'}
            >
              {isGenerating === 'item' ? 'Generating...' : 'Generate Item'}
            </button>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Cities</h2>
          {cities.length === 0 ? <div className="text-gray-900">No cities generated yet.</div> : (
            <ul className="space-y-4">
              {cities.map(city => (
                <li key={city.id} className="bg-white rounded shadow p-4 text-gray-900">
                  <div className="font-bold text-lg">{city.name} ({city.size})</div>
                  <div><strong>Population:</strong> {city.population}</div>
                  <div><strong>Government:</strong> {city.government}</div>
                  <div><strong>Economy:</strong> {city.economy}</div>
                  <div><strong>Notable Locations:</strong> {Array.isArray(city.notableLocations) ? city.notableLocations.join(', ') : city.notableLocations}</div>
                  <div><strong>Description:</strong> {city.description}</div>
                  <div><strong>History:</strong> {city.history}</div>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">NPCs</h2>
          {npcs.length === 0 ? <div className="text-gray-900">No NPCs generated yet.</div> : (
            <ul className="space-y-4">
              {npcs.map(npc => {
                // Normalize fields from AI response
                const description = npc.description || (npc as any).physical_description || 'N/A';
                const background = npc.background || (npc as any).background_story || 'N/A';
                const personality = npc.personality || (npc as any).personality_description || 'N/A';
                const goals = Array.isArray(npc.goals) ? npc.goals.join(', ') : npc.goals || 'N/A';
                // Normalize relationships
                let relationships: string;
                if (Array.isArray(npc.relationships)) {
                  relationships = npc.relationships
                    .map((rel: any) => {
                      if (typeof rel === 'string') return rel;
                      if (rel.name && rel.description) return `${rel.name}: ${rel.description}`;
                      if (rel.character_name && rel.relationship) return `${rel.character_name}: ${rel.relationship}`;
                      if (rel.faction && rel.relationship) return `${rel.faction}: ${rel.relationship}`;
                      return JSON.stringify(rel);
                    })
                    .join(', ');
                } else if (typeof npc.relationships === 'object' && npc.relationships !== null) {
                  relationships = Object.values(npc.relationships)
                    .map((rel: any) => {
                      if (typeof rel === 'string') return rel;
                      if (rel.name && rel.description) return `${rel.name}: ${rel.description}`;
                      if (rel.character_name && rel.relationship) return `${rel.character_name}: ${rel.relationship}`;
                      if (rel.faction && rel.relationship) return `${rel.faction}: ${rel.relationship}`;
                      return JSON.stringify(rel);
                    })
                    .join(', ');
                } else {
                  relationships = npc.relationships || 'N/A';
                }
                return (
                  <li key={npc.id} className="bg-white rounded shadow p-4 text-gray-900">
                    <div className="font-bold text-lg">{npc.name} ({npc.race}{npc.class ? `, ${npc.class}` : ''})</div>
                    <div><strong>Alignment:</strong> {npc.alignment}</div>
                    <div><strong>Description:</strong> {description}</div>
                    <div><strong>Background:</strong> {background}</div>
                    <div><strong>Personality:</strong> {personality}</div>
                    <div><strong>Goals:</strong> {goals}</div>
                    <div><strong>Relationships:</strong> {relationships}</div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Items</h2>
          {items.length === 0 ? <div className="text-gray-900">No items generated yet.</div> : (
            <ul className="space-y-4">
              {items.map(item => (
                <li key={item.id} className="bg-white rounded shadow p-4 text-gray-900">
                  <div className="font-bold text-lg">{item.name} ({item.type}, {item.rarity})</div>
                  <div><strong>Description:</strong> {item.description}</div>
                  <div><strong>Properties:</strong> {Array.isArray(item.properties) ? item.properties.join(', ') : item.properties}</div>
                  {item.history && <div><strong>History:</strong> {item.history}</div>}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Layout>
  );
}