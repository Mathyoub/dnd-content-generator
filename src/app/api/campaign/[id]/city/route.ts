import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: Request, context: { params: { id: string } }) {
  try {
    const params = await context.params;
    const { id } = params;
    const data = await request.json();

    // Save the city
    const city = await prisma.city.create({
      data: {
        campaignId: id,
        name: data.name,
        size: data.size,
        population: data.population,
        government: data.government,
        economy: data.economy,
        notableLocations: data.notableLocations,
        description: data.description,
        history: data.history,
      },
    });
    return NextResponse.json(city);
  } catch (error) {
    console.error('Error saving city:', error);
    return NextResponse.json({ error: 'Failed to save city' }, { status: 500 });
  }
}

export async function GET(request: Request, context: { params: { id: string } }) {
  try {
    const params = await context.params;
    const { id } = params;
    const cities = await prisma.city.findMany({
      where: { campaignId: id },
    });
    return NextResponse.json(cities);
  } catch (error) {
    console.error('Error fetching cities:', error);
    return NextResponse.json({ error: 'Failed to fetch cities' }, { status: 500 });
  }
}