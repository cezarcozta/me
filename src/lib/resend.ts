'server-only';

import { EmailTemplate } from '../components/EmailTemplate';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function sendEmail(formData: FormData) {
    const from = `${formData.get('name')} <${formData.get('email')}>`;
    const to = 'cezarcozta@gmail.com';
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    try {
        await resend.emails.send({
          from,
          to,
          subject,
          react: EmailTemplate({ message }),
        });
    } catch (error) {
        return {error};
    }
} 