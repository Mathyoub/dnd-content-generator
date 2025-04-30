import { Campaign } from '@/types/campaign';

interface CampaignTagsProps {
  campaigns: Campaign[];
}

export default function CampaignTags({ campaigns }: CampaignTagsProps) {
  if (campaigns.length === 0) return null;

  return (
    <div className="mt-3">
      <p className="text-sm text-gray-500 mb-1">Campaigns:</p>
      <div className="flex flex-wrap gap-2">
        {campaigns.map(campaign => (
          <span
            key={campaign.id}
            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
          >
            {campaign.name}
          </span>
        ))}
      </div>
    </div>
  );
}