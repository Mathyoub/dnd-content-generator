'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Layout from '@/components/Layout';
import type { CampaignSetting, City, NPC, Item } from '@/types/campaign';
import React from 'react';

export default function GenerateContent() {
  const router = useRouter();
  const params = useParams();
  const campaignId = params?.id as string;
  const [settings, setSettings] = useState<CampaignSetting | null>(null);
  const [cities, setCities] = useState<City[]>([]);
  const [npcs, setNPCs] = useState<NPC[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [isGenerating, setIsGenerating] = useState<'city' | 'npc' | 'item' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [collapsedNPCs, setCollapsedNPCs] = useState<{ [id: string]: boolean }>({});
  const [collapsedCities, setCollapsedCities] = useState<{ [id: string]: boolean }>({});
  const [collapsedItems, setCollapsedItems] = useState<{ [id: string]: boolean }>({});
  const [deleteModal, setDeleteModal] = useState<null | { type: 'city' | 'npc' | 'item'; id: string }>(null);
  const [showDeleteCampaignModal, setShowDeleteCampaignModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('campaignSettings');
    if (stored) {
      setSettings(JSON.parse(stored));
    } else {
      router.replace('/campaign/new');
    }
  }, [router]);

  // Load campaign content from database
  useEffect(() => {
    if (!campaignId) return;

    const loadCampaignContent = async () => {
      try {
        // Load cities
        const citiesResponse = await fetch(`/api/cities?campaignId=${campaignId}`);
        if (citiesResponse.ok) {
          const citiesData = await citiesResponse.json();
          setCities(citiesData);
          // Initialize collapsed state for cities
          setCollapsedCities(citiesData.reduce((acc: { [id: string]: boolean }, city: City) => {
            acc[city.id] = true;
            return acc;
          }, {}));
        }

        // Load NPCs
        const npcsResponse = await fetch(`/api/npcs?campaignId=${campaignId}`);
        if (npcsResponse.ok) {
          const npcsData = await npcsResponse.json();
          setNPCs(npcsData);
          // Initialize collapsed state for NPCs
          setCollapsedNPCs(npcsData.reduce((acc: { [id: string]: boolean }, npc: NPC) => {
            acc[npc.id] = true;
            return acc;
          }, {}));
        }

        // Load items
        const itemsResponse = await fetch(`/api/items?campaignId=${campaignId}`);
        if (itemsResponse.ok) {
          const itemsData = await itemsResponse.json();
          setItems(itemsData);
          // Initialize collapsed state for items
          setCollapsedItems(itemsData.reduce((acc: { [id: string]: boolean }, item: Item) => {
            acc[item.id] = true;
            return acc;
          }, {}));
        }
      } catch (error) {
        console.error('Error loading campaign content:', error);
        setError('Failed to load campaign content');
      }
    };

    loadCampaignContent();
  }, [campaignId]);

  const generateContent = async (type: 'city' | 'npc' | 'item') => {
    if (!settings) return;
    setIsGenerating(type);
    setError(null);

    try {
      // First generate the content
      const generateResponse = await fetch(`/api/generate/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (!generateResponse.ok) {
        throw new Error(`Failed to generate ${type}`);
      }

      const generatedData = await generateResponse.json();

      // Then save it to the database
      let saveResponse;
      if (type === 'city') {
        // First create the city
        const cityResponse = await fetch('/api/cities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(generatedData),
        });

        if (!cityResponse.ok) {
          throw new Error(`Failed to save ${type}`);
        }

        const cityData = await cityResponse.json();

        // Then associate it with the campaign
        saveResponse = await fetch(`/api/cities/${cityData.id}/campaigns`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ campaignId }),
        });
      } else if (type === 'npc') {
        // First create the NPC
        const npcResponse = await fetch('/api/npcs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(generatedData),
        });

        if (!npcResponse.ok) {
          throw new Error(`Failed to save ${type}`);
        }

        const npcData = await npcResponse.json();

        // Then associate it with the campaign
        saveResponse = await fetch(`/api/npcs/${npcData.id}/campaigns`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ campaignId }),
        });
      } else if (type === 'item') {
        // First create the item
        const itemResponse = await fetch('/api/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(generatedData),
        });

        if (!itemResponse.ok) {
          throw new Error(`Failed to save ${type}`);
        }

        const itemData = await itemResponse.json();

        // Then associate it with the campaign
        saveResponse = await fetch(`/api/items/${itemData.id}/campaigns`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ campaignId }),
        });
      } else {
        throw new Error(`Invalid type: ${type}`);
      }

      if (!saveResponse.ok) {
        throw new Error(`Failed to save ${type}`);
      }

      const savedData = await saveResponse.json();

      switch (type) {
        case 'city':
          setCities([...cities, savedData]);
          break;
        case 'npc':
          setNPCs([...npcs, savedData]);
          break;
        case 'item':
          setItems([...items, savedData]);
          break;
      }
    } catch (err) {
      setError(`Failed to generate or save ${type}. Please try again.`);
      console.error(err);
    } finally {
      setIsGenerating(null);
    }
  };

  const handleDeleteCampaign = async () => {
    if (!campaignId) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/campaign/${campaignId}`, { method: 'DELETE' });
      if (res.ok) {
        router.push('/campaign/list');
      } else {
        setDeleting(false);
        alert('Failed to delete campaign');
      }
    } catch {
      setDeleting(false);
      alert('Failed to delete campaign');
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
          <div className="flex justify-end mb-2 gap-2">
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              onClick={() => router.push(`/campaign/edit/${campaignId}`)}
            >
              Edit
            </button>
          </div>
          <div className="bg-white rounded shadow p-4 text-gray-900">
            <div><strong>Campaign Name:</strong> {settings.name || 'N/A'}</div>
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
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Cities</h2>
          {cities.length === 0 ? <div className="text-gray-900">No cities generated yet.</div> : (
            <ul className="space-y-4">
              {cities.map(city => {
                const isCollapsed = collapsedCities[city.id] ?? false;
                return (
                  <li key={city.id} className="bg-white rounded shadow p-4 text-gray-900">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg">{city.name} ({city.size})</span>
                      <button
                        className="text-blue-600 hover:underline text-sm"
                        onClick={() => setCollapsedCities(prev => ({ ...prev, [city.id]: !isCollapsed }))}
                      >
                        {isCollapsed ? 'Show more' : 'Show less'}
                      </button>
                    </div>
                    {!isCollapsed && <>
                      <div><strong>Population:</strong> {city.population}</div>
                      <div><strong>Government:</strong> {city.government}</div>
                      <div><strong>Economy:</strong> {city.economy}</div>
                      <div><strong>Notable Locations:</strong> {Array.isArray(city.notableLocations) ? city.notableLocations.join(', ') : city.notableLocations}</div>
                      <div><strong>Description:</strong> {city.description}</div>
                      <div><strong>History:</strong> {city.history}</div>
                      <div className="mt-4 flex justify-end">
                        <button
                          className="text-red-500 hover:underline text-sm"
                          onClick={() => setDeleteModal({ type: 'city', id: city.id })}
                          aria-label="Delete city"
                        >
                          Delete
                        </button>
                      </div>
                    </>}
                  </li>
                );
              })}
            </ul>
          )}
          <div className="flex justify-start mt-4">
            <button
              className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${isGenerating === 'city' ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => generateContent('city')}
              disabled={isGenerating === 'city'}
            >
              {isGenerating === 'city' ? 'Generating...' : 'Generate City'}
            </button>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">NPCs</h2>
          {npcs.length === 0 ? <div className="text-gray-900">No NPCs generated yet.</div> : (
            <ul className="space-y-4">
              {npcs.map(npc => {
                const isCollapsed = collapsedNPCs[npc.id] ?? false;
                // Normalize fields from AI response
                const description = npc.description || (npc as any).physical_description || 'N/A';
                const background = npc.background || (npc as any).background_story || 'N/A';
                const personality = npc.personality || (npc as any).personality_description || 'N/A';
                const goals = Array.isArray(npc.goals) ? npc.goals.join(', ') : npc.goals || 'N/A';
                // Robustly normalize relationships
                function flattenAndParseRelationships(input: any): any[] {
                  if (!input) return [];
                  let arr = Array.isArray(input) ? input : [input];
                  // Flatten one level if nested arrays
                  arr = arr.flat();
                  // Parse JSON strings if present
                  return arr.map((rel) => {
                    if (typeof rel === 'string') {
                      try {
                        const parsed = JSON.parse(rel);
                        return parsed;
                      } catch {
                        return rel;
                      }
                    }
                    return rel;
                  });
                }
                let relationships: React.ReactNode;
                const rels = flattenAndParseRelationships(npc.relationships);
                if (rels.length === 1 && typeof rels[0] === 'object' && !Array.isArray(rels[0]) && rels[0] !== null) {
                  // Handle grouped relationships (e.g., { Allies: [...], Enemies: [...] })
                  const relObj = rels[0];
                  relationships = Object.entries(relObj).map(([group, arr], groupIdx) => (
                    <div key={groupIdx} className="ml-6 mb-2">
                      <strong>{group}:</strong>
                      <ul className="ml-8 list-disc">
                        {Array.isArray(arr) && arr.map((rel: any, idx: number) => (
                          <li key={idx}>
                            {rel.name}
                            {rel.faction ? ` (${rel.faction})` : ''}
                            {': '}{rel.relationship}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ));
                } else if (rels.length > 0 && rels.some(r => typeof r === 'object')) {
                  relationships = rels.map((rel: any, idx: number) => {
                    if (typeof rel === 'string') return <span key={idx}>{rel}</span>;
                    if (rel.name && rel.relationship) {
                      return (
                        <span key={rel.name + idx}>
                          {rel.name}
                          {rel.faction ? ` (${rel.faction})` : ''}
                          {': '}{rel.relationship}
                        </span>
                      );
                    }
                    if (rel.name && rel.description) return <span key={idx}>{rel.name}: {rel.description}</span>;
                    if (rel.character_name && rel.relationship) return <span key={idx}>{rel.character_name}: {rel.relationship}</span>;
                    if (rel.faction && rel.relationship) return <span key={idx}>{rel.faction}: {rel.relationship}</span>;
                    return <span key={idx}>{JSON.stringify(rel)}</span>;
                  }).reduce((prev: React.ReactNode[], curr: React.ReactNode, idx: number) =>
                    prev.length === 0 ? [curr] : [...prev, <br key={idx} />, curr], [] as React.ReactNode[]);
                } else if (rels.length > 0) {
                  relationships = rels.join(', ');
                } else {
                  relationships = 'N/A';
                }
                return (
                  <li key={npc.id} className="bg-white rounded shadow p-4 text-gray-900">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg">{npc.name} ({npc.race}{npc.class ? `, ${npc.class}` : ''})</span>
                      <button
                        className="text-blue-600 hover:underline text-sm"
                        onClick={() => setCollapsedNPCs(prev => ({ ...prev, [npc.id]: !isCollapsed }))}
                      >
                        {isCollapsed ? 'Show more' : 'Show less'}
                      </button>
                    </div>
                    {!isCollapsed && <>
                      <div><strong>Alignment:</strong> {npc.alignment}</div>
                      <div><strong>Description:</strong> {description}</div>
                      <div><strong>Background:</strong> {background}</div>
                      <div><strong>Personality:</strong> {personality}</div>
                      <div><strong>Goals:</strong> {goals}</div>
                      <div className="mt-4 flex justify-end">
                        <button
                          className="text-red-500 hover:underline text-sm"
                          onClick={() => setDeleteModal({ type: 'npc', id: npc.id })}
                          aria-label="Delete NPC"
                        >
                          Delete
                        </button>
                      </div>
                    </>}
                  </li>
                );
              })}
            </ul>
          )}
          <div className="flex justify-start mt-4">
            <button
              className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ${isGenerating === 'npc' ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => generateContent('npc')}
              disabled={isGenerating === 'npc'}
            >
              {isGenerating === 'npc' ? 'Generating...' : 'Generate NPC'}
            </button>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Items</h2>
          {items.length === 0 ? <div className="text-gray-900">No items generated yet.</div> : (
            <ul className="space-y-4">
              {items.map(item => {
                const isCollapsed = collapsedItems[item.id] ?? false;
                return (
                  <li key={item.id} className="bg-white rounded shadow p-4 text-gray-900">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg">{item.name} ({item.type}, {item.rarity})</span>
                      <button
                        className="text-blue-600 hover:underline text-sm"
                        onClick={() => setCollapsedItems(prev => ({ ...prev, [item.id]: !isCollapsed }))}
                      >
                        {isCollapsed ? 'Show more' : 'Show less'}
                      </button>
                    </div>
                    {!isCollapsed && <>
                      <div><strong>Description:</strong> {item.description}</div>
                      <div><strong>Properties:</strong> {Array.isArray(item.properties) ? item.properties.join(', ') : item.properties}</div>
                      {item.history && <div><strong>History:</strong> {item.history}</div>}
                      <div className="mt-4 flex justify-end">
                        <button
                          className="text-red-500 hover:underline text-sm"
                          onClick={() => setDeleteModal({ type: 'item', id: item.id })}
                          aria-label="Delete item"
                        >
                          Delete
                        </button>
                      </div>
                    </>}
                  </li>
                );
              })}
            </ul>
          )}
          <div className="flex justify-start mt-4">
            <button
              className={`bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 ${isGenerating === 'item' ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => generateContent('item')}
              disabled={isGenerating === 'item'}
            >
              {isGenerating === 'item' ? 'Generating...' : 'Generate Item'}
            </button>
          </div>
        </section>
        {/* Confirmation Modal */}
        {deleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50">
            <div className="bg-white rounded shadow-lg p-6 max-w-sm w-full text-gray-900">
              <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
              <p className="mb-6">Are you sure you want to delete this {deleteModal.type}?</p>
              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 rounded bg-gray-200 text-gray-900 hover:bg-gray-300"
                  onClick={() => setDeleteModal(null)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                  onClick={() => {
                    if (deleteModal.type === 'city') setCities(cities => cities.filter(c => c.id !== deleteModal.id));
                    if (deleteModal.type === 'npc') setNPCs(npcs => npcs.filter(n => n.id !== deleteModal.id));
                    if (deleteModal.type === 'item') setItems(items => items.filter(i => i.id !== deleteModal.id));
                    setDeleteModal(null);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
        {showDeleteCampaignModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50">
            <div className="bg-white rounded shadow-lg p-6 max-w-sm w-full text-gray-900">
              <h3 className="text-lg font-semibold mb-4">Delete Campaign</h3>
              <p className="mb-6">Are you sure you want to delete this campaign? This action cannot be undone.</p>
              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 rounded bg-gray-200 text-gray-900 hover:bg-gray-300"
                  onClick={() => setShowDeleteCampaignModal(false)}
                  disabled={deleting}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                  onClick={handleDeleteCampaign}
                  disabled={deleting}
                >
                  {deleting ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-end mt-8">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={() => setShowDeleteCampaignModal(true)}
          >
            Delete Campaign
          </button>
        </div>
      </div>
    </Layout>
  );
}