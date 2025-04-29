'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import type { CampaignTheme, CampaignTone, CampaignSetting } from '@/types/campaign';

export default function NewCampaign() {
  const router = useRouter();
  const [settings, setSettings] = useState<CampaignSetting>({
    theme: 'fantasy',
    tone: 'serious',
    homebrewAllowed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement campaign creation logic
    router.push('/campaign/generate');
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Campaign</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Theme
            </label>
            <select
              id="theme"
              value={settings.theme}
              onChange={(e) => setSettings({ ...settings, theme: e.target.value as CampaignTheme })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="fantasy">Fantasy</option>
              <option value="dark-fantasy">Dark Fantasy</option>
              <option value="steampunk">Steampunk</option>
              <option value="sword-and-sorcery">Sword and Sorcery</option>
              <option value="custom">Custom</option>
            </select>
            {settings.theme === 'custom' && (
              <input
                type="text"
                placeholder="Enter custom theme"
                value={settings.customTheme || ''}
                onChange={(e) => setSettings({ ...settings, customTheme: e.target.value })}
                className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            )}
          </div>

          <div>
            <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Tone
            </label>
            <select
              id="tone"
              value={settings.tone}
              onChange={(e) => setSettings({ ...settings, tone: e.target.value as CampaignTone })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="serious">Serious</option>
              <option value="lighthearted">Lighthearted</option>
              <option value="gritty">Gritty</option>
              <option value="epic">Epic</option>
              <option value="custom">Custom</option>
            </select>
            {settings.tone === 'custom' && (
              <input
                type="text"
                placeholder="Enter custom tone"
                value={settings.customTone || ''}
                onChange={(e) => setSettings({ ...settings, customTone: e.target.value })}
                className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="homebrew"
              checked={settings.homebrewAllowed}
              onChange={(e) => setSettings({ ...settings, homebrewAllowed: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="homebrew" className="ml-2 block text-sm text-gray-700">
              Allow Homebrew Content
            </label>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Description (Optional)
            </label>
            <textarea
              id="description"
              value={settings.description || ''}
              onChange={(e) => setSettings({ ...settings, description: e.target.value })}
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Describe your campaign world, its unique features, or any specific requirements..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Campaign
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}