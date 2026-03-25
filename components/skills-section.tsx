"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Layout, Palette, Server, Smartphone } from "lucide-react"

// [SKILLS_AQUÍ] - Personaliza tus habilidades
const skillCategories = [
  {
    title: "FRONT-END",
    icon: Layout,
    color: "cyan",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 80 },
      { name: "React / Next.js", level: 10 },
      { name: "TypeScript", level: 5 },
    
    ],
  },
  {
    title: "BACK-END",
    icon: Server,
    color: "magenta",
    skills: [
      { name: "Node.js", level: 30 },
      { name: "Python", level: 70 },
      { name: "C#", level: 30 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    title: "DATABASES",
    icon: Database,
    color: "pink",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 50 },
      { name: "sql Workbench", level: 50 },
      { name: "Oracle DB", level: 50 },
    ],
  },
  {
    title: "DISEÑO UI/UX",
    icon: Palette,
    color: "cyan",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 70 },
      { name: "Prototyping", level: 80 },
      { name: "Design Systems", level: 75 },
    ],
  },
  {
    title: "MOBILE",
    icon: Smartphone,
    color: "magenta",
    skills: [
      { name: "React Native", level: 75 },
      { name: "Flutter", level: 50 },
      { name: "PWA", level: 80 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    title: "OTROS",
    icon: Code2,
    color: "pink",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Testing", level: 65 },
      { name: "Agile/Scrum", level: 80 },
    ],
  },
]

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimatedLevel(level)
          }, delay)
        }
      },
      { threshold: 0.5 }
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => observer.disconnect()
  }, [level, delay])

  const colorClasses = {
    cyan: "bg-neon-cyan",
    magenta: "bg-neon-magenta",
    pink: "bg-neon-pink",
  }

  const glowClasses = {
    cyan: "shadow-[0_0_10px_#00f5ff]",
    magenta: "shadow-[0_0_10px_#ff00ff]",
    pink: "shadow-[0_0_10px_#ff3399]",
  }

  return (
    <div ref={barRef} className="mb-4">
      <div className="mb-1 flex justify-between font-mono text-xs">
        <span className="text-foreground">{name}</span>
        <span className="text-muted-foreground">{animatedLevel}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-darker-purple">
        <div
          className={`h-full transition-all duration-1000 ease-out ${colorClasses[color as keyof typeof colorClasses]} ${glowClasses[color as keyof typeof glowClasses]}`}
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  )
}

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = category.icon

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  const borderColorClasses = {
    cyan: "border-neon-cyan/30 hover:border-neon-cyan",
    magenta: "border-neon-magenta/30 hover:border-neon-magenta",
    pink: "border-neon-pink/30 hover:border-neon-pink",
  }

  const iconColorClasses = {
    cyan: "text-neon-cyan",
    magenta: "text-neon-magenta",
    pink: "text-neon-pink",
  }

  return (
    <div
      ref={cardRef}
      className={`hud-clip-lg border-2 bg-card p-6 transition-all duration-500 ${
        borderColorClasses[category.color as keyof typeof borderColorClasses]
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <Icon className={`h-6 w-6 ${iconColorClasses[category.color as keyof typeof iconColorClasses]}`} />
        <h3 className="font-sans text-lg font-bold tracking-wider text-foreground">
          {category.title}
        </h3>
      </div>

      <div>
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={i * 100}
            color={category.color}
          />
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
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
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-20 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-neon-magenta/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-0 h-64 w-64 rounded-full bg-neon-cyan/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Section header */}
        <div className={`mb-16 text-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <span className="mb-4 inline-block font-mono text-sm tracking-widest text-neon-magenta">
            {"// HABILIDADES"}
          </span>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-wider text-foreground md:text-4xl lg:text-5xl">
            MIS <span className="neon-text-cyan text-neon-cyan">SKILLS</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            [DESCRIPCIÓN_SKILLS] - Tecnologías y herramientas con las que trabajo día a día para crear experiencias digitales excepcionales.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Additional info */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <p className="font-mono text-sm text-muted-foreground">
            {">"} Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades
          </p>
        </div>
      </div>
    </section>
  )
}
