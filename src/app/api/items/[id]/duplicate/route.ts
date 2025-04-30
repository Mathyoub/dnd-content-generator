import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = await context.params;

    // Fetch the original item
    const originalItem = await prisma.item.findUnique({
      where: { id },
      include: {
        campaigns: true
      }
    });

    if (!originalItem) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // Create a new item with "Copy" appended to the name
    const newItem = await prisma.item.create({
      data: {
        name: `${originalItem.name} Copy`,
        type: originalItem.type,
        rarity: originalItem.rarity,
        description: originalItem.description,
        properties: JSON.stringify(originalItem.properties),
        // Copy all campaign relationships
        campaigns: {
          create: originalItem.campaigns.map(campaign => ({
            campaignId: campaign.campaignId
          }))
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

    // Transform the response to match the expected format
    const transformedItem = {
      ...newItem,
      campaigns: (newItem as any).campaigns?.map((c: { campaign: any }) => c.campaign) || []
    };

    return NextResponse.json(transformedItem);
  } catch (error) {
    console.error('Error duplicating item:', error);
    return NextResponse.json(
      { error: 'Failed to duplicate item', details: error },
      { status: 500 }
    );
  }
}