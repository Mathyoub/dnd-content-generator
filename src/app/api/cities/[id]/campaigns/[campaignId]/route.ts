import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function DELETE(
  request: Request,
  { params }: { params: { id: string; campaignId: string } }
) {
  try {
    // Delete the relationship
    await prisma.campaignCity.delete({
      where: {
        campaignId_cityId: {
          campaignId: params.campaignId,
          cityId: params.id
        }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error removing city from campaign:', error);
    return NextResponse.json({ error: 'Failed to remove city from campaign' }, { status: 500 });
  }
}