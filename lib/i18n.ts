
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
      // --- NUEVOS TEXTOS HERO ---
      hero_available: "AVAILABLE FOR PROJECTS",
      hero_greeting: "HELLO, I'M",
      hero_role: "// Andres - Front-end Developer",
      hero_desc:
        "Front-end developer and independent musician. Focused on creating interfaces with rhythm, harmony, and a unique gaming aesthetic.",
      hero_btn_projects: "VIEW PROJECTS",
      hero_btn_contact: "CONTACT",
      hero_projects_count: "5 PROJECTS",
      hero_exp: "1 YEAR EXP",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi Portafolio",
      projects: "Proyectos",
      skills: "Habilidades",
      about: "Sobre mí",
      // --- NUEVOS TEXTOS HERO ---
      hero_available: "DISPONIBLE PARA PROYECTOS",
      hero_greeting: "HOLA, SOY",
      hero_role: "// Andres - Desarrollador Front-end",
      hero_desc:
        "Desarrollador Front-end y músico independiente. Enfocado en crear interfaces con ritmo, armonía y una estética gaming única.",
      hero_btn_projects: "VER PROYECTOS",
      hero_btn_contact: "CONTACTAR",
      hero_projects_count: "5 PROYECTOS",
      hero_exp: "1 AÑO EXP",
    },
  },
};

// 2. Aquí configuras la librería
if (typeof window !== "undefined") { // <--- ESTO ES LA CLAVE
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "es", // Cámbialo a 'es' si quieres que empiece en español
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false, // Evita errores de carga en Next.js
      },
    });
}

export default i18n;
