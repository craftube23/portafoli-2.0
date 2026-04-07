"use client"

import { useState, useEffect } from "react"
import { Download, Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next'
import '../lib/i18n' // <-- Importante para que cargue tu config

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)

  // Esto evita que Next.js de errores de servidor/cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleLanguage = () => {
    const currentLang = i18n.language || 'en'
    const newLang = currentLang.includes('en') ? 'es' : 'en'
    i18n.changeLanguage(newLang)
  }

  // Usamos las llaves exactas de tu archivo i18n.ts
  const navItems = [
    { label: t('welcome'), href: "#hero" },
    { label: t('projects'), href: "#projects" },
    { label: t('skills'), href: "#skills" },
    { label: t('about'), href: "#contact" },
  ]

  // Si no ha cargado en el navegador, no mostramos nada para evitar el crash del toUpperCase
  if (!mounted) return null

  const currentLang = i18n.language?.toUpperCase() || 'EN'

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-neon-cyan/20 bg-darker-purple/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero") }}
          className="font-sans text-xl font-bold tracking-wider text-neon-cyan transition-all hover:neon-text-cyan md:text-2xl"
        >
          {"<PLAYER_ONE />"}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
              className="group relative font-mono text-sm tracking-wider text-foreground transition-colors hover:text-neon-cyan"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-neon-cyan transition-all group-hover:w-full" />
            </a>
          ))}

          {/* Botón de cambio de idioma Escritorio */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 font-mono text-xs border border-neon-cyan/40 px-2 py-1 rounded text-neon-cyan hover:bg-neon-cyan/10 transition-all ml-4"
          >
            <Globe className="h-3 w-3" />
            {currentLang.includes('EN') ? 'ES' : 'EN'}
          </button>
        </nav>

        {/* CV Download Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="group relative overflow-hidden border-2 border-neon-cyan bg-transparent font-mono text-sm tracking-wider text-neon-cyan transition-all hover:bg-neon-cyan hover:text-darker-purple"
          >
            <a href="https://drive.google.com/file/d/1DtncTOlD6EbnOpMG79yiJBMjV2vK1fbQ/view?usp=sharing" target="_blank">
              <span className="relative z-10 flex items-center gap-2">
                <Download className="h-4 w-4" />
                {currentLang.includes('EN') ? 'RESUME' : 'CV'}
              </span>
              <span className="absolute inset-0 -translate-x-full bg-neon-cyan transition-transform group-hover:translate-x-0" />
            </a>
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="text-neon-cyan text-xs font-mono border border-neon-cyan/40 px-2 py-1 rounded"
          >
            {currentLang.includes('EN') ? 'ES' : 'EN'}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-neon-cyan"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="border-t border-neon-cyan/20 bg-darker-purple/95 px-4 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                className="font-mono text-sm tracking-wider text-foreground transition-colors hover:text-neon-cyan"
              >
                {">"} {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}