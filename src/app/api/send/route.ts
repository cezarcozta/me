import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../../../server/resend';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    await sendEmail(formData);

    return NextResponse.json({ data: 'Email sent' }, { status: 202 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}