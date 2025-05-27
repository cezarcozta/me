'use client';

import { LanguageProvider } from '../lib/context/LanguageContext';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
} 