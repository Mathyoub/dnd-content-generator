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

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { campaignId } = await request.json();
    console.log('Updating city campaign:', { cityId: params.id, campaignId });

    // First, remove any existing campaign relationships
    await prisma.campaignCity.deleteMany({
      where: { cityId: params.id }
    });

    // If a new campaign is selected, create the relationship
    if (campaignId) {
      try {
        await prisma.campaignCity.create({
          data: {
            cityId: params.id,
            campaignId
          }
        });
      } catch (createError) {
        console.error('Error creating campaign relationship:', createError);
        return NextResponse.json(
          { error: 'Failed to create campaign relationship', details: createError },
          { status: 500 }
        );
      }
    }

    // Fetch the updated city with its campaigns
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
    console.error('Error updating city campaign:', error);
    return NextResponse.json(
      { error: 'Failed to update city campaign', details: error },
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