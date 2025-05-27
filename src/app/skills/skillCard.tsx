"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { Book, Code, Database, Lightbulb, Terminal, Variable, Cloud } from "lucide-react";
import type { ReactElement } from "react";

const IconMap = {
  Book,
  Code,
  Database,
  Lightbulb,
  Terminal,
  Variable,
  Cloud,
} as const;

interface SkillCardProps {
  skill: {
    name: string;
    description: string;
    level: number;
    category: string;
    iconName: keyof typeof IconMap;
    years: number;
  };
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps): ReactElement => {
  const { name, description, level, category, iconName, years } = skill;
  const Icon = IconMap[iconName];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/5 p-3 rounded-xl transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
                <Icon className="h-6 w-6 text-primary transition-colors duration-300" />
              </div>
              <div>
                <CardTitle className="text-xl mb-1">{name}</CardTitle>
                <Badge variant="secondary" className="text-xs font-normal">
                  {category}
                </Badge>
              </div>
            </div>
          </div>
          <CardDescription className="mt-3 line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pb-4">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-muted-foreground">Nível de Proficiência</span>
                <span className="font-medium text-primary">{level}%</span>
              </div>
              <div className="h-2 w-full bg-secondary/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-2 text-sm text-muted-foreground border-t">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-primary rounded-full opacity-75" />
            <p>{years} {years === 1 ? 'ano' : 'anos'} de experiência</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};