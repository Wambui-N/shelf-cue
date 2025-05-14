import { NextResponse } from 'next/server';

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': MAILERLITE_API_KEY || '',
      },
      body: JSON.stringify({
        email,
        groups: [MAILERLITE_GROUP_ID],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error.message || 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
} 