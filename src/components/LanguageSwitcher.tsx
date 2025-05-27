'use client';

import { useLanguage } from '../lib/context/LanguageContext';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center gap-2 bg-primary-dark/20 rounded-full p-1">
      
      <div className="flex items-center ml-7">
        <motion.button
          onClick={() => setLanguage('pt')}
          className={`relative px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200
            ${language === 'pt'
              ? 'text-primary bg-white'
              : 'text-gray-200 hover:text-white'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          pt-BR
        </motion.button>
        <motion.button
          onClick={() => setLanguage('en')}
          className={`relative px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200
            ${language === 'en'
              ? 'text-primary bg-white'
              : 'text-gray-200 hover:text-white'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          en-US
        </motion.button>
      </div>
    </div>
  );
} 