import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css'

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'jp' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <label className="switch">
      <input 
        type="checkbox" 
        checked={i18n.language === 'jp'}
        onChange={toggleLanguage} 
      />
      <span className="slider round">
        <span className="en">EN</span>
        <span className="jp">日本語</span>
        <div className='highlight'></div>
      </span>
    </label>
  );
};

export default LanguageToggle;
