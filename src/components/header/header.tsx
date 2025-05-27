"use client";

import Link from "next/link";
import { Logo } from "../logo";
import { useState } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "@/lib/hooks/useTranslation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo href='/' text="cezarcozta" color="#CACDA5"/>
          
          {/* Mobile menu button */}
          <div className="flex items-center gap-4 sm:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-primary-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex sm:items-center sm:gap-6">
            <div className="flex space-x-6">
              <Link 
                href='/about' 
                className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-primary-dark rounded-md"
              >
                {t('menu.about')}
              </Link>
              <Link 
                href='/skills' 
                className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-primary-dark rounded-md"
              >
                {t('menu.skills')}
              </Link>
              <Link 
                href='/contact'
                className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-primary-dark rounded-md"
              >
                {t('menu.contact')}
              </Link>
            </div>
            <LanguageSwitcher />
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          <Link
            href='/about'
            className="block text-gray-200 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-primary-dark rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('menu.about')}
          </Link>
          <Link
            href='/skills'
            className="block text-gray-200 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-primary-dark rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('menu.skills')}
          </Link>
          <Link
            href='/contact'
            className="block text-gray-200 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-primary-dark rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('menu.contact')}
          </Link>
        </div>
      </div>
    </header>
  );
}
