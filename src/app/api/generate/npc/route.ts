import { NextResponse } from 'next/server';
import { generateNPC } from '@/lib/openai';
import type { CampaignSetting } from '@/types/campaign';

export async function POST(request: Request) {
  try {
    const settings: CampaignSetting = await request.json();
    const npc = await generateNPC(settings);
    return NextResponse.json(npc);
  } catch (error) {
    console.error('Error generating NPC:', error);
    return NextResponse.json(
      { error: 'Failed to generate NPC' },
      { status: 500 }
    );
  }
}