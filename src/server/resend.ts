'server-only';

import { ReactElement } from 'react';
import { EmailTemplate } from '../components/EmailTemplate';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function sendEmail(data: { name: string; email: string; subject: string; message: string }) {
    const name = data.name as string;
    const email = data.email as string;
    const from = `${name} <${email}>`;
    const to = ["cezarcozta@gmail.com"];
    const subject = data.subject as string;
    const message = data.message as string;
    console.log({name, email, from, to, subject, message})
    try {
        await resend.emails.send({
          from,
          to,
          subject,
          react: EmailTemplate({ message }) as ReactElement,
        });
    } catch (error) {
        return {error};
    }
} 