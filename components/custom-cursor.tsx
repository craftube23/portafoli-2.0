"use client"

import { useEffect, useState, useRef } from "react"

// Definimos la estructura de un triángulo de la estela
interface TrailTriangle {
  id: number
  x: number
  y: number
  rotation: number // Dirección a la que apunta
  opacity: number // Cuánto se ve (de 1 a 0)
}

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const trailRef = useRef<TrailTriangle[]>([])
  const [trail, setTrail] = useState<TrailTriangle[]>([])
  const lastMousePos = useRef({ x: 0, y: 0 })
  const idCounterRef = useRef(0)
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setIsVisible(true)

      // Calculamos la dirección del movimiento para rotar el triángulo
      const deltaX = e.clientX - lastMousePos.current.x
      const deltaY = e.clientY - lastMousePos.current.y
      const rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90 // Ajuste de ángulo

      // Solo añadimos triángulo si hubo movimiento real
      if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
        idCounterRef.current += 1
        const newTriangle: TrailTriangle = {
          id: idCounterRef.current,
          x: e.clientX,
          y: e.clientY,
          rotation: rotation,
          opacity: 1, // Comienza totalmente visible
        }
        // Limitamos a 12 triángulos para mantener el rendimiento
        trailRef.current = [...trailRef.current.slice(-11), newTriangle]
      }

      lastMousePos.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  // Bucle de animación para desvanecer los triángulos
  useEffect(() => {
    const animate = () => {
      // Reducimos la opacidad de cada triángulo y filtramos los invisibles
      trailRef.current = trailRef.current
        .map(t => ({ ...t, opacity: t.opacity - 0.06 })) // Velocidad de desvanecido
        .filter(t => t.opacity > 0)

      setTrail([...trailRef.current])
      animationFrameId.current = requestAnimationFrame(animate)
    }

    animationFrameId.current = requestAnimationFrame(animate)
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [])



  if (!isVisible) return null

  return (
    <>
      {/* Renderizado de la Estela de Triángulos (Rastro de Poder) */}
      {trail.map((triangle) => (
        <div
          key={triangle.id}
          className="pointer-events-none fixed z-[9998]"
          style={{
            left: triangle.x - 6, // Centrado
            top: triangle.y - 6,
            width: 12,
            height: 12,
            opacity: triangle.opacity, // Se desvanecen
            transform: `rotate(${triangle.rotation}deg) scale(${triangle.opacity})`, // Giran y se encogen
            transition: "opacity 0.05s ease-out, transform 0.05s ease-out", // Transición ultra rápida
          }}
        >
          {/* El triángulo en sí usando bordes CSS (Estilo Retro-Gamer) */}
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderBottom: `12px solid #00f5ff`, // Color cian neón
              filter: `drop-shadow(0 0 5px #00f5ff)`, // Brillo neón
            }}
          />
        </div>
      ))}
    </>
  )
}