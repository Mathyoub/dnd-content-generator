"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import type { Item } from "@/types/campaign";
import Link from "next/link";

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch items");
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Loading items...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Items</h1>
        {items.length === 0 ? (
          <p className="text-gray-600">No items have been generated yet.</p>
        ) : (
          <div className="grid gap-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
                  <Link
                    href={`/campaign/${item.campaignId}`}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    View Campaign
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="text-gray-900">{item.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Rarity</p>
                    <p className="text-gray-900">{item.rarity}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Description</p>
                  <p className="text-gray-900">{item.description}</p>
                </div>
                {item.history && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">History</p>
                    <p className="text-gray-900">{item.history}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-600 mb-1">Properties</p>
                  <ul className="list-disc list-inside text-gray-900">
                    {(item.properties as string[]).map((property, index) => (
                      <li key={index}>{property}</li>
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