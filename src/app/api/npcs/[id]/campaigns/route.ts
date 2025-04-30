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
    console.error('Error fetching NPC campaigns:', error);
    return NextResponse.json({ error: 'Failed to fetch NPC campaigns' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { campaignId } = await request.json();

    // Check if the relationship already exists
    const existing = await prisma.campaignNPC.findUnique({
      where: {
        campaignId_npcId: {
          campaignId,
          npcId: params.id
        }
      }
    });

    if (existing) {
      return NextResponse.json({ error: 'Relationship already exists' }, { status: 400 });
    }

    // Create the relationship
    await prisma.campaignNPC.create({
      data: {
        campaignId,
        npcId: params.id
      }
    });

    // Fetch the updated NPC with its campaigns
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

    // Transform the response
    const transformedNPC = {
      ...npc,
      campaigns: npc?.campaigns.map(cc => cc.campaign) || []
    };

    return NextResponse.json(transformedNPC);
  } catch (error) {
    console.error('Error adding NPC to campaign:', error);
    return NextResponse.json({ error: 'Failed to add NPC to campaign' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { campaignId } = await request.json();

    // Delete the relationship
    await prisma.campaignNPC.delete({
      where: {
        campaignId_npcId: {
          campaignId,
          npcId: params.id
        }
      }
    });

    // Fetch the updated NPC with its campaigns
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

    // Transform the response
    const transformedNPC = {
      ...npc,
      campaigns: npc?.campaigns.map(cc => cc.campaign) || []
    };

    return NextResponse.json(transformedNPC);
  } catch (error) {
    console.error('Error removing NPC from campaign:', error);
    return NextResponse.json({ error: 'Failed to remove NPC from campaign' }, { status: 500 });
  }
}