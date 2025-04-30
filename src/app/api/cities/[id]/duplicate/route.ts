import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = await context.params;

    // Fetch the original city
    const originalCity = await prisma.city.findUnique({
      where: { id },
      include: {
        campaigns: true
      }
    });

    if (!originalCity) {
      return NextResponse.json({ error: 'City not found' }, { status: 404 });
    }

    // Create a new city with "Copy" appended to the name
    const newCity = await prisma.city.create({
      data: {
        name: `${originalCity.name} Copy`,
        size: originalCity.size,
        population: originalCity.population,
        government: originalCity.government,
        economy: originalCity.economy,
        description: originalCity.description,
        notableLocations: JSON.stringify(originalCity.notableLocations),
        history: originalCity.history,
        // Copy all campaign relationships
        campaigns: {
          create: originalCity.campaigns.map(campaign => ({
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
    const transformedCity = {
      ...newCity,
      campaigns: (newCity as any).campaigns?.map((c: { campaign: any }) => c.campaign) || []
    };

    return NextResponse.json(transformedCity);
  } catch (error) {
    console.error('Error duplicating city:', error);
    return NextResponse.json(
      { error: 'Failed to duplicate city', details: error },
      { status: 500 }
    );
  }
}