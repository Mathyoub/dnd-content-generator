import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function DELETE(
  request: Request,
  { params }: { params: { id: string; campaignId: string } }
) {
  try {
    // Delete the relationship
    await prisma.campaignItem.delete({
      where: {
        campaignId_itemId: {
          campaignId: params.campaignId,
          itemId: params.id
        }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error removing item from campaign:', error);
    return NextResponse.json({ error: 'Failed to remove item from campaign' }, { status: 500 });
  }
}