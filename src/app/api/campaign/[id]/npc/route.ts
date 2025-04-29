import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: Request, context: { params: { id: string } }) {
  try {
    const params = await context.params;
    const { id } = params;
    const data = await request.json();

    // Save the NPC
    const npc = await prisma.nPC.create({
      data: {
        campaignId: id,
        name: data.name,
        race: data.race,
        class: data.class,
        alignment: data.alignment,
        description: data.description,
        background: data.background,
        personality: data.personality,
        goals: data.goals,
      },
    });
    return NextResponse.json(npc);
  } catch (error) {
    console.error('Error saving NPC:', error);
    return NextResponse.json({ error: 'Failed to save NPC' }, { status: 500 });
  }
}

export async function GET(request: Request, context: { params: { id: string } }) {
  try {
    const params = await context.params;
    const { id } = params;
    const npcs = await prisma.nPC.findMany({
      where: { campaignId: id },
    });
    return NextResponse.json(npcs);
  } catch (error) {
    console.error('Error fetching NPCs:', error);
    return NextResponse.json({ error: 'Failed to fetch NPCs' }, { status: 500 });
  }
}