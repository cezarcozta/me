"use client";

import PageTitle from "@/components/page-title/page-title";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Layout, Lightbulb, ArrowRight } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Criação de aplicações web modernas e escaláveis utilizando as melhores tecnologias do mercado.",
      icon: Code,
      ariaLabel: "Serviço de Desenvolvimento Web",
    },
    {
      title: "Arquitetura de Software",
      description: "Planejamento e implementação de soluções robustas e escaláveis para seu negócio.",
      icon: Layout,
      ariaLabel: "Serviço de Arquitetura de Software",
    },
    {
      title: "Consultoria Técnica",
      description: "Orientação especializada para otimizar seus processos e tecnologias.",
      icon: Lightbulb,
      ariaLabel: "Serviço de Consultoria Técnica",
    },
  ];

  const navigationLinks = [
    {
      href: "/about",
      text: "Sobre",
      description: "Conheça minha trajetória e experiência",
      ariaLabel: "Ir para página Sobre - Conheça minha trajetória e experiência",
    },
    {
      href: "/skills",
      text: "Habilidades",
      description: "Explore minhas competências técnicas",
      ariaLabel: "Ir para página Habilidades - Explore minhas competências técnicas",
    },
  ];

  return (
    <main className="min-h-screen">
      <PageTitle
        key="page-title-home"
        title="SEJA BEM VINDO"
        subtitle="Transformando ideias em realidade"
      />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16"
          aria-label="Navegação principal"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  aria-label={link.ariaLabel}
                  className="focus:outline-none focus:ring-2 focus:ring-primary rounded-lg group"
                >
                  <div className="p-6 rounded-lg transition-colors duration-200 hover:bg-white/10 focus-within:bg-white/10">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary group-focus:text-primary transition-colors">
                      {link.text}
                    </h2>
                    <p className="text-muted-foreground group-hover:text-foreground group-focus:text-foreground mb-4">
                      {link.description}
                    </p>
                    <ArrowRight className="w-5 h-5 text-secondary transform group-hover:translate-x-2 group-focus:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-16"
          aria-labelledby="services-title"
        >
          <h2 id="services-title" className="text-2xl font-bold text-center mb-8">
            Minhas Especialidades
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card>
                  <CardContent 
                    className="p-6 flex flex-col items-center text-center"
                    role="article"
                    aria-label={service.ariaLabel}
                  >
                    <service.icon className="w-12 h-12 text-primary mb-4" aria-hidden="true" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-16"
          aria-label="Seção de contato"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Vamos Criar Algo Extraordinário?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Estou pronto para transformar sua visão em realidade
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-primary/10 rounded-full font-medium hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Entre em contato para discutir seu projeto"
            >
              <span>Entre em Contato</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
