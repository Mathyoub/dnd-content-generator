import { City } from '@/types/campaign';

interface CityDetailsProps {
  city: City;
}

export default function CityDetails({ city }: CityDetailsProps) {
  return (
    <div className="text-sm text-gray-600">
      <p>Size: {city.size || 'Not specified'}</p>
      <p>Population: {city.population || 'Unknown'}</p>
    </div>
  );
}