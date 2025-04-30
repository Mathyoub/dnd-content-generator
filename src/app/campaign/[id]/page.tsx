'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Layout from '@/components/Layout';
import type { CampaignSetting, City, NPC, Item } from '@/types/campaign';
import React from 'react';
import SlideOutPanel from '@/components/SlideOutPanel';
import ContentList from '@/components/ContentList';
import ContentDetails from '@/components/ContentDetails';
import useContentOperations from '@/hooks/useContentOperations';

export default function GenerateContent() {
  const router = useRouter();
  const params = useParams();
  const campaignId = params?.id as string;
  const [settings, setSettings] = useState<CampaignSetting | null>(null);
  const [cities, setCities] = useState<City[]>([]);
  const [npcs, setNPCs] = useState<NPC[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [isGenerating, setIsGenerating] = useState<'city' | 'npc' | 'item' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [collapsedNPCs, setCollapsedNPCs] = useState<{ [id: string]: boolean }>({});
  const [collapsedCities, setCollapsedCities] = useState<{ [id: string]: boolean }>({});
  const [collapsedItems, setCollapsedItems] = useState<{ [id: string]: boolean }>({});
  const [deleteModal, setDeleteModal] = useState<null | { type: 'city' | 'npc' | 'item'; id: string }>(null);
  const [deleting, setDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<'cities' | 'npcs' | 'items'>('cities');
  const [settingsCollapsed, setSettingsCollapsed] = useState(true);
  const [selectedItem, setSelectedItem] = useState<{ type: 'city' | 'npc' | 'item'; data: any } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('campaignSettings');
    if (stored) {
      setSettings(JSON.parse(stored));
    } else {
      router.replace('/campaign/new');
    }
  }, [router]);

  // Load campaign content from database
  useEffect(() => {
    if (!campaignId) return;

    const loadCampaignContent = async () => {
      try {
        // Load cities
        const citiesResponse = await fetch(`/api/cities?campaignId=${campaignId}`);
        if (citiesResponse.ok) {
          const citiesData = await citiesResponse.json();
          // Sort cities by updatedAt in descending order
          const sortedCities = citiesData.sort((a: City, b: City) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
          setCities(sortedCities);
          // Initialize collapsed state for cities
          setCollapsedCities(sortedCities.reduce((acc: { [id: string]: boolean }, city: City) => {
            acc[city.id] = true;
            return acc;
          }, {}));
        }

        // Load NPCs
        const npcsResponse = await fetch(`/api/npcs?campaignId=${campaignId}`);
        if (npcsResponse.ok) {
          const npcsData = await npcsResponse.json();
          // Sort NPCs by updatedAt in descending order
          const sortedNPCs = npcsData.sort((a: NPC, b: NPC) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
          setNPCs(sortedNPCs);
          // Initialize collapsed state for NPCs
          setCollapsedNPCs(sortedNPCs.reduce((acc: { [id: string]: boolean }, npc: NPC) => {
            acc[npc.id] = true;
            return acc;
          }, {}));
        }

        // Load items
        const itemsResponse = await fetch(`/api/items?campaignId=${campaignId}`);
        if (itemsResponse.ok) {
          const itemsData = await itemsResponse.json();
          // Sort items by updatedAt in descending order
          const sortedItems = itemsData.sort((a: Item, b: Item) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
          setItems(sortedItems);
          // Initialize collapsed state for items
          setCollapsedItems(sortedItems.reduce((acc: { [id: string]: boolean }, item: Item) => {
            acc[item.id] = true;
            return acc;
          }, {}));
        }
      } catch (error) {
        console.error('Error loading campaign content:', error);
        setError('Failed to load campaign content');
      }
    };

    loadCampaignContent();
  }, [campaignId]);

  const generateContent = async (type: 'city' | 'npc' | 'item') => {
    if (!settings) return;
    setIsGenerating(type);
    setError(null);

    try {
      // First generate the content
      const generateResponse = await fetch(`/api/generate/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (!generateResponse.ok) {
        throw new Error(`Failed to generate ${type}`);
      }

      const generatedData = await generateResponse.json();

      // Then save it to the database
      let saveResponse;
      if (type === 'city') {
        // First create the city
        const cityResponse = await fetch('/api/content/cities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(generatedData),
        });

        if (!cityResponse.ok) {
          throw new Error(`Failed to save ${type}`);
        }

        const cityData = await cityResponse.json();

        // Then associate it with the campaign
        saveResponse = await fetch(`/api/content/cities/${cityData.id}/campaigns`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ campaignId }),
        });
      } else if (type === 'npc') {
        // First create the NPC
        const npcResponse = await fetch('/api/content/npcs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(generatedData),
        });

        if (!npcResponse.ok) {
          throw new Error(`Failed to save ${type}`);
        }

        const npcData = await npcResponse.json();

        // Then associate it with the campaign
        saveResponse = await fetch(`/api/content/npcs/${npcData.id}/campaigns`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ campaignId }),
        });
      } else if (type === 'item') {
        // First create the item
        const itemResponse = await fetch('/api/content/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(generatedData),
        });

        if (!itemResponse.ok) {
          throw new Error(`Failed to save ${type}`);
        }

        const itemData = await itemResponse.json();

        // Then associate it with the campaign
        saveResponse = await fetch(`/api/content/items/${itemData.id}/campaigns`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ campaignId }),
        });
      } else {
        throw new Error(`Invalid type: ${type}`);
      }

      if (!saveResponse.ok) {
        throw new Error(`Failed to save ${type}`);
      }

      const savedData = await saveResponse.json();

      // Add new content at the top of the list
      switch (type) {
        case 'city':
          setCities(cities => [savedData, ...cities]);
          break;
        case 'npc':
          setNPCs(npcs => [savedData, ...npcs]);
          break;
        case 'item':
          setItems(items => [savedData, ...items]);
          break;
      }
    } catch (err) {
      setError(`Failed to generate or save ${type}. Please try again.`);
      console.error(err);
    } finally {
      setIsGenerating(null);
    }
  };

  const handleDelete = async (type: 'city' | 'npc' | 'item', id: string) => {
    setDeleting(true);
    try {
      // First remove the campaign association
      const plural = type === 'city' ? 'cities' : `${type}s`;
      const disassociateRes = await fetch(`/api/content/${plural}/${id}/campaigns/${campaignId}`, {
        method: 'DELETE',
      });

      if (!disassociateRes.ok) {
        throw new Error('Failed to remove campaign association');
      }

      // Then delete the item itself
      const deleteRes = await fetch(`/api/content/${plural}/${id}`, {
        method: 'DELETE',
      });

      if (!deleteRes.ok) {
        throw new Error(`Failed to delete ${type}`);
      }

      // Update the local state
      switch (type) {
        case 'city':
          setCities(cities => cities.filter(c => c.id !== id));
          break;
        case 'npc':
          setNPCs(npcs => npcs.filter(n => n.id !== id));
          break;
        case 'item':
          setItems(items => items.filter(i => i.id !== id));
          break;
      }
    } catch (error) {
      console.error('Error deleting:', error);
      alert(`Failed to delete ${type}. Please try again.`);
    } finally {
      setDeleting(false);
      setDeleteModal(null);
    }
  };

  const handleDuplicate = async (type: 'city' | 'npc' | 'item', id: string) => {
    try {
      const plural = type === 'city' ? 'cities' : `${type}s`;
      const response = await fetch(`/api/content/${plural}/${id}/duplicate`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error(`Failed to duplicate ${type}`);
      }

      const duplicatedItem = await response.json();

      // Update the local state
      switch (type) {
        case 'city':
          setCities(prev => [...prev, duplicatedItem]);
          break;
        case 'npc':
          setNPCs(prev => [...prev, duplicatedItem]);
          break;
        case 'item':
          setItems(prev => [...prev, duplicatedItem]);
          break;
      }

      // Close the details panel
      setSelectedItem(null);
    } catch (error) {
      console.error('Error duplicating:', error);
      alert(`Failed to duplicate ${type}. Please try again.`);
    }
  };

  if (!settings) return null;

  const handleShowDetails = (type: 'city' | 'npc' | 'item', data: any) => {
    setSelectedItem({ type, data });
  };

  const handleCloseDetails = () => {
    setSelectedItem(null);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto flex">
        {/* Main Content */}
        <div className={`flex-1 transition-all duration-200 ${selectedItem ? 'mr-[380px]' : ''}`}>
          {/* Campaign Settings Section */}
          <section className="mb-2 bg-white rounded-lg shadow">
            <div
              className="flex justify-between items-center cursor-pointer p-4"
              onClick={() => setSettingsCollapsed(!settingsCollapsed)}
            >
              <h2 className="text-xl font-semibold text-gray-800">Campaign Settings</h2>
              <button
                className="text-blue-600 hover:underline text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/campaign/edit/${campaignId}`);
                }}
              >
                Edit
              </button>
            </div>
            {!settingsCollapsed && (
              <div className="mt-2 px-4 pb-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="text-gray-900"><strong>Name:</strong> {settings.name || 'N/A'}</div>
                <div className="text-gray-900"><strong>Theme:</strong> {settings.theme || 'N/A'}</div>
                <div className="text-gray-900"><strong>Tone:</strong> {Array.isArray(settings.tone) && settings.tone.length > 0 ? settings.tone.join(', ') : 'N/A'}</div>
                <div className="text-gray-900"><strong>Homebrew:</strong> {settings.homebrewAllowed ? 'Yes' : 'No'}</div>
                <div className="text-gray-900"><strong>Magic:</strong> {settings.magicCommonality || 'N/A'}</div>
                <div className="text-gray-900"><strong>Scale:</strong> {settings.geographicalScale || 'N/A'}</div>
                <div className="text-gray-900"><strong>Civilization:</strong> {settings.civilizationState || 'N/A'}</div>
                <div className="text-gray-900"><strong>Landscapes:</strong> {Array.isArray(settings.commonLandscapes) && settings.commonLandscapes.length > 0 ? settings.commonLandscapes.join(', ') : 'N/A'}</div>
                <div className="text-gray-900"><strong>Technology:</strong> {settings.technologyLevel || 'N/A'}</div>
                <div className="text-gray-900"><strong>Religion:</strong> {settings.roleOfReligion || 'N/A'}</div>
                <div className="text-gray-900"><strong>Religious Figures:</strong> {settings.religiousFiguresPerception || 'N/A'}</div>
                <div className="text-gray-900"><strong>Conflicts:</strong> {settings.majorConflictsThreats || 'N/A'}</div>
              </div>
            )}
          </section>

          {/* Content Tabs */}
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === 'cities'
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('cities')}
                >
                  Cities
                </button>
                <button
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === 'npcs'
                      ? 'border-b-2 border-green-500 text-green-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('npcs')}
                >
                  NPCs
                </button>
                <button
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === 'items'
                      ? 'border-b-2 border-purple-500 text-purple-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('items')}
                >
                  Items
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-2">
              {activeTab === 'cities' && (
                <ContentList
                  type="city"
                  items={cities}
                  onShowDetails={(city) => handleShowDetails('city', city)}
                  isGenerating={isGenerating === 'city'}
                  onGenerate={() => generateContent('city')}
                />
              )}

              {activeTab === 'npcs' && (
                <ContentList
                  type="npc"
                  items={npcs}
                  onShowDetails={(npc) => handleShowDetails('npc', npc)}
                  isGenerating={isGenerating === 'npc'}
                  onGenerate={() => generateContent('npc')}
                />
              )}

              {activeTab === 'items' && (
                <ContentList
                  type="item"
                  items={items}
                  onShowDetails={(item) => handleShowDetails('item', item)}
                  isGenerating={isGenerating === 'item'}
                  onGenerate={() => generateContent('item')}
                />
              )}
            </div>
          </div>
        </div>

        {/* Details Drawer */}
        {selectedItem && (
          <SlideOutPanel
            isOpen={!!selectedItem}
            onClose={handleCloseDetails}
            title={selectedItem.data.name}
          >
            <ContentDetails
              type={selectedItem.type}
              data={selectedItem.data}
              onEdit={() => {
                const plural = selectedItem.type === 'city' ? 'cities' : `${selectedItem.type}s`;
                router.push(`/${plural}/${selectedItem.data.id}/edit`);
                handleCloseDetails();
              }}
              onDuplicate={() => {
                handleDuplicate(selectedItem.type, selectedItem.data.id);
                handleCloseDetails();
              }}
              onDelete={() => {
                setDeleteModal({ type: selectedItem.type, id: selectedItem.data.id });
                handleCloseDetails();
              }}
            />
          </SlideOutPanel>
        )}

        {/* Delete Modal */}
        {deleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50">
            <div className="bg-white rounded shadow-lg p-6 max-w-sm w-full text-gray-900">
              <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
              <p className="mb-6">Are you sure you want to delete this {deleteModal.type}?</p>
              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 rounded bg-gray-200 text-gray-900 hover:bg-gray-300"
                  onClick={() => setDeleteModal(null)}
                  disabled={deleting}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                  onClick={() => handleDelete(deleteModal.type, deleteModal.id)}
                  disabled={deleting}
                >
                  {deleting ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}