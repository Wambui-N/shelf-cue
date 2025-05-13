import { NextResponse } from 'next/server';
import MailerLite from '@mailerlite/mailerlite-nodejs';

if (!process.env.MAILERLITE_API_KEY) {
  throw new Error('MAILERLITE_API_KEY is not defined');
}

const mailerLite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!email || !name) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Create subscriber with correct method name
    const params = {
      email: email,
      fields: {
        name: name
      }
    };

    try {
      const response = await mailerLite.subscribers.createOrUpdate(params);
      console.log('MailerLite response:', response);

      return NextResponse.json({ 
        success: true, 
        message: 'Successfully subscribed to the mailing list' 
      });
    } catch (mailerLiteError: any) {
      console.error('MailerLite API error:', mailerLiteError);
      
      // Check for specific MailerLite error messages
      const errorMessage = mailerLiteError.message || 'Failed to subscribe to the mailing list';
      
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process subscription request' },
      { status: 500 }
    );
  }
} 