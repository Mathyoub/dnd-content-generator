'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import type { Item } from '@/types/campaign';

export default function ItemsList() {
  const router = useRouter();
  const [items, setItems] = useState<Array<Item & { campaign: { id: string; name: string } }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [collapsedItems, setCollapsedItems] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    fetch('/api/items')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch items');
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setCollapsedItems(data.reduce((acc: { [id: string]: boolean }, item: Item) => {
          acc[item.id] = true;
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Items</h1>
        {loading && <div className="text-gray-700">Loading items...</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {!loading && !error && (
          <ul className="space-y-4">
            {items.length === 0 ? (
              <li className="text-gray-700">No items found.</li>
            ) : (
              items.map((item) => {
                const isCollapsed = collapsedItems[item.id] ?? false;
                return (
                  <li key={item.id} className="bg-white rounded shadow p-4 text-gray-900">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-bold text-lg">{item.name} ({item.type}, {item.rarity})</span>
                        <div className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">Campaign:</span>{' '}
                          <button
                            className="text-blue-600 hover:underline"
                            onClick={() => router.push(`/campaign/${item.campaign.id}`)}
                          >
                            {item.campaign.name}
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="text-blue-600 hover:underline text-sm"
                          onClick={() => setCollapsedItems(prev => ({ ...prev, [item.id]: !isCollapsed }))}
                        >
                          {isCollapsed ? 'Show more' : 'Show less'}
                        </button>
                      </div>
                    </div>
                    {!isCollapsed && (
                      <>
                        <div><strong>Description:</strong> {item.description}</div>
                        <div><strong>Properties:</strong> {Array.isArray(item.properties) ? item.properties.join(', ') : item.properties}</div>
                        {item.history && <div><strong>History:</strong> {item.history}</div>}
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