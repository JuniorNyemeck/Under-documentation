
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'search.placeholder': 'Search documentation...',
    'search.results': 'Search Results',
    'search.found': 'Found {count} results',
    'nav.previous': 'Previous',
    'nav.next': 'Next',
    'welcome.title': 'Welcome to Under Framework Documentation',
    'welcome.subtitle': 'Select a topic from the sidebar to get started.',
    'breadcrumb.documentation': 'Documentation'
  },
  fr: {
    'search.placeholder': 'Rechercher dans la documentation...',
    'search.results': 'Résultats de recherche',
    'search.found': '{count} résultats trouvés',
    'nav.previous': 'Précédent',
    'nav.next': 'Suivant',
    'welcome.title': 'Bienvenue dans la Documentation Under Framework',
    'welcome.subtitle': 'Sélectionnez un sujet dans la barre latérale pour commencer.',
    'breadcrumb.documentation': 'Documentation'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('under-docs-language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('under-docs-language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
