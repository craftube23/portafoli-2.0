"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Play } from "lucide-react"

// [PROYECTOS_AQUÍ] - Reemplaza estos datos con tus proyectos reales

const projects = [
  {
    id: 1,
    title: "LuxTime — Relojes de Lujo",
    description: "Tienda virtual diseñada con una estética sofisticada inspirada en marcas suizas. Enfocada en una experiencia de usuario fluida y minimalista utilizando bases sólidas de maquetación.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/luxtime.png", // Asegúrate de poner la captura en public/projects/
    liveUrl: "https://vente-relojes.netlify.app/",
    githubUrl: "https://github.com/craftube23",
    featured: true,
  },
  {
    id: 2,
    title: "Data Core — Inmobiliaria MySQL",
    description: "Diseño y normalización (3FN) de una base de datos para gestión de bienes raíces. Optimización de consultas y arquitectura de datos para manejo masivo de inmuebles.",
    tags: ["MySQL", "Database Design", "SQL"],
    image: null,
    liveUrl: "#",
    githubUrl: "https://github.com/craftube23",
    featured: true,
  },
  {
    id: 3,
    title: "Bazzite Gaming OS Config",
    description: "Personalización de entorno Linux inmutable basado en Fedora. Scripts de automatización y optimización de rendimiento para flujos de trabajo de desarrollo y gaming.",
    tags: ["Linux", "Bash", "Bazzite"],
    image: null,
    liveUrl: "#",
    githubUrl: "https://github.com/craftube23",
    featured: false,
  },
  {
    id: 4,
    title: "Beat & Code Brand",
    description: "Concepto de marca personal que integra la armonía musical con el desarrollo de software. Diseño de interfaces rítmicas y visuales de alto impacto.",
    tags: ["Front-end", "UX/UI", "Music"],
    image: null,
    liveUrl: "#",
    githubUrl: "https://github.com/craftube23",
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        transition: "transform 0.3s ease-out",
      }}
    >
      <div className={`hud-clip-lg overflow-hidden border-2 bg-card ${
        isHovered ? "neon-border-cyan" : "border-border"
      } transition-all duration-300`}>
        {/* Project image placeholder */}
        <div className="relative aspect-video overflow-hidden bg-darker-purple">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            // Dentro del return de ProjectCard, en el bloque del placeholder (cuando no hay imagen):
<div className="flex h-full w-full flex-col items-center justify-center border-b border-border p-4 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.05)_0%,transparent_70%)]">
  <div className="absolute inset-0 opacity-10 animate-pulse bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
  <Play className="mb-2 h-12 w-12 text-neon-cyan animate-pulse shadow-[0_0_15px_var(--neon-cyan)]" />
  <span className="font-mono text-[10px] tracking-[0.2em] text-neon-cyan/60 uppercase">
    System_Access: Granted
  </span>
  <div className="mt-2 h-1 w-24 bg-muted overflow-hidden rounded-full">
    <div className="h-full bg-neon-cyan animate-loading" />
  </div>
</div>
          )}

          {/* Overlay on hover */}
          <div className={`absolute inset-0 flex items-center justify-center gap-4 bg-darker-purple/80 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hud-clip flex items-center gap-2 border border-neon-cyan bg-neon-cyan/20 px-4 py-2 font-mono text-xs text-neon-cyan transition-all hover:bg-neon-cyan hover:text-darker-purple"
            >
              <ExternalLink className="h-4 w-4" />
              DEMO
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hud-clip flex items-center gap-2 border border-neon-magenta bg-neon-magenta/20 px-4 py-2 font-mono text-xs text-neon-magenta transition-all hover:bg-neon-magenta hover:text-darker-purple"
            >
              <Github className="h-4 w-4" />
              CODE
            </a>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute left-4 top-4 hud-clip border border-neon-pink/50 bg-darker-purple/90 px-3 py-1">
              <span className="font-mono text-xs text-neon-pink">DESTACADO</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-2 font-sans text-xl font-bold tracking-wider text-foreground group-hover:text-neon-cyan transition-colors">
            {project.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-neon-cyan/30 bg-neon-cyan/5 px-2 py-1 font-mono text-xs text-neon-cyan"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
  id="projects"
  ref={sectionRef}
  /* Importante: bg-darker-purple y min-h-screen */
  className="relative min-h-screen py-20 md:py-32 bg-darker-purple overflow-hidden"
>
  {/* CAPAS DE FONDO - Asegúrate de que el z-index sea 0 */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute inset-0 grid-bg-dots opacity-20" />
    <div className="absolute inset-0 grid-bg opacity-10" />
    
    {/* La línea de escaneo */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="w-full h-[2px] bg-neon-cyan shadow-[0_0_15px_var(--neon-cyan)] animate-scan-line" />
    </div>
  </div>

  {/* CONTENIDO - El z-index debe ser mayor (z-10) */}
  <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
    {/* ... resto del código ... */}
        {/* ... (Todo el contenido de la sección se queda igual) ... */}
        {/* Section header */}
        <div className={`mb-16 text-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <span className="mb-4 inline-block font-mono text-sm tracking-widest text-neon-cyan">
            {"// PORTFOLIO"}
          </span>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-wider text-foreground md:text-4xl lg:text-5xl">
            MIS <span className="neon-text-magenta text-neon-magenta">PROYECTOS</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            [DESCRIPCIÓN_SECCIÓN] - Una selección de mis trabajos más recientes y destacados.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View more button */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          {/* [LINK_MÁS_PROYECTOS] */}
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-wider text-neon-cyan transition-all hover:neon-text-cyan"
          >
            {">"} VER MÁS PROYECTOS
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
