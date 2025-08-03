import { useLanguage } from "../context/LanguageContext";

const LanguageTest = () => {
  const { language, toggleLanguage, t, translations } = useLanguage();

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: '#fff', 
      padding: '10px', 
      border: '1px solid #ccc',
      zIndex: 9999,
      fontSize: '12px'
    }}>
      <div>Current Language: {language}</div>
      <div>Translations loaded: {Object.keys(translations).length > 0 ? 'Yes' : 'No'}</div>
      <div>Test translation: {t('nav.home')}</div>
      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
};

export default LanguageTest; 