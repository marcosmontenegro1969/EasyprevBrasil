import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <img
        src="/img/br-flag.png"
        alt="Português"
        onClick={() => changeLanguage('pt')}
        className="language-icon"
      />
      <img
        src="/img/es-flag.png"
        alt="Español"
        onClick={() => changeLanguage('es')}
        className="language-icon"
      />
      <img
        src="/img/us-flag.png"
        alt="English"
        onClick={() => changeLanguage('en')}
        className="language-icon"
      />
    </div>
  );
}

export default LanguageSelector;
