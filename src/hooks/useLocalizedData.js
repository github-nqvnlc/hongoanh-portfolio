import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { fetchData } from '../utilits';

export const useLocalizedData = (basePath) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    let isMounted = true;
    
    const loadData = async () => {
      if (!isMounted) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const path = language === 'en' ? `${basePath}_en` : basePath;
        const result = await fetchData(`/static/${path}.json`);
        
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        console.error(`Error loading ${basePath} data:`, err);
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();
    
    return () => {
      isMounted = false;
    };
  }, [basePath, language]);

  return { data, loading, error };
}; 