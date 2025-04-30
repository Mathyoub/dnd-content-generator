import { City, NPC, Item } from '@/types/campaign';
import ContentCard from './ContentCard';

interface ContentListProps {
  type: 'city' | 'npc' | 'item';
  items: (City | NPC | Item)[];
  onShowDetails: (item: City | NPC | Item) => void;
  isGenerating?: boolean;
  onGenerate?: () => void;
}

export default function ContentList({ type, items, onShowDetails, isGenerating, onGenerate }: ContentListProps) {
  const buttonColors = {
    city: 'blue',
    npc: 'green',
    item: 'purple'
  };

  const color = buttonColors[type];

  return (
    <div>
      {onGenerate && (
        <div className="flex justify-end mb-2">
          <button
            className={`bg-${color}-600 text-white px-4 py-2 rounded hover:bg-${color}-700 ${
              isGenerating ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={onGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? 'Generating...' : `Generate ${type.charAt(0).toUpperCase() + type.slice(1)}`}
          </button>
        </div>
      )}

      {items.length === 0 ? (
        <div className="text-gray-500 text-center py-4">
          No {type}s generated yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {items.map(item => (
            <ContentCard
              key={item.id}
              type={type}
              data={item}
              onShowDetails={() => onShowDetails(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
}