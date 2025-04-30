'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import Layout from '@/components/Layout';
import { City, Campaign } from '@/types/campaign';

type PageParams = {
  id: string;
};

export default function EditCity({ params }: { params: PageParams }) {
  const router = useRouter();
  const resolvedParams = use(Promise.resolve(params)) as PageParams;
  const [city, setCity] = useState<City | null>(null);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch city data
        const cityResponse = await fetch(`/api/cities/${resolvedParams.id}`);
        if (!cityResponse.ok) throw new Error('Failed to fetch city');
        const cityData = await cityResponse.json();
        setCity(cityData);

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
  }, [resolvedParams.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city) return;

    try {
      // First update the city
      const cityResponse = await fetch(`/api/cities/${resolvedParams.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(city),
      });

      if (!cityResponse.ok) throw new Error('Failed to update city');

      // Then update the campaign relationship
      if (city.campaignId) {
        const campaignResponse = await fetch(`/api/cities/${resolvedParams.id}/campaigns`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ campaignId: city.campaignId }),
        });

        if (!campaignResponse.ok) throw new Error('Failed to update campaign relationship');
      }

      router.push('/cities');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update city');
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

  if (!city) {
    return (
      <Layout>
        <div className="text-center">
          <p>City not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit City</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={city.name}
                onChange={(e) => setCity({ ...city, name: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Campaign</label>
              <select
                value={city.campaignId || ''}
                onChange={(e) => setCity({ ...city, campaignId: e.target.value || null })}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <select
                value={city.size}
                onChange={(e) => setCity({ ...city, size: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              >
                <option value="Village">Village</option>
                <option value="Town">Town</option>
                <option value="City">City</option>
                <option value="Metropolis">Metropolis</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Population</label>
              <input
                type="number"
                value={city.population}
                onChange={(e) => setCity({ ...city, population: parseInt(e.target.value) || 0 })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Government</label>
              <input
                type="text"
                value={city.government}
                onChange={(e) => setCity({ ...city, government: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Economy</label>
              <input
                type="text"
                value={city.economy}
                onChange={(e) => setCity({ ...city, economy: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notable Locations</label>
            <textarea
              value={city.notableLocations}
              onChange={(e) => setCity({ ...city, notableLocations: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={city.description}
              onChange={(e) => setCity({ ...city, description: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              rows={4}
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push('/cities')}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}