
"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 1. Aquí defines tus "traducciones"
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my Portfolio",
      projects: "Projects",
      skills: "Skills",
      about: "About Me",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi Portafolio",
      projects: "Proyectos",
      skills: "Habilidades",
      about: "Sobre mí",
    },
  },
};

// 2. Aquí configuras la librería
i18n
  .use(LanguageDetector) // Esto detecta si el usuario habla español o inglés
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Si no sabe qué idioma es, usa inglés por defecto
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
