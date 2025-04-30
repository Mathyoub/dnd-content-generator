import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const campaignId = searchParams.get('campaignId');

    const cities = await prisma.city.findMany({
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
    const transformedCities = cities.map(city => ({
      ...city,
      campaigns: city.campaigns.map(campaignCity => campaignCity.campaign)
    }));

    return NextResponse.json(transformedCities);
  } catch (error) {
    console.error('Error fetching cities:', error);
    return NextResponse.json({ error: 'Failed to fetch cities' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const city = await prisma.city.create({
      data: {
        name: data.name,
        size: data.size,
        population: data.population,
        government: data.government,
        economy: data.economy,
        notableLocations: data.notableLocations,
        description: data.description,
        history: data.history || '',
      },
    });
    return NextResponse.json(city);
  } catch (error) {
    console.error('Error creating city:', error);
    return NextResponse.json({ error: 'Failed to create city' }, { status: 500 });
  }
}