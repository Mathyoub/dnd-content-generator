import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const campaignId = searchParams.get('campaignId');

    const npcs = await prisma.nPC.findMany({
      where: campaignId ? {
        campaigns: {
          some: {
            campaignId: campaignId
          }
        }
      } : undefined,
      include: {
        campaigns: {
          include: {
            campaign: true
          }
        }
      }
    });

    // Transform the response to match the expected format
    const transformedNPCs = npcs.map(npc => ({
      ...npc,
      campaigns: npc.campaigns.map(campaignNPC => campaignNPC.campaign)
    }));

    return NextResponse.json(transformedNPCs);
  } catch (error) {
    console.error('Error fetching NPCs:', error);
    return NextResponse.json({ error: 'Failed to fetch NPCs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const npc = await prisma.nPC.create({
      data: {
        name: data.name,
        race: data.race,
        class: data.class,
        alignment: data.alignment,
        description: data.description,
        background: data.background,
        personality: data.personality,
        goals: data.goals,
      },
    });
    return NextResponse.json(npc);
  } catch (error) {
    console.error('Error creating NPC:', error);
    return NextResponse.json({ error: 'Failed to create NPC' }, { status: 500 });
  }
}