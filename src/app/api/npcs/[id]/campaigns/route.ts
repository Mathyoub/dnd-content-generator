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
    console.log('Updating NPC campaign:', { npcId: params.id, campaignId });

    // First, remove any existing campaign relationships
    await prisma.campaignNPC.deleteMany({
      where: { npcId: params.id }
    });

    // If a new campaign is selected, create the relationship
    if (campaignId) {
      try {
        await prisma.campaignNPC.create({
          data: {
            npcId: params.id,
            campaignId
          }
        });
      } catch (createError) {
        console.error('Error creating campaign relationship:', createError);
        return NextResponse.json(
          { error: 'Failed to create campaign relationship', details: createError },
          { status: 500 }
        );
      }
    }

    // Fetch the updated NPC with its campaigns
    const npc = await prisma.nPC.findUnique({
      where: { id: params.id },
      include: {
        campaigns: {
          include: {
            campaign: true
          }
        }
      }
    });

    if (!npc) {
      return NextResponse.json({ error: 'NPC not found' }, { status: 404 });
    }

    // Transform the response to match the expected format
    const transformedNPC = {
      ...npc,
      campaignId: npc.campaigns[0]?.campaignId || null,
      campaigns: npc.campaigns.map(c => c.campaign)
    };

    return NextResponse.json(transformedNPC);
  } catch (error) {
    console.error('Error updating NPC campaign:', error);
    return NextResponse.json(
      { error: 'Failed to update NPC campaign', details: error },
      { status: 500 }
    );
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