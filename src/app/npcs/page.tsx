"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import type { NPC } from "@/types/campaign";
import Link from "next/link";

export default function NPCsPage() {
  const [npcs, setNPCs] = useState<NPC[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/npcs")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch NPCs");
        return res.json();
      })
      .then((data) => {
        setNPCs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Loading NPCs...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All NPCs</h1>
        {npcs.length === 0 ? (
          <p className="text-gray-600">No NPCs have been generated yet.</p>
        ) : (
          <div className="grid gap-6">
            {npcs.map((npc) => (
              <div key={npc.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{npc.name}</h2>
                  <Link
                    href={`/campaign/${npc.campaignId}`}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    View Campaign
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Race</p>
                    <p className="text-gray-900">{npc.race}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Class</p>
                    <p className="text-gray-900">{npc.class || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Alignment</p>
                    <p className="text-gray-900">{npc.alignment}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Description</p>
                  <p className="text-gray-900">{npc.description}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Background</p>
                  <p className="text-gray-900">{npc.background}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Personality</p>
                  <p className="text-gray-900">{npc.personality}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Goals</p>
                  <ul className="list-disc list-inside text-gray-900">
                    {(npc.goals as string[]).map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}