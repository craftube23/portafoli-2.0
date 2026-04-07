
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
      projects_title: "MY PROJECTS",
      projects_subtitle: "A selection of my most recent and outstanding works.",
      projects_view_more: "VIEW MORE PROJECTS",
      projects_featured: "FEATURED",
      // Descripciones de proyectos
      desc_luxtime:
        "Virtual store designed with a sophisticated aesthetic inspired by Swiss brands. Focused on a smooth and minimalist user experience.",
      desc_datacore:
        "Design and normalization (3NF) of a database for real estate management. Query optimization and data architecture.",
      desc_bazzite:
        "Customization of an immutable Linux environment based on Fedora. Automation scripts and performance optimization.",
      desc_brand:
        "Personal brand concept integrating musical harmony with software development. Rhythmic interface design.",
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
      projects_title: "MIS PROYECTOS",
      projects_subtitle:
        "Una selección de mis trabajos más recientes y destacados.",
      projects_view_more: "VER MÁS PROYECTOS",
      projects_featured: "DESTACADO",
      // Descripciones de proyectos
      desc_luxtime:
        "Tienda virtual diseñada con una estética sofisticada inspirada en marcas suizas. Enfocada en una experiencia de usuario fluida y minimalista.",
      desc_datacore:
        "Diseño y normalización (3FN) de una base de datos para gestión de bienes raíces. Optimización de consultas y arquitectura de datos.",
      desc_bazzite:
        "Personalización de entorno Linux inmutable basado en Fedora. Scripts de automatización y optimización de rendimiento.",
      desc_brand:
        "Concepto de marca personal que integra la armonía musical con el desarrollo de software. Diseño de interfaces rítmicas.",
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
