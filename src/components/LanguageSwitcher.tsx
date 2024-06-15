import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex items-center justify-center">
      <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
        PT-BR
      </p>
      {/* <Switch onClick={toggleLanguage} /> */}
      <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
        EN
      </p>
    </div>
  );
};

export default LanguageSwitcher;
