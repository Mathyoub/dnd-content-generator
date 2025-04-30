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
            campaign: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    });

    if (!city) {
      return NextResponse.json({ error: 'City not found' }, { status: 404 });
    }

    // Transform the response
    const transformedCity = {
      ...city,
      campaigns: city.campaigns.map(cc => cc.campaign)
    };

    return NextResponse.json(transformedCity);
  } catch (error) {
    console.error('Error fetching city campaigns:', error);
    return NextResponse.json({ error: 'Failed to fetch city campaigns' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { campaignIds } = await request.json();
    console.log('Updating city campaigns:', { cityId: params.id, campaignIds });

    // First, remove all existing campaign relationships
    await prisma.campaignCity.deleteMany({
      where: { cityId: params.id }
    });

    // Create new relationships for all selected campaigns
    if (campaignIds && campaignIds.length > 0) {
      await prisma.campaignCity.createMany({
        data: campaignIds.map((campaignId: string) => ({
          cityId: params.id,
          campaignId
        }))
      });
    }

    // Fetch the updated city with its campaigns
    const city = await prisma.city.findUnique({
      where: { id: params.id },
      include: {
        campaigns: {
          include: {
            campaign: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    });

    if (!city) {
      return NextResponse.json({ error: 'City not found' }, { status: 404 });
    }

    // Transform the response
    const transformedCity = {
      ...city,
      campaigns: city.campaigns.map(cc => cc.campaign)
    };

    return NextResponse.json(transformedCity);
  } catch (error) {
    console.error('Error updating city campaigns:', error);
    return NextResponse.json(
      { error: 'Failed to update city campaigns', details: error },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { campaignId } = await request.json();
    console.log('Adding city to campaign:', { cityId: params.id, campaignId });

    // Create the new relationship
    await prisma.campaignCity.create({
      data: {
        cityId: params.id,
        campaignId
      }
    });

    // Fetch the updated city with its campaigns
    const city = await prisma.city.findUnique({
      where: { id: params.id },
      include: {
        campaigns: {
          include: {
            campaign: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    });

    if (!city) {
      return NextResponse.json({ error: 'City not found' }, { status: 404 });
    }

    // Transform the response
    const transformedCity = {
      ...city,
      campaigns: city.campaigns.map(cc => cc.campaign)
    };

    return NextResponse.json(transformedCity);
  } catch (error) {
    console.error('Error adding city to campaign:', error);
    return NextResponse.json(
      { error: 'Failed to add city to campaign', details: error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { campaignId } = await request.json();

    // Delete the relationship
    await prisma.campaignCity.delete({
      where: {
        campaignId_cityId: {
          campaignId,
          cityId: params.id
        }
      }
    });

    // Fetch the updated city with its campaigns
    const city = await prisma.city.findUnique({
      where: { id: params.id },
      include: {
        campaigns: {
          include: {
            campaign: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    });

    // Transform the response
    const transformedCity = {
      ...city,
      campaigns: city?.campaigns.map(cc => cc.campaign) || []
    };

    return NextResponse.json(transformedCity);
  } catch (error) {
    console.error('Error removing city from campaign:', error);
    return NextResponse.json({ error: 'Failed to remove city from campaign' }, { status: 500 });
  }
}