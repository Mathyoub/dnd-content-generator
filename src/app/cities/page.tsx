"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import type { City } from "@/types/campaign";
import Link from "next/link";

export default function CitiesPage() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/cities")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cities");
        return res.json();
      })
      .then((data) => {
        setCities(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Loading cities...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Cities</h1>
        {cities.length === 0 ? (
          <p className="text-gray-600">No cities have been generated yet.</p>
        ) : (
          <div className="grid gap-6">
            {cities.map((city) => (
              <div key={city.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{city.name}</h2>
                  <Link
                    href={`/campaign/${city.campaignId}`}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    View Campaign
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Size</p>
                    <p className="text-gray-900">{city.size}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Population</p>
                    <p className="text-gray-900">{city.population}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Government</p>
                    <p className="text-gray-900">{city.government}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Economy</p>
                    <p className="text-gray-900">{city.economy}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Description</p>
                  <p className="text-gray-900">{city.description}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Notable Locations</p>
                  <ul className="list-disc list-inside text-gray-900">
                    {(city.notableLocations as string[]).map((location, index) => (
                      <li key={index}>{location}</li>
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