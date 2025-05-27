"use client";

import { motion } from "framer-motion";
import PageTitle from "@/components/page-title/page-title";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Sobre() {
  const contactInfo = [
    {
      icon: Github,
      label: "GitHub",
      value: "cezarcozta",
      link: "https://github.com/cezarcozta",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "cezarcozta",
      link: "https://linkedin.com/in/cezarcozta",
    },
    {
      icon: Mail,
      label: "Email",
      value: "cezarcozta@gmail.com",
      link: "mailto:cezarcozta@gmail.com",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "João Pessoa, PB",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (83) 99999-9999",
      link: "tel:+5583999999999",
    },
  ];

  return (
    <>
      <PageTitle
        title="Sobre Mim"
        subtitle="Conheça um pouco mais sobre minha trajetória e experiência profissional."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Quem Sou</h2>
                <div className="prose prose-neutral dark:prose-invert">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a full-stack developer CRAZY about creating tech solutions that 
                    positively impact people's lives. With over 6 years of experience in web development, 
                    I specialize in modern technologies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                  Brazilian developer based in Santo André, SP, with a diverse background in the tech industry. 
                  I began my journey in support, moved into maintaining legacy systems, and later transitioned 
                  to frontend development. Currently, I specialize in backend development, API management, and 
                  system integrations. My core technical expertise includes AWS, DevOps, Next.js, and Serverless 
                  architecture. Passionate about building scalable solutions and collaborating with teams 
                  to drive innovation and efficiency.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
        </div>
      </div>
    </>
  );
} 