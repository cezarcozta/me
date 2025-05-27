'use client';

import { useLanguage } from '../context/LanguageContext';
import data from '../../data.json';

type TranslationData = typeof data;
type TranslationKey = keyof TranslationData;
type NestedTranslation = string | { [key: string]: NestedTranslation };

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    try {
      const keys = key.split('.');
      const section = keys[0] as TranslationKey;
      const translationData = data[section];
      
      if (!translationData) {
        console.warn(`Section ${section} not found in translations`);
        return key;
      }

      const langData = translationData[language];
      if (!langData) {
        console.warn(`No translations found for language ${language} in section ${section}`);
        return key;
      }

      let result: NestedTranslation = langData;
      for (let i = 1; i < keys.length; i++) {
        if (typeof result === 'string') {
          console.warn(`Unexpected end of translation path at ${keys.slice(0, i).join('.')}`);
          return key;
        }
        result = result[keys[i]];
        if (result === undefined) {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }

      if (typeof result !== 'string') {
        console.warn(`Translation value is not a string: ${key}`);
        return key;
      }

      return result;
    } catch (error) {
      console.error('Error getting translation:', error);
      return key;
    }
  };

  return { t };
} 