import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import type { Campaign } from '@/generated/prisma';

type CampaignRelation = {
  campaign: Campaign;
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ type: string; id: string }> }
) {
  try {
    const { type, id } = await context.params;
    let content;

    switch (type) {
      case 'cities':
        content = await prisma.city.findUnique({
          where: { id },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        break;
      case 'npcs':
        content = await prisma.npc.findUnique({
          where: { id },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        break;
      case 'items':
        content = await prisma.item.findUnique({
          where: { id },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        break;
      default:
        return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    return NextResponse.json(content.campaigns.map((c: CampaignRelation) => c.campaign));
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return NextResponse.json(
      { error: 'Failed to fetch campaigns' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ type: string; id: string }> }
) {
  try {
    const { type, id } = await context.params;
    const { campaignId } = await request.json();

    const campaign = await prisma.campaign.findUnique({
      where: { id: campaignId }
    });

    if (!campaign) {
      return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
    }

    let content;
    switch (type) {
      case 'cities':
        content = await prisma.city.update({
          where: { id },
          data: {
            campaigns: {
              create: {
                campaignId
              }
            }
          },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        break;
      case 'npcs':
        content = await prisma.npc.update({
          where: { id },
          data: {
            campaigns: {
              create: {
                campaignId
              }
            }
          },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        break;
      case 'items':
        content = await prisma.item.update({
          where: { id },
          data: {
            campaigns: {
              create: {
                campaignId
              }
            }
          },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        break;
      default:
        return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    return NextResponse.json(content.campaigns.map((c: CampaignRelation) => c.campaign));
  } catch (error) {
    console.error('Error associating campaign:', error);
    return NextResponse.json(
      { error: 'Failed to associate campaign' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ type: string; id: string }> }
) {
  try {
    const { type, id } = await context.params;
    const searchParams = new URL(request.url).searchParams;
    const campaignId = searchParams.get('campaignId');

    if (!campaignId) {
      return NextResponse.json({ error: 'Campaign ID is required' }, { status: 400 });
    }

    let content;
    switch (type) {
      case 'cities':
        await prisma.campaignCity.delete({
          where: {
            campaignId_cityId: {
              campaignId,
              cityId: id
            }
          }
        });
        content = await prisma.city.findUnique({
          where: { id },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        break;
      case 'npcs':
        await prisma.campaignNPC.delete({
          where: {
            campaignId_npcId: {
              campaignId,
              npcId: id
            }
          }
        });
        content = await prisma.npc.findUnique({
          where: { id },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        break;
      case 'items':
        await prisma.campaignItem.delete({
          where: {
            campaignId_itemId: {
              campaignId,
              itemId: id
            }
          }
        });
        content = await prisma.item.findUnique({
          where: { id },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        break;
      default:
        return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    return NextResponse.json(content.campaigns.map((c: CampaignRelation) => c.campaign));
  } catch (error) {
    console.error('Error removing campaign association:', error);
    return NextResponse.json(
      { error: 'Failed to remove campaign association' },
      { status: 500 }
    );
  }
}