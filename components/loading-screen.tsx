"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM...")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const messages = [
      { progress: 0, text: "INITIALIZING SYSTEM..." },
      { progress: 20, text: "LOADING ASSETS..." },
      { progress: 40, text: "CONFIGURING INTERFACE..." },
      { progress: 60, text: "ESTABLISHING CONNECTION..." },
      { progress: 80, text: "LOADING PROFILE DATA..." },
      { progress: 95, text: "SYSTEM READY" },
    ]

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2
        
        const currentMessage = messages
          .slice()
          .reverse()
          .find((m) => newProgress >= m.progress)
        
        if (currentMessage) {
          setStatusText(currentMessage.text)
        }

        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 300)
          return 100
        }
        return newProgress
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-darker-purple">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Scanlines */}
      <div className="scanlines absolute inset-0" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Logo/Title */}
        <div className="text-center">
          <h1 className="font-sans text-4xl font-bold tracking-wider text-neon-cyan neon-text-cyan md:text-6xl">
            INICIANDO SISTEMA
          </h1>
          <p className="mt-2 font-mono text-sm tracking-widest text-muted-foreground">
            v1.0.0
          </p>
        </div>

        {/* Loading bar container */}
        <div className="w-full max-w-md">
          <div className="hud-clip border-2 border-neon-cyan/50 bg-darker-purple/80 p-1">
            <div className="relative h-6 overflow-hidden bg-dark-purple/50">
              {/* Progress bar */}
              <div
                className="h-full bg-neon-cyan transition-all duration-100 ease-out"
                style={{ 
                  width: `${progress}%`,
                  boxShadow: "0 0 10px #00f5ff, 0 0 20px #00f5ff",
                }}
              />
              
              {/* Animated stripes */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 20px)",
                  animation: "loading-stripes 1s linear infinite",
                }}
              />
            </div>
          </div>

          {/* Progress percentage */}
          <div className="mt-4 flex items-center justify-between font-mono text-sm">
            <span className="text-neon-cyan">{progress.toFixed(0)}%</span>
            <span className="text-muted-foreground">
              {statusText}
              <span className={showCursor ? "opacity-100" : "opacity-0"}>_</span>
            </span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 flex gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse-glow"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute left-4 top-4 h-16 w-16 border-l-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute right-4 top-4 h-16 w-16 border-r-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute bottom-4 left-4 h-16 w-16 border-b-2 border-l-2 border-neon-cyan/30" />
      <div className="absolute bottom-4 right-4 h-16 w-16 border-b-2 border-r-2 border-neon-cyan/30" />

      <style jsx>{`
        @keyframes loading-stripes {
          from { background-position: 0 0; }
          to { background-position: 40px 0; }
        }
      `}</style>
    </div>
  )
}
