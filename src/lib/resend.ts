'server-only';

import { EmailTemplate } from '../components/EmailTemplate';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function sendEmail(formData: FormData) {
    try {
        const { data, error } = await resend.emails.send({
          from: `${formData.get('name')} <${formData.get('email')}>`,
          to: ['cezarcozta@gmail.com'],
          subject: formData.get('subject') as string,
          react: EmailTemplate({ message: formData.get('message') as string }),
        });
    
        if (error) {
          return {error};
        }
    
        return {data};
      } catch (error) {
        return {error};
      }
} 