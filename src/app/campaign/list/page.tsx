"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";

export default function CampaignList() {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/campaign")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch campaigns");
        return res.json();
      })
      .then((data) => {
        setCampaigns(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleLoad = (campaign: any) => {
    localStorage.setItem("campaignSettings", JSON.stringify(campaign));
    router.push(`/campaign/${campaign.id}`);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Campaigns</h1>
        {loading && <div>Loading campaigns...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !error && (
          <ul className="space-y-4">
            {campaigns.length === 0 && <li>No campaigns found.</li>}
            {campaigns.map((campaign) => (
              <li key={campaign.id} className="bg-white rounded shadow p-4 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-xl text-gray-900">{campaign.name}</div>
                  <div className="text-gray-600 text-sm">Theme: {campaign.theme}</div>
                </div>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => handleLoad(campaign)}
                >
                  Load
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}