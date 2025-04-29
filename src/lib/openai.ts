import OpenAI from 'openai';
import type { CampaignSetting, City, NPC, Item } from '@/types/campaign';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generatePrompt = (type: 'city' | 'npc' | 'item', settings: CampaignSetting) => {
  const basePrompt = `Generate a ${type} for a D&D campaign with the following settings:
Theme: ${settings.theme}${settings.theme ? '' : ''}
Tone: ${Array.isArray(settings.tone) ? settings.tone.join(', ') : settings.tone}
Homebrew Allowed: ${settings.homebrewAllowed ? 'Yes' : 'No'}
Magic Commonality: ${settings.magicCommonality || ''}
Geographical Scale: ${settings.geographicalScale || ''}
Civilization State: ${settings.civilizationState || ''}
Common Landscapes: ${Array.isArray(settings.commonLandscapes) ? settings.commonLandscapes.join(', ') : ''}
Technology Level: ${settings.technologyLevel || ''}
Role of Religion: ${settings.roleOfReligion || ''}
Religious Figures Perception: ${settings.religiousFiguresPerception || ''}
Major Conflicts or Threats: ${settings.majorConflictsThreats || ''}

Respond ONLY with a JSON object in the following format. The example is for structure only—generate a new, unique, and creative ${type} each time, with a different name and details. Do not copy the example or repeat previous outputs. If a field is unknown, leave it as an empty string or array.`;

  switch (type) {
    case 'city':
      return `${basePrompt}
{
  "name": "City Name",
  "size": "Size (village, town, city, or metropolis)",
  "population": "Population estimate",
  "government": "Form of government",
  "economy": "Economy description",
  "notableLocations": ["Notable Location 1", "Notable Location 2"],
  "description": "General description here.",
  "history": "Brief history here."
}`;
    case 'npc':
      return `${basePrompt}
{
  "name": "NPC Name",
  "race": "Race",
  "class": "Class",
  "alignment": "Alignment",
  "description": "Physical description here.",
  "background": "Background story here.",
  "personality": "Personality description here.",
  "goals": ["Goal 1", "Goal 2"]
}`;
    case 'item':
      return `${basePrompt}
{
  "name": "Item Name",
  "type": "Type",
  "rarity": "Rarity (common, uncommon, rare, very-rare, or legendary)",
  "description": "Description here.",
  "properties": ["Property 1", "Property 2"],
  "history": "History here."
}`;
  }
};

const parseResponse = (type: 'city' | 'npc' | 'item', response: string): City | NPC | Item => {
  const id = Math.random().toString(36).slice(2);

  try {
    const parsed = JSON.parse(response);
    console.log('Response:', response);
    console.log('Parsed response:', parsed);
    return { ...parsed, id };
  } catch (error) {
    console.error('Failed to parse AI response:', error);
    throw new Error('Failed to parse AI response');
  }
};

export async function generateCity(settings: CampaignSetting): Promise<City> {
  const prompt = generatePrompt('city', settings);
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a creative assistant that generates D&D content. Respond with valid JSON.' },
      { role: 'user', content: prompt }
    ],
    model: 'gpt-3.5-turbo',
    response_format: { type: 'json_object' },
    temperature: 0.9,
  });

  // Log the raw response for debugging
  console.log('OpenAI City response:', completion.choices[0].message.content);

  return parseResponse('city', completion.choices[0].message.content || '{}') as City;
}

export async function generateNPC(settings: CampaignSetting): Promise<NPC> {
  const prompt = generatePrompt('npc', settings);
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a creative assistant that generates D&D content. Respond with valid JSON.' },
      { role: 'user', content: prompt }
    ],
    model: 'gpt-3.5-turbo',
    response_format: { type: 'json_object' },
    temperature: 0.9,
  });

  // Log the raw response for debugging
  console.log('OpenAI NPC response:', completion.choices[0].message.content);

  return parseResponse('npc', completion.choices[0].message.content || '{}') as NPC;
}

export async function generateItem(settings: CampaignSetting): Promise<Item> {
  const prompt = generatePrompt('item', settings);
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a creative assistant that generates D&D content. Respond with valid JSON.' },
      { role: 'user', content: prompt }
    ],
    model: 'gpt-3.5-turbo',
    response_format: { type: 'json_object' },
    temperature: 0.9,
  });

  // Log the raw response for debugging
  console.log('OpenAI Item response:', completion.choices[0].message.content);

  return parseResponse('item', completion.choices[0].message.content || '{}') as Item;
}