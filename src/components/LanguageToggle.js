import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = ({ className = "" }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage} 
      className={`lang_btn ${className}`}
      aria-label={`Switch to ${language === "vi" ? "English" : "Vietnamese"}`}
    >
      <span>{language === "vi" ? "EN" : "VI"}</span>
    </button>
  );
};

export default LanguageToggle; 