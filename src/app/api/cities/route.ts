import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const cities = await prisma.city.findMany({
      include: {
        campaign: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(cities);
  } catch (error) {
    console.error('Error fetching cities:', error);
    return NextResponse.json({ error: 'Failed to fetch cities' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { campaignId, ...cityData } = data;

    const city = await prisma.city.create({
      data: {
        ...cityData,
        campaignId: campaignId || null,
      },
      include: {
        campaign: true,
      },
    });

    return NextResponse.json(city);
  } catch (error) {
    console.error('Error creating city:', error);
    return NextResponse.json(
      { error: 'Failed to create city', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}