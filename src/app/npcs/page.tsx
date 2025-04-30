"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/Layout";
import type { NPC } from "@/types/campaign";

export default function NPCsPage() {
  const router = useRouter();
  const [npcs, setNPCs] = useState<NPC[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [collapsedNPCs, setCollapsedNPCs] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    const fetchNPCs = async () => {
      try {
        const response = await fetch('/api/npcs');
        if (!response.ok) {
          throw new Error('Failed to fetch NPCs');
        }
        const data = await response.json();
        setNPCs(data);
        // Initialize collapsed state for NPCs
        setCollapsedNPCs(data.reduce((acc: { [id: string]: boolean }, npc: NPC) => {
          acc[npc.id] = true;
          return acc;
        }, {}));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNPCs();
  }, []);

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

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">NPCs</h1>
          <button
            onClick={() => router.push('/npcs/new')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create New NPC
          </button>
        </div>

        {npcs.length === 0 ? (
          <div className="text-center text-gray-500">No NPCs found</div>
        ) : (
          <div className="space-y-4">
            {npcs.map((npc) => {
              const isCollapsed = collapsedNPCs[npc.id] ?? false;
              return (
                <div key={npc.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{npc.name}</h2>
                      <p className="text-sm text-gray-500">
                        {npc.race}{npc.class ? ` • ${npc.class}` : ''} • {npc.alignment}
                      </p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-600">Campaigns: </span>
                        {npc.campaigns && npc.campaigns.length > 0 ? (
                          npc.campaigns.map((campaign, index) => (
                            <Link
                              key={campaign.id}
                              href={`/campaign/${campaign.id}`}
                              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              {campaign.name}
                              {index < npc.campaigns!.length - 1 ? ', ' : ''}
                            </Link>
                          ))
                        ) : (
                          <span className="text-sm text-gray-500">none</span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => setCollapsedNPCs(prev => ({ ...prev, [npc.id]: !isCollapsed }))}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {isCollapsed ? 'Show Details' : 'Hide Details'}
                    </button>
                  </div>

                  {!isCollapsed && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Description</h3>
                        <p className="mt-1 text-gray-900">{npc.description}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Background</h3>
                        <p className="mt-1 text-gray-900">{npc.background}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Personality</h3>
                        <p className="mt-1 text-gray-900">{npc.personality}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Goals</h3>
                        <p className="mt-1 text-gray-900">{npc.goals}</p>
                      </div>
                      <div className="flex justify-end space-x-4">
                        <button
                          onClick={() => router.push(`/npcs/${npc.id}/edit`)}
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}