import PageTitle from "@/components/page-title/page-title";
import { SendEmailForm } from "./sendEmailForm";
import { ContactInfo } from "./ContactInfo";

export default function Contact() {
  return (
    <>
      <PageTitle
        key="page-title-contact"
        title="Entre em contato"
        subtitle="Vamos conversar! Preencha o formulário ou me encontre nas redes sociais."
      />
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <SendEmailForm />
          </div>
        </div>
      </section>
    </>
  );
}