import { Item } from '@/types/campaign';

interface ItemDetailsProps {
  item: Item;
}

export default function ItemDetails({ item }: ItemDetailsProps) {
  return (
    <div className="text-sm text-gray-600">
      <p>Type: {item.type || 'Not specified'}</p>
      <p>Rarity: {item.rarity || 'Not specified'}</p>
      <p>Requires Attunement: {item.attunement ? 'Yes' : 'No'}</p>
    </div>
  );
}