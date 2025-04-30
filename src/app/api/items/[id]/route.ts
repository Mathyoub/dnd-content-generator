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
    console.error('Error fetching item:', error);
    return NextResponse.json({ error: 'Failed to fetch item' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const item = await prisma.item.update({
      where: { id: params.id },
      data: {
        name: data.name,
        type: data.type,
        rarity: data.rarity,
        description: data.description,
        properties: data.properties
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
    const transformedItem = {
      ...item,
      campaigns: item.campaigns.map(cc => cc.campaign)
    };

    return NextResponse.json(transformedItem);
  } catch (error) {
    console.error('Error updating item:', error);
    return NextResponse.json({ error: 'Failed to update item' }, { status: 500 });
  }
}