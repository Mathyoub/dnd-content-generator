import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

type CampaignRelation = {
  campaign: any;
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await context.params;
    let content;

    switch (type) {
      case 'cities':
        content = await prisma.city.findMany({
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        content = content.map((city) => ({
          ...city,
          notableLocations: city.notableLocations as string[],
          campaigns: city.campaigns.map((cc) => cc.campaign)
        }));
        break;
      case 'npcs':
        content = await prisma.nPC.findMany({
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        content = content.map((npc) => ({
          ...npc,
          goals: npc.goals as string[],
          campaigns: npc.campaigns.map((nc) => nc.campaign)
        }));
        break;
      case 'items':
        content = await prisma.item.findMany({
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        content = content.map((item) => ({
          ...item,
          properties: item.properties as string[],
          campaigns: item.campaigns.map((ic) => ic.campaign)
        }));
        break;
      default:
        return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await context.params;
    const body = await request.json();

    let content;
    switch (type) {
      case 'cities':
        content = await prisma.city.create({
          data: {
            ...body,
            notableLocations: body.notableLocations || [],
            population: parseInt(body.population) || 0
          },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        content.campaigns = content.campaigns.map((cc: CampaignRelation) => cc.campaign);
        break;
      case 'npcs':
        content = await prisma.npc.create({
          data: {
            ...body,
            goals: body.goals || []
          },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        content.campaigns = content.campaigns.map((nc: CampaignRelation) => nc.campaign);
        break;
      case 'items':
        content = await prisma.item.create({
          data: {
            ...body,
            properties: body.properties || []
          },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        content.campaigns = content.campaigns.map((ic: CampaignRelation) => ic.campaign);
        break;
      default:
        return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    return NextResponse.json(content, { status: 201 });
  } catch (error) {
    console.error('Error creating content:', error);
    return NextResponse.json(
      { error: 'Failed to create content' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await context.params;
    const searchParams = new URL(request.url).searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const body = await request.json();
    let content;

    switch (type) {
      case 'cities':
        content = await prisma.city.update({
          where: { id },
          data: {
            ...body,
            notableLocations: body.notableLocations || [],
            population: parseInt(body.population) || 0
          },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        content.campaigns = content.campaigns.map((cc: CampaignRelation) => cc.campaign);
        break;
      case 'npcs':
        content = await prisma.npc.update({
          where: { id },
          data: {
            ...body,
            goals: body.goals || []
          },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        content.campaigns = content.campaigns.map((nc: CampaignRelation) => nc.campaign);
        break;
      case 'items':
        content = await prisma.item.update({
          where: { id },
          data: {
            ...body,
            properties: body.properties || []
          },
          include: {
            campaigns: {
              include: {
                campaign: true
              }
            }
          }
        });
        content.campaigns = content.campaigns.map((ic: CampaignRelation) => ic.campaign);
        break;
      default:
        return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json(
      { error: 'Failed to update content' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await context.params;
    const searchParams = new URL(request.url).searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    switch (type) {
      case 'cities':
        await prisma.city.delete({ where: { id } });
        break;
      case 'npcs':
        await prisma.npc.delete({ where: { id } });
        break;
      case 'items':
        await prisma.item.delete({ where: { id } });
        break;
      default:
        return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Content deleted successfully' });
  } catch (error) {
    console.error('Error deleting content:', error);
    return NextResponse.json(
      { error: 'Failed to delete content' },
      { status: 500 }
    );
  }
}