'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import { NPC, Campaign } from '@/types/campaign';

export default function EditNPC({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [npc, setNPC] = useState<NPC | null>(null);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch NPC data
        const npcResponse = await fetch(`/api/npcs/${params.id}`);
        if (!npcResponse.ok) throw new Error('Failed to fetch NPC');
        const npcData = await npcResponse.json();
        // Set campaignId from the first campaign if it exists
        setNPC({
          ...npcData,
          campaignId: npcData.campaigns?.[0]?.id || null
        });

        // Fetch campaigns
        const campaignsResponse = await fetch('/api/campaigns');
        if (!campaignsResponse.ok) throw new Error('Failed to fetch campaigns');
        const campaignsData = await campaignsResponse.json();
        setCampaigns(campaignsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!npc) return;

    try {
      // First update the NPC
      const npcResponse = await fetch(`/api/npcs/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(npc),
      });

      if (!npcResponse.ok) throw new Error('Failed to update NPC');

      // Then update the campaign relationship
      if (npc.campaignId) {
        const campaignResponse = await fetch(`/api/npcs/${params.id}/campaigns`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ campaignId: npc.campaignId }),
        });

        if (!campaignResponse.ok) throw new Error('Failed to update campaign relationship');
      }

      router.push('/npcs');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update NPC');
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center text-red-600">
          <p>Error: {error}</p>
        </div>
      </Layout>
    );
  }

  if (!npc) {
    return (
      <Layout>
        <div className="text-center">
          <p>NPC not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit NPC</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={npc.name}
                onChange={(e) => setNPC({ ...npc, name: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Campaign</label>
              <select
                value={npc.campaignId || ''}
                onChange={(e) => setNPC({ ...npc, campaignId: e.target.value || null })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="">No Campaign</option>
                {campaigns.map((campaign) => (
                  <option key={campaign.id} value={campaign.id}>
                    {campaign.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Race</label>
              <input
                type="text"
                value={npc.race}
                onChange={(e) => setNPC({ ...npc, race: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
              <input
                type="text"
                value={npc.class}
                onChange={(e) => setNPC({ ...npc, class: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alignment</label>
              <input
                type="text"
                value={npc.alignment}
                onChange={(e) => setNPC({ ...npc, alignment: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={npc.description}
                onChange={(e) => setNPC({ ...npc, description: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Background</label>
              <textarea
                value={npc.background}
                onChange={(e) => setNPC({ ...npc, background: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Personality</label>
              <textarea
                value={npc.personality}
                onChange={(e) => setNPC({ ...npc, personality: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Goals</label>
              <textarea
                value={npc.goals}
                onChange={(e) => setNPC({ ...npc, goals: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                rows={3}
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push('/npcs')}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}