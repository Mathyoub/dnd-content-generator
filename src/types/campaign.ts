export type CampaignTheme = 'fantasy' | 'western' | 'horror';

export type CampaignTone = 'serious' | 'lighthearted' | 'gritty' | 'epic';

export type MagicCommonality = 'Rare and Feared' | 'Widespread and Accepted' | 'Occasionally Seen' | 'Forbidden';
export type GeographicalScale = 'Single City' | 'Single Region/Continent' | 'Global' | 'Multiple Worlds/Planes';
export type CivilizationState = 'Advanced and Thriving' | 'Decaying and Fragmented' | 'On the Brink of Collapse' | 'Primitive/Tribal';
export type CommonLandscape = 'Deserts' | 'Forests' | 'Mountains' | 'Swamps' | 'Urban Sprawl' | 'Islands' | 'Tundra' | 'Plains' | 'Caverns';
export type TechnologyLevel = 'Primitive' | 'Early Medieval' | 'Late Medieval' | 'Renaissance' | 'Industrial' | 'Steampunk' | 'Magical Devices' | 'High-tech/Futuristic';
export type RoleOfReligion = 'Powerful and Intervening' | 'Local and Personal' | 'Non-existent' | 'Mysterious' | 'Minor Influence';
export type ReligiousFiguresPerception = 'Revered' | 'Feared' | 'Neutral' | 'In Conflict with Other Beliefs' | 'Outlawed';

export type CampaignSetting = {
  name: string;
  theme: string;
  tone: string[];
  homebrewAllowed: boolean;
  magicCommonality?: string;
  geographicalScale?: string;
  civilizationState?: string;
  commonLandscapes: string[];
  technologyLevel?: string;
  roleOfReligion?: string;
  religiousFiguresPerception?: string;
  majorConflictsThreats?: string;
};

export type NPC = {
  id: string;
  name: string;
  race: string;
  class: string;
  alignment: string;
  description: string;
  background: string;
  personality: string;
  goals: string;
  relationships?: any; // This can be any type since it's parsed from JSON
  campaignId?: string | null;
  campaigns?: Campaign[];
  updatedAt: string;
};

export type City = {
  id: string;
  name: string;
  size: string;
  population: number;
  government: string;
  economy: string;
  notableLocations: string;
  description: string;
  history: string;
  campaignId?: string | null;
  campaigns?: Campaign[];
  updatedAt: string;
};

export type Campaign = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type Item = {
  id: string;
  name: string;
  type: string;
  rarity: string;
  description: string;
  properties: string[];
  history?: string;
  campaignId?: string | null;
  campaigns?: Campaign[];
  updatedAt: string;
};

export type GeneratedContent = {
  npcs: NPC[];
  cities: City[];
  items: Item[];
};