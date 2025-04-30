import { City, NPC, Item } from '@/types/campaign';

interface ContentDetailsProps {
  type: 'city' | 'npc' | 'item';
  data: City | NPC | Item;
  onEdit: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export default function ContentDetails({ type, data, onEdit, onDuplicate, onDelete }: ContentDetailsProps) {
  const renderDetails = () => {
    switch (type) {
      case 'city':
        const city = data as City;
        return (
          <>
            <div className="text-gray-800"><strong>Size:</strong> {city.size}</div>
            <div className="text-gray-800"><strong>Population:</strong> {city.population}</div>
            <div className="text-gray-800"><strong>Government:</strong> {city.government}</div>
            <div className="text-gray-800"><strong>Economy:</strong> {city.economy}</div>
            <div className="text-gray-800"><strong>Notable Locations:</strong> {Array.isArray(city.notableLocations) ? city.notableLocations.join(', ') : city.notableLocations}</div>
            <div className="text-gray-800"><strong>Description:</strong> {city.description}</div>
            <div className="text-gray-800"><strong>History:</strong> {city.history}</div>
          </>
        );

      case 'npc':
        const npc = data as NPC;
        return (
          <>
            <div className="text-gray-800"><strong>Race:</strong> {npc.race}</div>
            <div className="text-gray-800"><strong>Class:</strong> {npc.class}</div>
            <div className="text-gray-800"><strong>Alignment:</strong> {npc.alignment}</div>
            <div className="text-gray-800"><strong>Description:</strong> {npc.description}</div>
            <div className="text-gray-800"><strong>Background:</strong> {npc.background}</div>
            <div className="text-gray-800"><strong>Personality:</strong> {npc.personality}</div>
            <div className="text-gray-800"><strong>Goals:</strong> {npc.goals}</div>
          </>
        );

      case 'item':
        const item = data as Item;
        return (
          <>
            <div className="text-gray-800"><strong>Type:</strong> {item.type}</div>
            <div className="text-gray-800"><strong>Rarity:</strong> {item.rarity}</div>
            <div className="text-gray-800"><strong>Description:</strong> {item.description}</div>
            <div className="text-gray-800"><strong>Properties:</strong> {Array.isArray(item.properties) ? item.properties.join(', ') : item.properties}</div>
            {item.history && (
              <div className="text-gray-800"><strong>History:</strong> {item.history}</div>
            )}
          </>
        );
    }
  };

  return (
    <div className="space-y-4">
      {renderDetails()}

      <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
        <button
          className="text-blue-600 hover:underline text-sm"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="text-green-600 hover:underline text-sm"
          onClick={onDuplicate}
        >
          Duplicate
        </button>
        <button
          className="text-red-500 hover:underline text-sm"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}