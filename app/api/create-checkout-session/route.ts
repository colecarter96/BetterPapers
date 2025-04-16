import { NextResponse } from 'next/server';
import { createCheckoutSession } from '@/app/utils/stripe';

export async function POST(request: Request) {
  try {
    const { packId } = await request.json();
    
    const session = await createCheckoutSession(
      packId,
      `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      `${process.env.NEXT_PUBLIC_BASE_URL}/packs/${packId}`
    );

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
} 