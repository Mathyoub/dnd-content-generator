import { NextResponse } from 'next/server';
import { generateItem } from '@/lib/openai';
import type { CampaignSetting } from '@/types/campaign';

export async function POST(request: Request) {
  try {
    const settings: CampaignSetting = await request.json();
    const item = await generateItem(settings);
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error generating item:', error);
    return NextResponse.json(
      { error: 'Failed to generate item' },
      { status: 500 }
    );
  }
}