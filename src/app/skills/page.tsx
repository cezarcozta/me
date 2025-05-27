import PageTitle from "@/components/page-title/page-title";
import { SkillCard } from "./skillCard";

const skills = [
  {
    name: "JavaScript",
    description: "Linguagem de programação versátil para web",
    level: 85,
    category: "Desenvolvimento",
    iconName: "Code",
    years: 6,
  },
  {
    name: "TypeScript",
    description: "Superset tipado do JavaScript",
    level: 70,
    category: "Desenvolvimento",
    iconName: "Variable",
    years: 6,
  },
  {
    name: "Python",
    description: "Linguagem de programação de alto nível",
    level: 60,
    category: "Desenvolvimento",
    iconName: "Book",
    years: 3,
  },
  {
    name: "React",
    description: "Biblioteca JavaScript para interfaces de usuário",
    level: 60,
    category: "Frontend",
    iconName: "Terminal",
    years: 6,
  },
  {
    name: "Next.js",
    description: "Framework React para interfaces e rotas",
    level: 85,
    category: "Fullstack",
    iconName: "Terminal",
    years: 6,
  },
  {
    name: "UI/UX Design",
    description: "Design de interfaces e experiências de usuário",
    level: 45,
    category: "Design",
    iconName: "Lightbulb",
    years: 6,
  },
  {
    name: "Node.js",
    description: "Ambiente de execução JavaScript do lado do servidor",
    level: 60,
    category: "Backend",
    iconName: "Database",
    years: 6,
  },
  {
    name: "Express.js",
    description: "Ambiente de execução JavaScript do lado do servidor",
    level: 75,
    category: "Backend",
    iconName: "Database",
    years: 6,
  },
  {
    name: "AWS",
    description: "Amazon Web Services",
    level: 25,
    category: "Cloud Provider",
    iconName: "Cloud",
    years: 3,
  },
  {
    name: "Azure",
    description: "Microsoft Azure",
    level: 15,
    category: "Cloud Provider",
    iconName: "Cloud",
    years: 2,
  },
  {
    name: "GCP",
    description: "Google Cloud Provider",
    level: 10,
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
      <section className="py-16 container mx-auto px-4">
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <div
              key={category}
              className="inline-flex items-center rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
