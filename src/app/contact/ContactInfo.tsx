"use client";

import { Github, Linkedin, Twitter, MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const ContactInfo = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      text: "São Paulo, SP - Brasil",
      label: t('contact.contactInfo.address'),
      ariaLabel: `${t('contact.contactInfo.address')}: São Paulo, SP - Brasil`,
    },
    {
      icon: Mail,
      text: "cezarcozta@gmail.com",
      label: t('contact.contactInfo.email'),
      ariaLabel: `${t('contact.contactInfo.email')}: cezarcozta@gmail.com`,
    },
    {
      icon: Phone,
      text:  'WhatsApp',
      label: t('contact.contactInfo.phone'),
      href: "https://api.whatsapp.com/send?phone=5511973328747",
      ariaLabel: `${t('contact.contactInfo.phone')}: +55 (11) 97332-8747`,
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/cezarcozta",
      icon: Github,
      color: "hover:text-[#333]",
      ariaLabel: "Perfil no GitHub",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/cezarcozta",
      icon: Linkedin,
      color: "hover:text-[#0077b5]",
      ariaLabel: "Perfil no LinkedIn",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/cezarcozta",
      icon: Twitter,
      color: "hover:text-[#1da1f2]",
      ariaLabel: "Perfil no Twitter",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/cezarcozta/",
      icon: Instagram,
      color: "hover:text-[#E4405F]",
      ariaLabel: "Perfil no Instagram",
    },
  ];

  return (
    <div 
      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-sm h-full"
      role="region"
      aria-label={t('contact.contactInfo.title')}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4" tabIndex={0}>
            {t('contact.contactInfo.title')}
          </h3>
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div key={info.label} className="group">
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={info.ariaLabel}
                  >
                    <div 
                      className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-200"
                      aria-hidden="true"
                    >
                      <info.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-base">{info.text}</p>
                    </div>
                  </a>
                ) : (
                  <div 
                    className="flex items-center space-x-3 p-3 rounded-lg"
                    role="text"
                    aria-label={info.ariaLabel}
                  >
                    <div 
                      className="bg-primary/10 p-3 rounded-full"
                      aria-hidden="true"
                    >
                      <info.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-base">{info.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div 
          className="pt-6 border-t border-primary/10"
          role="navigation"
          aria-label={t('contact.contactInfo.social')}
        >
          <h4 className="text-sm font-medium mb-4" tabIndex={0}>
            {t('contact.contactInfo.social')}
          </h4>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white/10 p-3 rounded-full transition-all duration-200 hover:scale-110 ${social.color} focus:outline-none focus:ring-2 focus:ring-primary`}
                aria-label={social.ariaLabel}
              >
                <social.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 