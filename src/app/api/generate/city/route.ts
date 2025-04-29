import { NextResponse } from 'next/server';
import { generateCity } from '@/lib/openai';
import type { CampaignSetting } from '@/types/campaign';

export async function POST(request: Request) {
  try {
    const settings: CampaignSetting = await request.json();
    const city = await generateCity(settings);
    return NextResponse.json(city);
  } catch (error) {
    console.error('Error generating city:', error);
    return NextResponse.json(
      { error: 'Failed to generate city' },
      { status: 500 }
    );
  }
}