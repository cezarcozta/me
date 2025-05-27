'use client';

import PageTitle from "@/components/page-title/page-title";
import { SkillCard } from "./skillCard";
import { useTranslation } from "@/lib/hooks/useTranslation";

const skills = [
  {
    name: "JavaScript",
    level: 'ADVANCED',
    category: "Development",
    iconName: "Code",
    years: 6,
  },
  {
    name: "TypeScript",
    level: 'INTERMEDIATE',
    category: "Development",
    iconName: "Variable",
    years: 6,
  },
  {
    name: "Python",
    level: 'BEGINNER',
    category: "Development",
    iconName: "Book",
    years: 3,
  },
  {
    name: "React",
    level: 'ADVANCED',
    category: "Frontend",
    iconName: "Terminal",
    years: 6,
  },
  {
    name: "Next.js",
    level: 'ADVANCED',
    category: "Fullstack",
    iconName: "Terminal",
    years: 6,
  },
  {
    name: "UI/UX Design",
    level: 'BEGINNER',
    category: "Design",
    iconName: "Lightbulb",
    years: 2,
  },
  {
    name: "Node.js",
    level: 'INTERMEDIATE',
    category: "Backend",
    iconName: "Database",
    years: 6,
  },
  {
    name: "Express.js",
    level: 'ADVANCED',
    category: "Backend",
    iconName: "Database",
    years: 6,
  },
  {
    name: "AWS",
    level: 'INTERMEDIATE',
    category: "devops",
    iconName: "Cloud",
    years: 3,
  },
  {
    name: "Azure",
    level: 'BEGINNER',
    category: "devops",
    iconName: "Cloud",
    years: 3,
  },
  {
    name: "GCP",
    level: 'BEGINNER',
    category: "devops",
    iconName: "Cloud",
    years: 1,
  },
] as const;

const categories = Array.from(new Set(skills.map(skill => skill.category)));

export default function Skills() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle
        key="page-title-skills"
        title={t('skills.title')}
        subtitle={t('skills.subtitle')}
      />
      <main>
        <section 
          className="py-8 container mx-auto px-4"
          aria-label={t('skills.ariaLabels.skillsList')}
        >
          <nav 
            className="mb-6 flex flex-wrap gap-4 justify-center"
            aria-label={t('skills.ariaLabels.categoryFilter')}
          >
            {categories.map((category) => (
              <button
                key={category}
                className="inline-flex items-center rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                role="tab"
                aria-selected="false"
                aria-controls={`skills-${category.toLowerCase()}`}
              >
                {t(`skills.categories.${category.toLowerCase()}`)}
              </button>
            ))}
          </nav>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr"
            role="tabpanel"
            aria-label={t('skills.ariaLabels.skillsList')}
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                id={`skills-${skill.category.toLowerCase()}`}
                role="tabpanel"
                aria-labelledby={`tab-${skill.category.toLowerCase()}`}
              >
                <SkillCard skill={skill} index={index} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
