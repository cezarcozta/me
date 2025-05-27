import PageTitle from "@/components/page-title/page-title";
import { SkillCard } from "./skillCard";

const skills = [
  {
    name: "JavaScript",
    level: 'AVANÇADO',
    category: "Desenvolvimento",
    iconName: "Code",
    years: 6,
  },
  {
    name: "TypeScript",
    level: 'INTERMEDIÁRIO',
    category: "Desenvolvimento",
    iconName: "Variable",
    years: 6,
  },
  {
    name: "Python",
    level: 'NOVATO',
    category: "Desenvolvimento",
    iconName: "Book",
    years: 3,
  },
  {
    name: "React",
    level: 'AVANÇADO',
    category: "Frontend",
    iconName: "Terminal",
    years: 6,
  },
  {
    name: "Next.js",
    level: 'AVANÇADO',
    category: "Fullstack",
    iconName: "Terminal",
    years: 6,
  },
  {
    name: "UI/UX Design",
    level: 'NOVATO',
    category: "Design",
    iconName: "Lightbulb",
    years: 2,
  },
  {
    name: "Node.js",
    level: 'INTERMEDIÁRIO',
    category: "Backend",
    iconName: "Database",
    years: 6,
  },
  {
    name: "Express.js",
    level: 'AVANÇADO',
    category: "Backend",
    iconName: "Database",
    years: 6,
  },
  {
    name: "AWS",
    level: 'INTERMEDIÁRIO',
    category: "Cloud Provider",
    iconName: "Cloud",
    years: 3,
  },
  {
    name: "Azure",
    level: 'NOVATO',
    category: "Cloud Provider",
    iconName: "Cloud",
    years: 3,
  },
  {
    name: "GCP",
    level: 'NOVATO',
    category: "Cloud Provider",
    iconName: "Cloud",
    years: 1,
  },
] as const;

const categories = Array.from(new Set(skills.map(skill => skill.category)));

export default function Skills() {
  return (
    <>
      <PageTitle
        key="page-title-skills"
        title="Minhas Habilidades"
        subtitle="Conheça minhas principais habilidades e competências técnicas."
      />
      <main>
        <section 
          className="py-16 container mx-auto px-4"
          aria-label="Lista de habilidades técnicas"
        >
          <nav 
            className="mb-8 flex flex-wrap gap-4 justify-center"
            aria-label="Filtro por categorias"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="inline-flex items-center rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                role="tab"
                aria-selected="false"
                aria-controls={`skills-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </nav>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
            role="tabpanel"
            aria-label="Lista de habilidades"
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
