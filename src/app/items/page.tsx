"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Item } from '@/types/campaign';

export default function Items() {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [collapsedItems, setCollapsedItems] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/items');
        if (!response.ok) throw new Error('Failed to fetch items');
        const data = await response.json();
        setItems(data);
        // Initialize collapsed state
        setCollapsedItems(data.reduce((acc: { [id: string]: boolean }, item: Item) => {
          acc[item.id] = true;
          return acc;
        }, {}));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch items');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
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
          <h1 className="text-3xl font-bold text-gray-900">Items</h1>
          <button
            onClick={() => router.push('/items/new')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create New Item
          </button>
        </div>

        {items.length === 0 ? (
          <div className="text-center text-gray-500">No items found</div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => {
              const isCollapsed = collapsedItems[item.id] ?? false;
              return (
                <div key={item.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                      <p className="text-sm text-gray-500">
                        {item.type} • {item.rarity}
                      </p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-600">Campaigns: </span>
                        {item.campaigns && item.campaigns.length > 0 ? (
                          item.campaigns.map((campaign, index) => (
                            <Link
                              key={campaign.id}
                              href={`/campaign/${campaign.id}`}
                              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              {campaign.name}
                              {index < item.campaigns!.length - 1 ? ', ' : ''}
                            </Link>
                          ))
                        ) : (
                          <span className="text-sm text-gray-500">none</span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => setCollapsedItems(prev => ({ ...prev, [item.id]: !isCollapsed }))}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {isCollapsed ? 'Show Details' : 'Hide Details'}
                    </button>
                  </div>

                  {!isCollapsed && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Description</h3>
                        <p className="mt-1 text-gray-900">{item.description}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Properties</h3>
                        <p className="mt-1 text-gray-900">{item.properties}</p>
                      </div>
                      <div className="flex justify-end space-x-4">
                        <button
                          onClick={() => router.push(`/items/${item.id}/edit`)}
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