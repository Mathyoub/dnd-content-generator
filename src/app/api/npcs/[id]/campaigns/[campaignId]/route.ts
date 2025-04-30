import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function DELETE(
  request: Request,
  { params }: { params: { id: string; campaignId: string } }
) {
  try {
    // Delete the relationship
    await prisma.campaignNPC.delete({
      where: {
        campaignId_npcId: {
          campaignId: params.campaignId,
          npcId: params.id
        }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error removing NPC from campaign:', error);
    return NextResponse.json({ error: 'Failed to remove NPC from campaign' }, { status: 500 });
  }
}