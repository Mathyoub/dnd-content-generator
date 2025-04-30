'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import { Item, Campaign } from '@/types/campaign';

export default function EditItem({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [item, setItem] = useState<Item | null>(null);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch item data
        const itemResponse = await fetch(`/api/items/${params.id}`);
        if (!itemResponse.ok) throw new Error('Failed to fetch item');
        const itemData = await itemResponse.json();
        // Set campaignId from the first campaign if it exists
        setItem({
          ...itemData,
          campaignId: itemData.campaigns?.[0]?.id || null
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
    if (!item) return;

    try {
      // First update the item
      const itemResponse = await fetch(`/api/items/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!itemResponse.ok) throw new Error('Failed to update item');

      // Then update the campaign relationship
      if (item.campaignId) {
        const campaignResponse = await fetch(`/api/items/${params.id}/campaigns`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ campaignId: item.campaignId }),
        });

        if (!campaignResponse.ok) throw new Error('Failed to update campaign relationship');
      }

      router.push('/items');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update item');
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

  if (!item) {
    return (
      <Layout>
        <div className="text-center">
          <p>Item not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Item</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Campaign</label>
              <select
                value={item.campaignId || ''}
                onChange={(e) => setItem({ ...item, campaignId: e.target.value || null })}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <input
                type="text"
                value={item.type}
                onChange={(e) => setItem({ ...item, type: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rarity</label>
              <select
                value={item.rarity}
                onChange={(e) => setItem({ ...item, rarity: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              >
                <option value="Common">Common</option>
                <option value="Uncommon">Uncommon</option>
                <option value="Rare">Rare</option>
                <option value="Very Rare">Very Rare</option>
                <option value="Legendary">Legendary</option>
                <option value="Artifact">Artifact</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={item.description}
                onChange={(e) => setItem({ ...item, description: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                rows={3}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Properties</label>
              <textarea
                value={Array.isArray(item.properties) ? item.properties.join('\n') : JSON.stringify(item.properties)}
                onChange={(e) => setItem({ ...item, properties: e.target.value.split('\n') })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                rows={3}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">History</label>
              <textarea
                value={item.history || ''}
                onChange={(e) => setItem({ ...item, history: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                rows={3}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push('/items')}
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