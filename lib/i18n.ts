import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Aquí defines tus traducciones directamente por ahora
const resources = {
  en: {
    translation: {
      projects_title: "Featured Projects",
      skills_title: "My Skills",
      change_lang: "Language",
    },
  },
  es: {
    translation: {
      projects_title: "Proyectos Destacados",
      skills_title: "Mis Habilidades",
      change_lang: "Idioma",
    },
  },
};