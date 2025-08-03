import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('vi');
  const [translations, setTranslations] = useState({
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      experience: 'Kinh nghiệm',
      portfolio: 'Dự án',
      service: 'Dịch vụ',
      blog: 'Blog',
      contact: 'Liên hệ'
    },
    hero: {
      hello: 'Xin chào, tôi là',
      download_cv: 'Tải CV'
    },
    experience: {
      title: 'Kinh nghiệm làm việc',
      subtitle: 'Experience',
      description: 'Hành trình nghề nghiệp và những kinh nghiệm tích lũy',
      responsibilities: 'Công việc đã thực hiện',
      achievements: 'Kết quả đạt được',
      technologies: 'Kỹ năng & Công cụ'
    }
  });

  // Load language preference from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  // Load translations based on current language
  useEffect(() => {
    const loadTranslations = async () => {
      if (typeof window === 'undefined') return;
      
      try {
        console.log('Loading translations for language:', language);
        const response = await fetch(`/static/translations_${language}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Loaded translations:', data);
        setTranslations(data);
      } catch (error) {
        console.error('Error loading translations:', error);
        // Keep current translations as fallback
      }
    };

    loadTranslations();
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'vi' ? 'en' : 'vi';
    console.log('Toggling language from', language, 'to', newLanguage);
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  const t = (key) => {
    // Handle nested keys like "nav.home"
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return original key if not found
      }
    }
    
    return value || key;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 