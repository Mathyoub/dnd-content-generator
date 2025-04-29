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
  id?: string;
  name: string;
  theme: CampaignTheme;
  tone: CampaignTone[];
  homebrewAllowed: boolean;
  magicCommonality?: MagicCommonality;
  geographicalScale?: GeographicalScale;
  civilizationState?: CivilizationState;
  commonLandscapes?: CommonLandscape[];
  technologyLevel?: TechnologyLevel;
  roleOfReligion?: RoleOfReligion;
  religiousFiguresPerception?: ReligiousFiguresPerception;
  majorConflictsThreats?: string;
};

export type NPC = {
  id: string;
  name: string;
  race: string;
  class?: string;
  alignment: string;
  description: string;
  background: string;
  personality: string;
  goals: string[];
  relationships: string[];
};

export type City = {
  id: string;
  name: string;
  size: 'village' | 'town' | 'city' | 'metropolis';
  population: string;
  government: string;
  economy: string;
  notableLocations: string[];
  description: string;
  history: string;
};

export type Item = {
  id: string;
  name: string;
  type: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'very-rare' | 'legendary';
  description: string;
  properties: string[];
  history?: string;
};

export type GeneratedContent = {
  npcs: NPC[];
  cities: City[];
  items: Item[];
};