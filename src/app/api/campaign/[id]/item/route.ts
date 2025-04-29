import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: Request, context: { params: { id: string } }) {
  try {
    const params = await context.params;
    const { id } = params;
    const data = await request.json();

    // Save the item
    const item = await prisma.item.create({
      data: {
        campaignId: id,
        name: data.name,
        type: data.type,
        rarity: data.rarity,
        description: data.description,
        properties: data.properties,
        history: data.history,
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error saving item:', error);
    return NextResponse.json({ error: 'Failed to save item' }, { status: 500 });
  }
}

export async function GET(request: Request, context: { params: { id: string } }) {
  try {
    const params = await context.params;
    const { id } = params;
    const items = await prisma.item.findMany({
      where: { campaignId: id },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
  }
}