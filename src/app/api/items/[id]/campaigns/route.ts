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
    console.log('Updating item campaign:', { itemId: params.id, campaignId });

    // First, remove any existing campaign relationships
    await prisma.campaignItem.deleteMany({
      where: { itemId: params.id }
    });

    // If a new campaign is selected, create the relationship
    if (campaignId) {
      try {
        await prisma.campaignItem.create({
          data: {
            itemId: params.id,
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

    // Fetch the updated item with its campaigns
    const item = await prisma.item.findUnique({
      where: { id: params.id },
      include: {
        campaigns: {
          include: {
            campaign: true
          }
        }
      }
    });

    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // Transform the response to match the expected format
    const transformedItem = {
      ...item,
      campaignId: item.campaigns[0]?.campaignId || null,
      campaigns: item.campaigns.map(c => c.campaign)
    };

    return NextResponse.json(transformedItem);
  } catch (error) {
    console.error('Error updating item campaign:', error);
    return NextResponse.json(
      { error: 'Failed to update item campaign', details: error },
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