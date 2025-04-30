import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const city = await prisma.city.findUnique({
      where: { id: params.id },
      include: {
        campaigns: {
          include: {
            campaign: true
          }
        }
      }
    });

    if (!city) {
      return NextResponse.json({ error: 'City not found' }, { status: 404 });
    }

    // Transform the response to match the expected format
    const transformedCity = {
      ...city,
      campaignId: city.campaigns[0]?.campaignId || null,
      campaigns: city.campaigns.map(c => c.campaign)
    };

    return NextResponse.json(transformedCity);
  } catch (error) {
    console.error('Error fetching city:', error);
    return NextResponse.json(
      { error: 'Failed to fetch city' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, size, population, government, economy, notableLocations, description } = body;

    const city = await prisma.city.update({
      where: { id: params.id },
      data: {
        name,
        size,
        population,
        government,
        economy,
        notableLocations,
        description
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
      ...city,
      campaignId: city.campaigns[0]?.campaignId || null,
      campaigns: city.campaigns.map(c => c.campaign)
    };

    return NextResponse.json(transformedCity);
  } catch (error) {
    console.error('Error updating city:', error);
    return NextResponse.json(
      { error: 'Failed to update city' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Delete all campaign associations first
    await prisma.campaignCity.deleteMany({
      where: { cityId: params.id }
    });

    // Then delete the city
    const deletedCity = await prisma.city.delete({
      where: { id: params.id }
    });

    return NextResponse.json(deletedCity);
  } catch (error) {
    console.error('Error deleting city:', error);
    return NextResponse.json(
      { error: 'Failed to delete city' },
      { status: 500 }
    );
  }
}