"use client"

import { useState } from "react"
import { CustomCursor } from "@/components/custom-cursor"
import { LoadingScreen } from "@/components/loading-screen"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* Custom cursor with trail effect */}
      <CustomCursor />

      {/* Loading screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main content */}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Navigation header */}
        <Header />

        {/* Main sections */}
        <main className="relative overflow-hidden">
          {/* Scanlines overlay for entire page */}
          <div className="scanlines pointer-events-none fixed inset-0 z-30 opacity-30" />

          {/* Hero Section - Quién eres y qué ofreces */}
          <HeroSection />

          {/* Projects Section - Experiencia y proyectos */}
          <ProjectsSection />

          {/* Skills Section - Sección extra: Habilidades */}
          <SkillsSection />

          {/* Contact Section - CTA final */}
          <ContactSection />
        </main>
      </div>
    </>
  )
}
