'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import type { Campaign, City, NPC, Item } from '@/types/campaign';
import { Tab } from '@headlessui/react';
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ContentPage() {
  const router = useRouter();
  const [cities, setCities] = useState<City[]>([]);
  const [npcs, setNPCs] = useState<NPC[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<{ type: 'city' | 'npc' | 'item', data: any } | null>(null);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState<string>('');
  const [selectedNPCRace, setSelectedNPCRace] = useState<string>('');
  const [selectedItemRarity, setSelectedItemRarity] = useState<string>('');

  useEffect(() => {
    const fetchAllContent = async () => {
      try {
        // Fetch all content types and campaigns
        const [citiesRes, npcsRes, itemsRes, campaignsRes] = await Promise.all([
          fetch('/api/content/cities'),
          fetch('/api/content/npcs'),
          fetch('/api/content/items'),
          fetch('/api/campaigns')
        ]);

        if (!citiesRes.ok) throw new Error('Failed to fetch cities');
        if (!npcsRes.ok) throw new Error('Failed to fetch NPCs');
        if (!itemsRes.ok) throw new Error('Failed to fetch items');
        if (!campaignsRes.ok) throw new Error('Failed to fetch campaigns');

        const [citiesData, npcsData, itemsData, campaignsData] = await Promise.all([
          citiesRes.json(),
          npcsRes.json(),
          itemsRes.json(),
          campaignsRes.json()
        ]);

        setCities(citiesData);
        setNPCs(npcsData);
        setItems(itemsData);
        setCampaigns(campaignsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchAllContent();
  }, []);

  // Filter functions
  const filterBySearch = (item: any) => {
    if (!searchTerm) return true;
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filterByCampaign = (item: any) => {
    if (!selectedCampaign) return true;
    return item.campaigns?.some((campaign: Campaign) => campaign.id === selectedCampaign);
  };

  const filterByTypeSpecific = (item: any, type: 'city' | 'npc' | 'item') => {
    switch (type) {
      case 'city':
        return true;
      case 'npc':
        return !selectedNPCRace || item.race === selectedNPCRace;
      case 'item':
        return !selectedItemRarity || item.rarity === selectedItemRarity;
      default:
        return true;
    }
  };

  // Get unique values for filters
  const npcRaces = Array.from(new Set(npcs.map(npc => npc.race)));
  const itemRarities = Array.from(new Set(items.map(item => item.rarity)));

  // Filtered data
  const filteredCities = cities.filter(city =>
    filterBySearch(city) && filterByCampaign(city) && filterByTypeSpecific(city, 'city')
  );
  const filteredNPCs = npcs.filter(npc =>
    filterBySearch(npc) && filterByCampaign(npc) && filterByTypeSpecific(npc, 'npc')
  );
  const filteredItems = items.filter(item =>
    filterBySearch(item) && filterByCampaign(item) && filterByTypeSpecific(item, 'item')
  );

  const handleShowDetails = (type: 'city' | 'npc' | 'item', data: any) => {
    setSelectedItem({ type, data });
  };

  const handleCloseDetails = () => {
    setSelectedItem(null);
  };

  const handleEdit = (type: 'city' | 'npc' | 'item', id: string) => {
    const plural = type === 'city' ? 'cities' : `${type}s`;
    router.push(`/content/${plural}/${id}/edit`);
  };

  const handleDuplicate = async (type: 'city' | 'npc' | 'item', data: any) => {
    try {
      const plural = type === 'city' ? 'cities' : `${type}s`;
      const response = await fetch(`/api/content/${plural}/${data.id}/duplicate`, {
        method: 'POST',
      });

      if (!response.ok) throw new Error(`Failed to duplicate ${type}`);

      const newItem = await response.json();

      // Update the appropriate state array
      switch (type) {
        case 'city':
          setCities([...cities, newItem]);
          break;
        case 'npc':
          setNPCs([...npcs, newItem]);
          break;
        case 'item':
          setItems([...items, newItem]);
          break;
      }

      handleCloseDetails();
    } catch (err) {
      setError(err instanceof Error ? err.message : `Failed to duplicate ${type}`);
    }
  };

  const handleDelete = async (type: 'city' | 'npc' | 'item', id: string) => {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      const plural = type === 'city' ? 'cities' : `${type}s`;
      const response = await fetch(`/api/content/${plural}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error(`Failed to delete ${type}`);

      // Remove the item from the appropriate state array
      switch (type) {
        case 'city':
          setCities(cities.filter(city => city.id !== id));
          break;
        case 'npc':
          setNPCs(npcs.filter(npc => npc.id !== id));
          break;
        case 'item':
          setItems(items.filter(item => item.id !== id));
          break;
      }

      handleCloseDetails();
    } catch (err) {
      setError(err instanceof Error ? err.message : `Failed to delete ${type}`);
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
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Content</h1>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Filter */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name..."
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Campaign Filter */}
            <div>
              <label htmlFor="campaign" className="block text-sm font-medium text-gray-700 mb-1">
                Campaign
              </label>
              <select
                id="campaign"
                value={selectedCampaign}
                onChange={(e) => setSelectedCampaign(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              >
                <option value="">All Campaigns</option>
                {campaigns.map((campaign) => (
                  <option key={campaign.id} value={campaign.id}>
                    {campaign.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Type-specific Filters */}
            <Tab.Group>
              <Tab.List className="hidden">
                <Tab>Cities</Tab>
                <Tab>NPCs</Tab>
                <Tab>Items</Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  {/* Empty panel for cities - no specific filters */}
                </Tab.Panel>
                <Tab.Panel>
                  <div>
                    <label htmlFor="npcRace" className="block text-sm font-medium text-gray-700 mb-1">
                      Race
                    </label>
                    <select
                      id="npcRace"
                      value={selectedNPCRace}
                      onChange={(e) => setSelectedNPCRace(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                    >
                      <option value="">All Races</option>
                      {npcRaces.map((race) => (
                        <option key={race} value={race}>
                          {race}
                        </option>
                      ))}
                    </select>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div>
                    <label htmlFor="itemRarity" className="block text-sm font-medium text-gray-700 mb-1">
                      Rarity
                    </label>
                    <select
                      id="itemRarity"
                      value={selectedItemRarity}
                      onChange={(e) => setSelectedItemRarity(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                    >
                      <option value="">All Rarities</option>
                      {itemRarities.map((rarity) => (
                        <option key={rarity} value={rarity}>
                          {rarity}
                        </option>
                      ))}
                    </select>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>

            {/* Clear Filters Button */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCampaign('');
                  setSelectedNPCRace('');
                  setSelectedItemRarity('');
                }}
                className="w-full px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        <div className={`flex-1 transition-all duration-200 ${selectedItem ? 'mr-[380px]' : ''}`}>
          <Tab.Group>
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <Tab
                  className={({ selected }: { selected: boolean }) =>
                    `py-4 px-6 text-sm font-medium ${
                      selected
                        ? 'border-b-2 border-blue-500 text-blue-600'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`
                  }
                >
                  Cities
                </Tab>
                <Tab
                  className={({ selected }: { selected: boolean }) =>
                    `py-4 px-6 text-sm font-medium ${
                      selected
                        ? 'border-b-2 border-green-500 text-green-600'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`
                  }
                >
                  NPCs
                </Tab>
                <Tab
                  className={({ selected }: { selected: boolean }) =>
                    `py-4 px-6 text-sm font-medium ${
                      selected
                        ? 'border-b-2 border-purple-500 text-purple-600'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`
                  }
                >
                  Items
                </Tab>
              </nav>
            </div>
            <Tab.Panels className="p-2">
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {filteredCities.map((city) => (
                    <div key={city.id} className="bg-gray-50 rounded-lg p-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{city.name}</h3>
                          <div className="text-sm text-gray-600">{city.size} • Population: {city.population}</div>
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
                          onClick={() => handleShowDetails('city', city)}
                          className="text-blue-600 hover:underline text-sm whitespace-nowrap ml-4"
                        >
                          Show details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {filteredNPCs.map((npc) => (
                    <div key={npc.id} className="bg-gray-50 rounded-lg p-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{npc.name}</h3>
                          <div className="text-sm text-gray-600">
                            {npc.race}{npc.class ? ` • ${npc.class}` : ''} • {npc.alignment}
                          </div>
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
                          onClick={() => handleShowDetails('npc', npc)}
                          className="text-blue-600 hover:underline text-sm whitespace-nowrap ml-4"
                        >
                          Show details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                          <div className="text-sm text-gray-600">{item.type} • {item.rarity}</div>
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
                          onClick={() => handleShowDetails('item', item)}
                          className="text-blue-600 hover:underline text-sm whitespace-nowrap ml-4"
                        >
                          Show details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Details Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-xl transform transition-transform duration-200 ease-in-out overflow-y-auto ${
            selectedItem ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {selectedItem && (
            <div className="p-4">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedItem.data.name}
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleCloseDetails}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                {selectedItem.type === 'city' && (
                  <>
                    <div className="text-gray-800"><strong>Size:</strong> {selectedItem.data.size}</div>
                    <div className="text-gray-800"><strong>Population:</strong> {selectedItem.data.population}</div>
                    <div className="text-gray-800"><strong>Description:</strong> {selectedItem.data.description}</div>
                    <div className="text-gray-800"><strong>Government:</strong> {selectedItem.data.government}</div>
                    <div className="text-gray-800"><strong>Economy:</strong> {selectedItem.data.economy}</div>
                    <div className="text-gray-800"><strong>Notable Locations:</strong> {selectedItem.data.notableLocations}</div>
                  </>
                )}

                {selectedItem.type === 'npc' && (
                  <>
                    <div className="text-gray-800"><strong>Race:</strong> {selectedItem.data.race}</div>
                    <div className="text-gray-800"><strong>Class:</strong> {selectedItem.data.class}</div>
                    <div className="text-gray-800"><strong>Alignment:</strong> {selectedItem.data.alignment}</div>
                    <div className="text-gray-800"><strong>Description:</strong> {selectedItem.data.description}</div>
                    <div className="text-gray-800"><strong>Personality:</strong> {selectedItem.data.personality}</div>
                    <div className="text-gray-800"><strong>Background:</strong> {selectedItem.data.background}</div>
                    <div className="text-gray-800"><strong>Goals:</strong> {selectedItem.data.goals}</div>
                  </>
                )}

                {selectedItem.type === 'item' && (
                  <>
                    <div className="text-gray-800"><strong>Type:</strong> {selectedItem.data.type}</div>
                    <div className="text-gray-800"><strong>Rarity:</strong> {selectedItem.data.rarity}</div>
                    <div className="text-gray-800"><strong>Description:</strong> {selectedItem.data.description}</div>
                    <div className="text-gray-800"><strong>Properties:</strong> {Array.isArray(selectedItem.data.properties) ? selectedItem.data.properties.join(', ') : selectedItem.data.properties}</div>
                    {selectedItem.data.history && (
                      <div className="text-gray-800"><strong>History:</strong> {selectedItem.data.history}</div>
                    )}
                  </>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-6 pt-6 border-t">
                  <button
                    onClick={() => handleEdit(selectedItem.type, selectedItem.data.id)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDuplicate(selectedItem.type, selectedItem.data)}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Duplicate
                  </button>
                  <button
                    onClick={() => handleDelete(selectedItem.type, selectedItem.data.id)}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}