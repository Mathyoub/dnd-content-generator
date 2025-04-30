import { Campaign } from '@/types/campaign';

interface ContentFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCampaign: string;
  onCampaignChange: (value: string) => void;
  selectedNPCRace: string;
  onNPCRaceChange: (value: string) => void;
  selectedItemRarity: string;
  onItemRarityChange: (value: string) => void;
  campaigns: Campaign[];
  npcRaces: string[];
  itemRarities: string[];
  onClearFilters: () => void;
}

export default function ContentFilters({
  searchTerm,
  onSearchChange,
  selectedCampaign,
  onCampaignChange,
  selectedNPCRace,
  onNPCRaceChange,
  selectedItemRarity,
  onItemRarityChange,
  campaigns,
  npcRaces,
  itemRarities,
  onClearFilters,
}: ContentFiltersProps) {
  return (
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
            onChange={(e) => onSearchChange(e.target.value)}
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
            onChange={(e) => onCampaignChange(e.target.value)}
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

        {/* NPC Race Filter */}
        <div>
          <label htmlFor="npcRace" className="block text-sm font-medium text-gray-700 mb-1">
            NPC Race
          </label>
          <select
            id="npcRace"
            value={selectedNPCRace}
            onChange={(e) => onNPCRaceChange(e.target.value)}
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

        {/* Item Rarity Filter */}
        <div>
          <label htmlFor="itemRarity" className="block text-sm font-medium text-gray-700 mb-1">
            Item Rarity
          </label>
          <select
            id="itemRarity"
            value={selectedItemRarity}
            onChange={(e) => onItemRarityChange(e.target.value)}
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
      </div>

      {/* Clear Filters Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={onClearFilters}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}