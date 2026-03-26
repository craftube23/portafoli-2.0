"use client"

import { useState } from "react"
import { Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "INICIO", href: "#hero" },
  { label: "PROYECTOS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACTO", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

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
        </nav>

        {/* CV Download Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="group relative overflow-hidden border-2 border-neon-cyan bg-transparent font-mono text-sm tracking-wider text-neon-cyan transition-all hover:bg-neon-cyan hover:text-darker-purple"
          >
            
            <a href="https://drive.google.com/file/d/1DtncTOlD6EbnOpMG79yiJBMjV2vK1fbQ/view?usp=sharing" download>
              <span className="relative z-10 flex items-center gap-2">
                <Download className="h-4 w-4" />
                DESCARGAR CV
              </span>
              <span className="absolute inset-0 -translate-x-full bg-neon-cyan transition-transform group-hover:translate-x-0" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-neon-cyan md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
            <Button
              asChild
              className="mt-4 w-full border-2 border-neon-cyan bg-transparent font-mono text-sm tracking-wider text-neon-cyan hover:bg-neon-cyan hover:text-darker-purple"
            >
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                DESCARGAR CV
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
