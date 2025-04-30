import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const npcs = await prisma.nPC.findMany({
      include: {
        campaign: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(npcs);
  } catch (error) {
    console.error('Error fetching NPCs:', error);
    return NextResponse.json({ error: 'Failed to fetch NPCs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { campaignId, ...npcData } = data;

    const npc = await prisma.nPC.create({
      data: {
        ...npcData,
        campaignId: campaignId || null,
      },
      include: {
        campaign: true,
      },
    });

    return NextResponse.json(npc);
  } catch (error) {
    console.error('Error creating NPC:', error);
    return NextResponse.json(
      { error: 'Failed to create NPC' },
      { status: 500 }
    );
  }
}