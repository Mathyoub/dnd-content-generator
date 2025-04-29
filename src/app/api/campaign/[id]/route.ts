import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(request: Request, context: { params: { id: string } }) {
  try {
    const params = await context.params;
    const { id } = params;
    const campaign = await prisma.campaign.findUnique({
      where: { id },
    });
    if (!campaign) {
      return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
    }
    return NextResponse.json(campaign);
  } catch (error) {
    console.error('Error fetching campaign:', error);
    return NextResponse.json({ error: 'Failed to fetch campaign' }, { status: 500 });
  }
}

export async function PATCH(request: Request, context: { params: { id: string } }) {
  try {
    const params = await context.params;
    const { id } = params;
    const data = await request.json();
    const updated = await prisma.campaign.update({
      where: { id },
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
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating campaign:', error);
    return NextResponse.json({ error: 'Failed to update campaign' }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
  try {
    const params = await context.params;
    const { id } = params;
    await prisma.campaign.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting campaign:', error);
    return NextResponse.json({ error: 'Failed to delete campaign' }, { status: 500 });
  }
}