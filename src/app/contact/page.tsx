'use client';

import PageTitle from "@/components/page-title/page-title";
import { SendEmailForm } from "./SendEmailForm";
import { ContactInfo } from "./ContactInfo";
import { useTranslation } from "@/lib/hooks/useTranslation";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle
        key="page-title-contact"
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />
      <main>
        <section 
          className="py-16 container mx-auto px-4"
          aria-label={t('contact.form.title')}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div 
              className="lg:col-span-1"
              role="complementary"
              aria-label={t('contact.contactInfo.title')}
            >
              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div 
              className="lg:col-span-2"
              role="main"
              aria-label={t('contact.form.title')}
            >
              <SendEmailForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}