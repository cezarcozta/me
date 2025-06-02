import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../../../server/resend';
import { sendEmailSchema } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = sendEmailSchema.safeParse(body);

    if (!validation.success) {
      // Return validation errors
      return NextResponse.json(
        { 
          error: "Validation failed", 
          errors: validation.error.flatten().fieldErrors 
        }, 
        { status: 400 }
      );
    }

    const data = validation.data;
    await sendEmail(data);

    return NextResponse.json(
      { message: 'Email Sent Successfully' }, 
      { status: 202 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        error: "Erro ao enviar email",
        message: error instanceof Error ? error.message : "Internal Server Error"
      }, 
      { status: 500 }
    );
  }
}