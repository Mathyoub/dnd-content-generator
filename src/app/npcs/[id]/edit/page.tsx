'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import { NPC } from '@/types/campaign';

export default function EditNPC({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [npc, setNPC] = useState<NPC | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNPC = async () => {
      try {
        const response = await fetch(`/api/npcs/${params.id}`);
        if (!response.ok) throw new Error('Failed to fetch NPC');
        const data = await response.json();
        setNPC(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch NPC');
      } finally {
        setLoading(false);
      }
    };

    fetchNPC();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!npc) return;

    try {
      const response = await fetch(`/api/npcs/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(npc),
      });

      if (!response.ok) throw new Error('Failed to update NPC');
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
              <select
                value={npc.alignment}
                onChange={(e) => setNPC({ ...npc, alignment: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              >
                <option value="Lawful Good">Lawful Good</option>
                <option value="Neutral Good">Neutral Good</option>
                <option value="Chaotic Good">Chaotic Good</option>
                <option value="Lawful Neutral">Lawful Neutral</option>
                <option value="True Neutral">True Neutral</option>
                <option value="Chaotic Neutral">Chaotic Neutral</option>
                <option value="Lawful Evil">Lawful Evil</option>
                <option value="Neutral Evil">Neutral Evil</option>
                <option value="Chaotic Evil">Chaotic Evil</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={npc.description}
              onChange={(e) => setNPC({ ...npc, description: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Background</label>
            <textarea
              value={npc.background}
              onChange={(e) => setNPC({ ...npc, background: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Personality</label>
            <textarea
              value={npc.personality}
              onChange={(e) => setNPC({ ...npc, personality: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Goals</label>
            <textarea
              value={npc.goals}
              onChange={(e) => setNPC({ ...npc, goals: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              rows={4}
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push('/npcs')}
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