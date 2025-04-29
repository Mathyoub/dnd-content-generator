import { NextResponse } from 'next/server';
import { generateCity } from '@/lib/openai';

export async function POST(request: Request) {
  try {
    const city = await generateCity();
    return NextResponse.json(city);
  } catch (error) {
    console.error('Error generating city:', error);
    return NextResponse.json(
      { error: 'Failed to generate city' },
      { status: 500 }
    );
  }
}