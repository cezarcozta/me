'server-only';

import { ReactElement } from 'react';
import { EmailTemplate } from '../components/EmailTemplate';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
let resend: Resend | null = null;

if (resendApiKey) {
  resend = new Resend(resendApiKey);
} else {
  console.warn('RESEND_API_KEY is not set. Email sending will be disabled.');
}

export async function sendEmail(data: { name: string; email: string; subject: string; message: string }) {
  const name = data.name as string;
  const email = data.email as string;
  const from = 'Site Portifolio <no-reply@cezarcozta.com>';
  const to = ['cezarcozta@gmail.com'];
  const subject = data.subject as string;
  const message = data.message as string;

  if (!resend) {
    console.warn('Skipping email send because Resend client is not configured.');
    return { message: 'Email not sent; Resend API key missing.' };
  }

  try {
    await resend.emails.send({
      from,
      to,
      subject,
      react: EmailTemplate({ name, email, message }) as ReactElement,
    });
    return { message: 'Email sent (Resend)' };
  } catch (error) {
    console.error('Resend send error:', error);
    throw error;
  }
} 