import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../../../server/resend';
import { sendEmailSchema } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body against schema
    const result = sendEmailSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { 
          error: "Validation failed", 
          errors: result.error.flatten().fieldErrors 
        }, 
        { status: 400 }
      );
    }

    // Send email with validated data
    await sendEmail(result.data);

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