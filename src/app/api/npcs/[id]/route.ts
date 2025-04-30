import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const npc = await prisma.nPC.findUnique({
      where: { id: params.id },
      include: {
        campaigns: {
          include: {
            campaign: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    });

    if (!npc) {
      return NextResponse.json({ error: 'NPC not found' }, { status: 404 });
    }

    // Transform the response
    const transformedNPC = {
      ...npc,
      campaigns: npc.campaigns.map(cc => cc.campaign)
    };

    return NextResponse.json(transformedNPC);
  } catch (error) {
    console.error('Error fetching NPC:', error);
    return NextResponse.json({ error: 'Failed to fetch NPC' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const npc = await prisma.nPC.update({
      where: { id: params.id },
      data: {
        name: data.name,
        race: data.race,
        class: data.class,
        alignment: data.alignment,
        description: data.description,
        background: data.background,
        personality: data.personality,
        goals: data.goals
      },
      include: {
        campaigns: {
          include: {
            campaign: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    });

    // Transform the response
    const transformedNPC = {
      ...npc,
      campaigns: npc.campaigns.map(cc => cc.campaign)
    };

    return NextResponse.json(transformedNPC);
  } catch (error) {
    console.error('Error updating NPC:', error);
    return NextResponse.json({ error: 'Failed to update NPC' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Delete all campaign associations first
    await prisma.campaignNPC.deleteMany({
      where: { npcId: params.id }
    });

    // Then delete the NPC
    const deletedNPC = await prisma.nPC.delete({
      where: { id: params.id }
    });

    return NextResponse.json(deletedNPC);
  } catch (error) {
    console.error('Error deleting NPC:', error);
    return NextResponse.json(
      { error: 'Failed to delete NPC' },
      { status: 500 }
    );
  }
}