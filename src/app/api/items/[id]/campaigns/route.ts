import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const item = await prisma.item.findUnique({
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

    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // Transform the response
    const transformedItem = {
      ...item,
      campaigns: item.campaigns.map(cc => cc.campaign)
    };

    return NextResponse.json(transformedItem);
  } catch (error) {
    console.error('Error fetching item campaigns:', error);
    return NextResponse.json({ error: 'Failed to fetch item campaigns' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { campaignId } = await request.json();

    // Check if the relationship already exists
    const existing = await prisma.campaignItem.findUnique({
      where: {
        campaignId_itemId: {
          campaignId,
          itemId: params.id
        }
      }
    });

    if (existing) {
      return NextResponse.json({ error: 'Relationship already exists' }, { status: 400 });
    }

    // Create the relationship
    await prisma.campaignItem.create({
      data: {
        campaignId,
        itemId: params.id
      }
    });

    // Fetch the updated item with its campaigns
    const item = await prisma.item.findUnique({
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
    const transformedItem = {
      ...item,
      campaigns: item?.campaigns.map(cc => cc.campaign) || []
    };

    return NextResponse.json(transformedItem);
  } catch (error) {
    console.error('Error adding item to campaign:', error);
    return NextResponse.json({ error: 'Failed to add item to campaign' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { campaignId } = await request.json();

    // Delete the relationship
    await prisma.campaignItem.delete({
      where: {
        campaignId_itemId: {
          campaignId,
          itemId: params.id
        }
      }
    });

    // Fetch the updated item with its campaigns
    const item = await prisma.item.findUnique({
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
    const transformedItem = {
      ...item,
      campaigns: item?.campaigns.map(cc => cc.campaign) || []
    };

    return NextResponse.json(transformedItem);
  } catch (error) {
    console.error('Error removing item from campaign:', error);
    return NextResponse.json({ error: 'Failed to remove item from campaign' }, { status: 500 });
  }
}