import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Save the campaign
    const campaign = await prisma.campaign.create({
      data: {
        name: data.name,
        theme: data.theme,
        tone: data.tone,
        homebrewAllowed: data.homebrewAllowed,
        magicCommonality: data.magicCommonality,
        geographicalScale: data.geographicalScale,
        civilizationState: data.civilizationState,
        commonLandscapes: data.commonLandscapes,
        technologyLevel: data.technologyLevel,
        roleOfReligion: data.roleOfReligion,
        religiousFiguresPerception: data.religiousFiguresPerception,
        majorConflictsThreats: data.majorConflictsThreats,
      },
    });
    return NextResponse.json(campaign);
  } catch (error) {
    console.error('Error saving campaign:', error);
    return NextResponse.json({ error: 'Failed to save campaign' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const campaigns = await prisma.campaign.findMany({
      orderBy: { updatedAt: 'desc' }
    });
    return NextResponse.json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return NextResponse.json({ error: 'Failed to fetch campaigns' }, { status: 500 });
  }
}