import { NextResponse } from 'next/server';
import { stripe } from '../../utils/stripe';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session || session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Invalid or unpaid session' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Verify the purchase in your database
    // 2. Generate a secure, time-limited download URL
    // 3. Return the URL to the client

    // For now, we'll return a placeholder URL
    const downloadUrl = '/downloads/placeholder.zip';

    return NextResponse.json({ downloadUrl });
  } catch (error) {
    console.error('Error retrieving download URL:', error);
    return NextResponse.json(
      { error: 'Error retrieving download URL' },
      { status: 500 }
    );
  }
} 