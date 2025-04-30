import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const campaignId = searchParams.get('campaignId');

    const items = await prisma.item.findMany({
      where: campaignId ? {
        campaigns: {
          some: {
            campaignId: campaignId
          }
        }
      } : undefined,
      include: {
        campaigns: {
          include: {
            campaign: true
          }
        }
      }
    });

    // Transform the response to match the expected format
    const transformedItems = items.map(item => ({
      ...item,
      campaigns: item.campaigns.map(campaignItem => campaignItem.campaign)
    }));

    return NextResponse.json(transformedItems);
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const item = await prisma.item.create({
      data: {
        name: data.name,
        type: data.type,
        rarity: data.rarity,
        description: data.description,
        properties: data.properties,
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
  }
}