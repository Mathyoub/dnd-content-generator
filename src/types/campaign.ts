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

export interface Campaign {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseContent {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  campaigns?: Campaign[];
}

export interface City extends BaseContent {
  size: string;
  population: string;
  government?: string;
  economy?: string;
  notableLocations?: string[];
  history?: string;
}

export interface NPC extends BaseContent {
  race: string;
  class: string;
  alignment: string;
  personality?: string;
  background?: string;
  goals?: string[];
}

export interface Item extends BaseContent {
  type: string;
  rarity: string;
  attunement: boolean;
  properties?: string[];
  history?: string;
}

export type GeneratedContent = {
  npcs: NPC[];
  cities: City[];
  items: Item[];
};