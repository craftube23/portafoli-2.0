"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Andres Felipe Navas Alvear"
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index >= fullText.length) {
        clearInterval(interval)
      }
    }, 100)
    
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 bg-darker-purple"
    >
      {/* 1. Rejilla 3D Animada */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0 animate-grid-travel"
          style={{
            backgroundImage: `linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            height: '200%',
            top: '-50%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darker-purple via-transparent to-darker-purple" />
      </div>
      
      {/* 2. Partículas Flotantes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-neon-cyan rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-10%',
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              '--duration': `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 10px var(--neon-cyan)',
            } as any}
          />
        ))}
      </div>

      {/* 3. Luces de ambiente */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-neon-cyan/10 blur-[120px] animate-pulse" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-neon-magenta/10 blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-neon-cyan" />
              <span className="font-mono text-xs tracking-wider text-neon-cyan">
                DISPONIBLE PARA PROYECTOS
              </span>
            </div>

            <h1 className="mb-4 font-sans text-4xl font-bold leading-tight tracking-wider md:text-5xl lg:text-6xl">
              <span className="text-foreground">HOLA, SOY</span>
              <br />
              {/* CAMBIO DE COLOR: Ahora usa un degradado neón más estético */}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-pink bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                {typedText}
                <span className="animate-blink text-neon-cyan">|</span>
              </span>
            </h1>

            <p className="mb-6 font-mono text-lg tracking-wider text-neon-magenta md:text-xl">
              {"// Andres  -  Front-end Developer"}
            </p>

            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
              Desarrollador Front-end y músico independiente. Enfocado en crear interfaces con ritmo, armonía y una estética gaming única.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="group hud-clip flex items-center gap-2 border-2 border-neon-cyan bg-neon-cyan/10 px-8 py-3 font-mono text-sm tracking-wider text-neon-cyan transition-all hover:bg-neon-cyan hover:text-darker-purple"
              >
                VER PROYECTOS
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </button>
              <a
                href="#contact"
                className="hud-clip border-2 border-neon-magenta bg-transparent px-8 py-3 font-mono text-sm tracking-wider text-neon-magenta transition-all hover:bg-neon-magenta hover:text-darker-purple"
              >
                CONTACTAR
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 animate-pulse-glow rounded-lg border-2 border-neon-cyan/50" />
              <div className="absolute -inset-8 rounded-lg border border-neon-magenta/20" />
              
              <div className="relative h-64 w-64 overflow-hidden rounded-lg border-2 border-neon-cyan bg-darker-purple md:h-80 md:w-80">
                {/* LA IMAGEN: Ahora apunta a tu foto de perfil */}
                <img 
                    
                  src="/perfil.jpg" 
                  alt="Andres Felipe Navas"
                  className="h-full w-full object-cover"
                  
                  />
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent" 
                  style={{ animation: "scan 3s linear infinite" }}
                />
              </div>

              <div className="absolute -bottom-4 -left-4 hud-clip border border-neon-cyan/50 bg-darker-purple/90 px-3 py-2">
                <span className="font-mono text-xs text-neon-cyan">5 PROYECTOS</span>
              </div>
              <div className="absolute -right-4 -top-4 hud-clip border border-neon-magenta/50 bg-darker-purple/90 px-3 py-2">
                <span className="font-mono text-xs text-neon-magenta">1 AÑOS EXP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs tracking-wider text-muted-foreground">SCROLL</span>
          <ChevronDown className="h-5 w-5 animate-bounce text-neon-cyan" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}