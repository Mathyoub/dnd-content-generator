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

export async function generateCity(settings?: CampaignSetting) {
  const prompt = settings
    ? `Generate a unique and creative city for a ${settings.theme} campaign with a ${settings.tone.join(', ')} tone. The city should be consistent with the following settings:
      - Magic is ${settings.magicCommonality || 'common'}
      - Technology level is ${settings.technologyLevel || 'medieval'}
      - The world is ${settings.civilizationState || 'thriving'}
      - Common landscapes include ${(settings.commonLandscapes || []).join(', ')}
      - Religion is ${settings.roleOfReligion || 'important'} and religious figures are ${settings.religiousFiguresPerception || 'respected'}
      - Major conflicts: ${settings.majorConflictsThreats || 'none specified'}

      Create a city with a unique name that reflects its culture, history, or environment. Avoid common fantasy city names like "Eldoria", "Rivendell", "Stormwind", or "Neverwinter". Instead, use creative combinations of:
      - Cultural influences (e.g., "Zhar'khan" for a desert city, "Vael'thora" for an elven city)
      - Geographic features (e.g., "Stormpeak" for a mountain city, "Misthaven" for a coastal city)
      - Historical events (e.g., "Lastlight" for a city that survived a great darkness, "Dawnspire" for a city built at sunrise)
      - Local language elements (e.g., "Kor'vash" for a dwarven city, "Syl'varen" for a forest city)
      - Unique naming patterns (e.g., "The Shattered Spire", "The Glass Gardens", "The Whispering Hollows")
      - Compound words with unique suffixes/prefixes (e.g., "Duskreach", "Frosthold", "Ironvein")
      - Mythological references (e.g., "Titan's Rest", "Dragon's Maw", "Phoenix Rise")
      - Natural phenomena (e.g., "Aurora's End", "Tide's Edge", "Storm's Eye")
      - Cultural artifacts (e.g., "The Obsidian Throne", "The Crystal Spire", "The Iron Archive")

      Generate a detailed city with the following structure:
      {
        "name": "string (unique and creative name)",
        "size": "string (Village, Town, City, or Metropolis)",
        "population": number (exact population count as an integer, e.g., 12500),
        "government": "string (unique form of government)",
        "economy": "string (detailed economy description)",
        "notableLocations": ["string (unique and interesting locations)"],
        "description": "string (vivid description of the city's appearance and atmosphere)",
        "history": "string (unique historical background)"
      }`
    : `Generate a unique and creative fantasy city. Create a city with a distinctive name that reflects its culture, history, or environment. Avoid common fantasy city names like "Eldoria" or "Rivendell". Instead, use creative combinations of:
      - Cultural influences (e.g., "Zhar'khan" for a desert city)
      - Geographic features (e.g., "Stormpeak" for a mountain city)
      - Historical events (e.g., "Lastlight" for a city that survived a great darkness)
      - Local language elements (e.g., "Vael'thora" for an elven city)

      Generate a detailed city with the following structure:
      {
        "name": "string (unique and creative name)",
        "size": "string (Village, Town, City, or Metropolis)",
        "population": number (exact population count as an integer, e.g., 12500),
        "government": "string (unique form of government)",
        "economy": "string (detailed economy description)",
        "notableLocations": ["string (unique and interesting locations)"],
        "description": "string (vivid description of the city's appearance and atmosphere)",
        "history": "string (unique historical background)"
      }`;

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: "You are a creative assistant that generates unique and detailed fantasy cities. Your responses should be in valid JSON format. Each city should have a distinctive name and character that sets it apart from other fantasy cities. The population field must be a number (integer), not a string."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    response_format: { type: "json_object" },
    temperature: 0.9
  });

  console.log('Raw response:', response.choices[0].message.content);

  const content = response.choices[0].message.content;
  if (!content) {
    throw new Error('No content received from OpenAI');
  }

  const city = JSON.parse(content);
  return city;
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