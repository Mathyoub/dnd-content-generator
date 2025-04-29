export type CampaignTheme = 'fantasy' | 'dark-fantasy' | 'steampunk' | 'sword-and-sorcery' | 'custom';

export type CampaignTone = 'serious' | 'lighthearted' | 'gritty' | 'epic' | 'custom';

export type CampaignSetting = {
  theme: CampaignTheme;
  tone: CampaignTone;
  homebrewAllowed: boolean;
  customTheme?: string;
  customTone?: string;
  description?: string;
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