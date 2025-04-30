import { Campaign, City, Item, NPC } from '@/types/campaign';
import Link from 'next/link';
import CampaignTags from './CampaignTags';
import CityDetails from './content-details/CityDetails';
import NPCDetails from './content-details/NPCDetails';
import ItemDetails from './content-details/ItemDetails';

type ContentType = 'city' | 'npc' | 'item';
type ContentItem = City | NPC | Item;

interface ContentCardProps {
  item: ContentItem;
  type: ContentType;
  campaigns?: Campaign[];
}

export default function ContentCard({ item, type, campaigns = [] }: ContentCardProps) {
  if (!item) {
    return null;
  }

  const itemCampaigns = item?.relationships?.campaigns ?? [];
  const associatedCampaigns = (campaigns ?? []).filter(c => itemCampaigns.includes(c.id));

  const getEditLink = () => {
    switch (type) {
      case 'city':
        return `/content/cities/${item.id}/edit`;
      case 'npc':
        return `/content/npcs/${item.id}/edit`;
      case 'item':
        return `/content/items/${item.id}/edit`;
    }
  };

  const renderTypeSpecificDetails = () => {
    switch (type) {
      case 'city':
        return <CityDetails city={item as City} />;
      case 'npc':
        return <NPCDetails npc={item as NPC} />;
      case 'item':
        return <ItemDetails item={item as Item} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{item.name || 'Unnamed'}</h3>
        <Link
          href={getEditLink()}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          Edit
        </Link>
      </div>
      {renderTypeSpecificDetails()}
      <p className="text-gray-700 mt-2">{item.description || 'No description available'}</p>
      <CampaignTags campaigns={associatedCampaigns} />
    </div>
  );
}