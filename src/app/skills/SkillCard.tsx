"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { Book, Code, Database, Lightbulb, Terminal, Variable, Cloud, Calendar } from "lucide-react";
import { useTranslation } from "@/lib/hooks/useTranslation";
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
    level: string;
    category: string;
    iconName: keyof typeof IconMap;
    years: number;
  };
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps): ReactElement => {
  const { t } = useTranslation();
  const { name, level, category, iconName, years } = skill;
  const Icon = IconMap[iconName];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card 
        className="group h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary"
        tabIndex={0}
        role="article"
        aria-label={`${t('skills.ariaLabels.skill')}: ${name}`}
      >
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="bg-primary/5 p-3 rounded-xl transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110"
                aria-hidden="true"
              >
                <Icon className="h-6 w-6 text-primary transition-colors duration-300" />
              </div>
              <div>
                <CardTitle 
                  className="text-xl text-primary mb-1"
                  tabIndex={0}
                >
                  {name}
                </CardTitle>
                <Badge 
                  variant="secondary" 
                  className="text-xs font-normal"
                  aria-label={`${t('skills.ariaLabels.category')}: ${t(`skills.categories.${category.toLowerCase()}`)}`}
                >
                  {t(`skills.categories.${category.toLowerCase()}`)}
                </Badge>
              </div>
            </div>
          </div>
          
        </CardHeader>
        
        <CardContent className="pb-4">
          <div className="space-y-4">
            <div>
              <div 
                className="flex justify-between mb-2 text-sm"
                role="group"
                aria-label={t('skills.ariaLabels.proficiencyLevel')}
              >
                <span className="text-muted-foreground">{t('skills.proficiencyLevel')}</span>
                <Badge 
                  variant="default" 
                  className="text-xs font-bold text-foreground"
                  aria-label={`${t(`skills.levels.${level.toLowerCase()}`)}`}
                >
                  {t(`skills.levels.${level.toLowerCase()}`)}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter 
          className="pt-2 text-sm text-muted-foreground border-t"
          role="contentinfo"
          aria-label={t('skills.ariaLabels.experience')}
        >
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary font-bold transition-colors duration-300"/>
            <p tabIndex={0} className="text-muted-foreground">{t('skills.experience')}:</p>
            <p tabIndex={1} className="font-bold">
              {years} {t(years === 1 ? 'skills.year' : 'skills.years')}
            </p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};