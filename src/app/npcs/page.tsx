'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import type { NPC } from '@/types/campaign';

export default function NPCsList() {
  const router = useRouter();
  const [npcs, setNPCs] = useState<Array<NPC & { campaign: { id: string; name: string } }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [collapsedNPCs, setCollapsedNPCs] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    fetch('/api/npcs')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch NPCs');
        return res.json();
      })
      .then((data) => {
        setNPCs(data);
        setCollapsedNPCs(data.reduce((acc: { [id: string]: boolean }, npc: NPC) => {
          acc[npc.id] = true;
          return acc;
        }, {}));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All NPCs</h1>
        {loading && <div className="text-gray-700">Loading NPCs...</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {!loading && !error && (
          <ul className="space-y-4">
            {npcs.length === 0 ? (
              <li className="text-gray-700">No NPCs found.</li>
            ) : (
              npcs.map((npc) => {
                const isCollapsed = collapsedNPCs[npc.id] ?? false;
                return (
                  <li key={npc.id} className="bg-white rounded shadow p-4 text-gray-900">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-bold text-lg">{npc.name} ({npc.race}{npc.class ? `, ${npc.class}` : ''})</span>
                        <div className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">Campaign:</span>{' '}
                          <button
                            className="text-blue-600 hover:underline"
                            onClick={() => router.push(`/campaign/${npc.campaign.id}`)}
                          >
                            {npc.campaign.name}
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="text-blue-600 hover:underline text-sm"
                          onClick={() => setCollapsedNPCs(prev => ({ ...prev, [npc.id]: !isCollapsed }))}
                        >
                          {isCollapsed ? 'Show more' : 'Show less'}
                        </button>
                      </div>
                    </div>
                    {!isCollapsed && (
                      <>
                        <div><strong>Alignment:</strong> {npc.alignment}</div>
                        <div><strong>Description:</strong> {npc.description}</div>
                        <div><strong>Background:</strong> {npc.background}</div>
                        <div><strong>Personality:</strong> {npc.personality}</div>
                        <div><strong>Goals:</strong> {npc.goals}</div>
                      </>
                    )}
                  </li>
                );
              })
            )}
          </ul>
        )}
      </div>
    </Layout>
  );
}