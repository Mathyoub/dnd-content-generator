import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Fetch the original NPC
    const originalNPC = await prisma.nPC.findUnique({
      where: { id: params.id },
      include: {
        campaigns: true
      }
    });

    if (!originalNPC) {
      return NextResponse.json({ error: 'NPC not found' }, { status: 404 });
    }

    // Create a new NPC with "Copy" appended to the name
    const newNPC = await prisma.nPC.create({
      data: {
        name: `${originalNPC.name} Copy`,
        race: originalNPC.race,
        class: originalNPC.class,
        alignment: originalNPC.alignment,
        description: originalNPC.description,
        background: originalNPC.background,
        personality: originalNPC.personality,
        goals: originalNPC.goals,
        // Copy all campaign relationships
        campaigns: {
          create: originalNPC.campaigns.map(campaign => ({
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
    const transformedNPC = {
      ...newNPC,
      campaigns: newNPC.campaigns.map((c: { campaign: any }) => c.campaign)
    };

    return NextResponse.json(transformedNPC);
  } catch (error) {
    console.error('Error duplicating NPC:', error);
    return NextResponse.json(
      { error: 'Failed to duplicate NPC', details: error },
      { status: 500 }
    );
  }
}