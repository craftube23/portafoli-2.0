"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // [LÓGICA_ENVÍO_FORMULARIO] - Implementa tu lógica de envío aquí
    console.log("Form submitted:", formData)
    alert("¡Mensaje enviado! (Implementa la lógica de envío)")
  }

  // [REDES_SOCIALES_AQUÍ] - Reemplaza con tus URLs
  const socialLinks = [
    { icon: Github, href: "https://github.com/craftube23", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/andr%C3%A9s-felipe-navas-alvear-4400783b8/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:tu@email.com", label: "Email" },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen py-20 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-darker-purple/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8">
        {/* Section header */}
        <div className={`mb-16 text-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <span className="mb-4 inline-block font-mono text-sm tracking-widest text-neon-pink">
            {"// CONTACTO"}
          </span>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-wider text-foreground md:text-4xl lg:text-5xl">
            {"LET'S"} <span className="neon-text-pink text-neon-pink">PLAY</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            [MENSAJE_CONTACTO] - ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para freelance y colaboraciones.
          </p>
        </div>

        {/* Contact form */}
        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <form onSubmit={handleSubmit} className="hud-clip-lg border-2 border-neon-pink/30 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              {/* Name field */}
              <div>
                <label className="mb-2 block font-mono text-xs tracking-wider text-neon-cyan">
                  {">"} NOMBRE
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="[TU_NOMBRE]"
                  className="w-full border-2 border-border bg-darker-purple/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none"
                  required
                />
              </div>

              {/* Email field */}
              <div>
                <label className="mb-2 block font-mono text-xs tracking-wider text-neon-cyan">
                  {">"} EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="w-full border-2 border-border bg-darker-purple/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Message field */}
            <div className="mb-6">
              <label className="mb-2 block font-mono text-xs tracking-wider text-neon-cyan">
                {">"} MENSAJE
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                className="w-full resize-none border-2 border-border bg-darker-purple/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none"
                required
              />
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="group w-full border-2 border-neon-pink bg-neon-pink/10 font-mono text-sm tracking-wider text-neon-pink transition-all hover:bg-neon-pink hover:text-darker-purple"
            >
              <span className="flex items-center justify-center gap-2">
                ENVIAR MENSAJE
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </form>
        </div>

        {/* Social links */}
        <div className={`mt-12 text-center transition-all duration-700 delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <p className="mb-6 font-mono text-xs tracking-wider text-muted-foreground">
            O ENCUÉNTRAME EN
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group hud-clip flex h-12 w-12 items-center justify-center border-2 border-neon-cyan/30 bg-darker-purple/50 transition-all hover:border-neon-cyan hover:bg-neon-cyan/10"
              >
                <social.icon className="h-5 w-5 text-foreground transition-colors group-hover:text-neon-cyan" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className={`mt-20 border-t border-border pt-8 text-center transition-all duration-700 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <p className="font-mono text-xs text-muted-foreground">
            DISEÑADO Y DESARROLLADO POR <span className="text-neon-cyan">Andres Felipe Navas Alvear</span>
          </p>
        </footer>
      </div>
    </section>
  )
}
