import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { fetchData } from '../utilits';

export const useLocalizedData = (basePath) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const path = language === 'en' ? `${basePath}_en` : basePath;
        const result = await fetchData(`/static/${path}.json`);
        setData(result);
      } catch (err) {
        console.error(`Error loading ${basePath} data:`, err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [basePath, language]);

  return { data, loading, error };
}; 