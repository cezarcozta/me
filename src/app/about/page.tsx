"use client";

import { motion } from "framer-motion";
import PageTitle from "@/components/page-title/page-title";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/lib/hooks/useTranslation";

const Portuguese = () => {
  
  return (
    <>
     <h2 
        className="text-3xl font-bold mb-6 text-primary/90"
        tabIndex={0}
      >
        Quem Sou
      </h2>
      <div 
        className="prose prose-neutral dark:prose-invert max-w-none space-y-6"
        role="region"
        aria-label="Descrição profissional"
      >
        <p 
          className="text-lg leading-relaxed text-primary/50"
          tabIndex={0}
        >
         <span className="text-primary font-semibold">Engenheiro de Software</span> LOUCO por criar soluções tecnológicas que impactam positivamente a vida das pessoas. 
         Com mais de <span className="text-primary font-semibold">7 anos de experiência</span> em desenvolvimento web, sou especializado em tecnologias modernas.
        </p>
        <p 
          className="text-lg leading-relaxed text-primary/50"
          tabIndex={0}
        >
          Atualmente moro em <span className="text-primary font-semibold">Santo André, SP</span>, com uma trajetória diversificada na área de tecnologia. 
          Comecei minha jornada com suporte técnico, passei pela manutenção de sistemas legados e, mais tarde, migrei para o <span className="text-primary font-semibold">Desenvolvimento de Frontend Mobile e Web</span>. 
          Atualmente, trabalho com <span className="text-primary font-semibold">Desenvolvimento Backend</span>, <span className="text-primary font-semibold"> Integração de Sistemas</span> e <span className="text-primary font-semibold">Inteligência Artificial</span>.
        </p>
        <p 
          className="text-lg leading-relaxed text-primary/50"
          tabIndex={0}
        >
          Minhas principais competências técnicas incluem <span className="text-primary font-semibold">AWS</span>, <span className="text-primary font-semibold">Azure</span>, <span className="text-primary font-semibold">GCP</span>, 
          <span className="text-primary font-semibold">DevOps</span>, <span className="text-primary font-semibold">Express.js</span>, <span className="text-primary font-semibold">Next.js</span>, and <span className="text-primary font-semibold">Serverless 
          Architecture</span>. Sou apaixonado por construir soluções escaláveis e colaborar com equipes para impulsionar inovação e eficiência.
        </p>
      </div>
    </>
  )
}

const English = () => {
  return (
    <>
     <h2 
        className="text-3xl font-bold mb-6 text-primary/90"
        tabIndex={0}
      >
        Who am I
      </h2>
      <div 
        className="prose prose-neutral dark:prose-invert max-w-none space-y-6"
        role="region"
        aria-label="Descrição profissional"
      >
        <p 
          className="text-lg leading-relaxed text-primary/50"
          tabIndex={0}
        >
          <span className="text-primary font-semibold">Software Engineer</span> CRAZY about creating tech solutions that 
          positively impact people&apos;s lives. With over <span className="text-primary font-semibold">7 years of experience</span> in web development, 
          I specialize in modern technologies.
        </p>
        <p 
          className="text-lg leading-relaxed text-primary/50"
          tabIndex={0}
        >
          based in <span className="text-primary font-semibold">Santo André, SP</span>, with a diverse background in the tech industry. 
          I began my journey in support, moved into maintaining legacy systems, and later transitioned 
          to <span className="text-primary font-semibold">Mobile Frontend Development</span>. Currently, I&apos;m workin with <span className="text-primary font-semibold">Backend Development</span>,
          <span className="text-primary font-semibold"> Systems Integrations</span> and <span className="text-primary font-semibold">Artificial Intelligence</span>.
        </p>
        <p 
          className="text-lg leading-relaxed text-primary/50"
          tabIndex={0}
        >
          My core technical expertise includes <span className="text-primary font-semibold">AWS</span>, <span className="text-primary font-semibold">Azure</span>, <span className="text-primary font-semibold">GCP</span>, 
          <span className="text-primary font-semibold">DevOps</span>, <span className="text-primary font-semibold">Express.js</span>, <span className="text-primary font-semibold">Next.js</span>, 
          <span className="text-primary font-semibold">Flask</span>, <span className="text-primary font-semibold">Streamlit</span> and <span className="text-primary font-semibold">Serverless 
          Architecture</span>. Passionate about building scalable solutions and collaborating with teams 
          to drive innovation and efficiency.
        </p>
      </div>
    </>
  )
}


export default function About() {
  const { t } = useTranslation();
  console.log({t})
  return (
    <>
      <PageTitle
        title={t('about.title')}
        subtitle={t('about.subtitle')}
      />

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8">
          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            
            <Card className="overflow-hidden border-primary/10 hover:border-primary/20 transition-colors duration-300">
              <CardContent className="p-8">
              {t('about.card') === 'pt' ? <Portuguese /> : <English />}
              </CardContent>
            </Card>
          </motion.article>
        </div>
      </main>
    </>
  );
} 