import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export async function GET() {
  try {
    console.log('Starting to fetch cities...');
    console.log('Prisma client initialized:', !!prisma);

    const cities = await prisma.city.findMany({
      include: {
        campaign: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    console.log('Cities fetched successfully:', cities.length);
    return NextResponse.json(cities);
  } catch (error) {
    console.error('Detailed error fetching cities:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : 'Unknown',
    });

    return NextResponse.json(
      {
        error: 'Failed to fetch cities',
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
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