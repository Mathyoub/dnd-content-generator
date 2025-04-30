"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/Layout";
import type { City } from "@/types/campaign";

export default function CitiesPage() {
  const router = useRouter();
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [collapsedCities, setCollapsedCities] = useState<{ [id: string]: boolean }>({});
  const [deleteModal, setDeleteModal] = useState<{ type: 'city'; id: string } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("/api/cities");
        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }
        const data = await response.json();
        setCities(data);
        // Initialize collapsed state for cities
        setCollapsedCities(data.reduce((acc: { [id: string]: boolean }, city: City) => {
          acc[city.id] = true;
          return acc;
        }, {}));
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  const handleGenerateCity = async () => {
    setIsGenerating(true);
    try {
      // Generate a new city using AI
      const generateResponse = await fetch('/api/generate/city', {
        method: 'POST',
      });
      if (!generateResponse.ok) throw new Error('Failed to generate city');
      const generatedCity = await generateResponse.json();

      // Save the generated city
      const saveResponse = await fetch('/api/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(generatedCity),
      });
      if (!saveResponse.ok) throw new Error('Failed to save city');
      const savedCity = await saveResponse.json();

      // Add the new city to the beginning of the list
      setCities([savedCity, ...cities]);
      setCollapsedCities(prev => ({ ...prev, [savedCity.id]: true }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate city');
    } finally {
      setIsGenerating(false);
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

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Cities</h1>
          <button
            onClick={handleGenerateCity}
            disabled={isGenerating}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? 'Generating...' : 'Generate New City'}
          </button>
        </div>

        {cities.length === 0 ? (
          <div className="text-center text-gray-500">No cities found</div>
        ) : (
          <div className="space-y-4">
            {cities.map((city) => {
              const isCollapsed = collapsedCities[city.id] ?? false;
              return (
                <div key={city.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{city.name}</h2>
                      <p className="text-sm text-gray-500">
                        {city.size} • Population: {city.population}
                      </p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-600">Campaigns: </span>
                        {city.campaigns && city.campaigns.length > 0 ? (
                          city.campaigns.map((campaign, index) => (
                            <Link
                              key={campaign.id}
                              href={`/campaign/${campaign.id}`}
                              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              {campaign.name}
                              {index < city.campaigns!.length - 1 ? ', ' : ''}
                            </Link>
                          ))
                        ) : (
                          <span className="text-sm text-gray-500">none</span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => setCollapsedCities(prev => ({ ...prev, [city.id]: !isCollapsed }))}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {isCollapsed ? 'Show Details' : 'Hide Details'}
                    </button>
                  </div>

                  {!isCollapsed && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Government</h3>
                        <p className="mt-1 text-gray-900">{city.government}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Economy</h3>
                        <p className="mt-1 text-gray-900">{city.economy}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Notable Locations</h3>
                        <p className="mt-1 text-gray-900">{city.notableLocations}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Description</h3>
                        <p className="mt-1 text-gray-900">{city.description}</p>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <button
                          className="text-blue-600 hover:underline text-sm"
                          onClick={() => router.push(`/cities/${city.id}/edit`)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-green-600 hover:underline text-sm"
                          onClick={async () => {
                            try {
                              const response = await fetch(`/api/cities/${city.id}/duplicate`, {
                                method: 'POST',
                              });
                              if (!response.ok) throw new Error('Failed to duplicate city');
                              const newCity = await response.json();
                              setCities([newCity, ...cities]);
                            } catch (error) {
                              console.error('Error duplicating city:', error);
                            }
                          }}
                        >
                          Duplicate
                        </button>
                        <button
                          className="text-red-500 hover:underline text-sm"
                          onClick={() => setDeleteModal({ type: 'city', id: city.id })}
                          aria-label="Delete city"
                        >
                          Delete
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