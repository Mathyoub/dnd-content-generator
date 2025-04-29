import OpenAI from 'openai';
import type { CampaignSetting, City, NPC, Item } from '@/types/campaign';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generatePrompt = (type: 'city' | 'npc' | 'item', settings: CampaignSetting) => {
  const basePrompt = `Generate a ${type} for a D&D campaign with the following settings:
Theme: ${settings.theme}${settings.customTheme ? ` (${settings.customTheme})` : ''}
Tone: ${settings.tone}${settings.customTone ? ` (${settings.customTone})` : ''}
Homebrew Allowed: ${settings.homebrewAllowed ? 'Yes' : 'No'}
${settings.description ? `Description: ${settings.description}` : ''}

Please generate a detailed ${type} that fits these settings.`;

  switch (type) {
    case 'city':
      return `${basePrompt}
The city should have:
- A name
- A size (village, town, city, or metropolis)
- A population estimate
- A form of government
- An economy description
- Notable locations
- A general description
- A brief history`;
    case 'npc':
      return `${basePrompt}
The NPC should have:
- A name
- A race
- A class (optional)
- An alignment
- A physical description
- A background story
- A personality description
- Goals
- Relationships with other characters or factions`;
    case 'item':
      return `${basePrompt}
The item should have:
- A name
- A type
- A rarity (common, uncommon, rare, very-rare, or legendary)
- A description
- Magical properties or abilities
- A history (optional)`;
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
  });

  // Log the raw response for debugging
  console.log('OpenAI Item response:', completion.choices[0].message.content);

  return parseResponse('item', completion.choices[0].message.content || '{}') as Item;
}