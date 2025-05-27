"use client";

import { Github, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    text: "São Paulo, SP - Brasil",
    label: "Localização",
  },
  {
    icon: Phone,
    text: "+55 (11) 97332-8747",
    label: "Telefone",
    href: "tel:+5583999999999",
  },
  {
    icon: Mail,
    text: "cezarcozta@gmail.com",
    label: "Email",
    href: "mailto:cezarcozta@gmail.com",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/cezarcozta",
    icon: Github,
    color: "hover:text-[#333]",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/cezarcozta",
    icon: Linkedin,
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/cezarcozta",
    icon: Twitter,
    color: "hover:text-[#1da1f2]",
  },
];

export const ContactInfo = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-sm h-full">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                {info.href ? (
                  <a
                    href={info.href}
                    className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 hover:bg-white/10"
                  >
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-200">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-base">{info.text}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center space-x-3 p-3 rounded-lg">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <info.icon className="w-5 h-5 text-primary" />
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

        <div className="pt-6 border-t border-primary/10">
          <h4 className="text-sm font-medium mb-4">Me encontre nas redes</h4>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white/10 p-3 rounded-full transition-all duration-200 hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 