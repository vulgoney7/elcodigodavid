"use client"

import { Button } from "@/components/ui/button"
import { Shield, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

interface Page1HeroProps {
  onNext: () => void
}

export default function Page1Hero({ onNext }: Page1HeroProps) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://scripts.converteai.net/6a2cade4-d6e1-4e93-bb8c-052348c8d45c/players/68db1f6658c0744d14b3c146/v4/player.js"
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      // SmartPlayer exposes events through window
      const checkPlayer = setInterval(() => {
        // @ts-ignore - SmartPlayer global object
        if (window.smartplayer && window.smartplayer.instances) {
          // @ts-ignore
          const player = window.smartplayer.instances[0]
          if (player) {
            clearInterval(checkPlayer)

            // Listen for time updates
            player.on("timeupdate", (currentTime: number) => {
              console.log("[v0] Video current time:", currentTime)
              // Show content when video reaches 4:03 (243 seconds)
              if (currentTime >= 243 && !showContent) {
                console.log("[v0] Video reached 4:03, showing content")
                setShowContent(true)
              }
            })
          }
        }
      }, 500)

      // Cleanup interval after 30 seconds if player not found
      setTimeout(() => clearInterval(checkPlayer), 30000)
    }

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [showContent])

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 via-background to-background">
      

      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {!showContent && (
            <div className="text-center mb-6 sm:mb-8 animate-slide-up">
              <h1 className="font-serif sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-balance text-slate-700 text-center text-base font-black leading-7 tracking-tight my-0 px-px">
                Ahora mismo, un algoritmo se está infiltrando en la mente de tu hijo para reemplazar tu fe. Es una
                guerra silenciosa, y cada día que ignoras, pierdes más terreno.
              </h1>
            </div>
          )}

          <div className="relative mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft">
            <vturb-smartplayer
              id="vid-68db1f6658c0744d14b3c146"
              style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" }}
            />
          </div>

          {showContent && (
            <div className="text-center space-y-4 sm:space-y-6 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-slate-500 bg-slate-500">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                <span className="text-xs sm:text-sm text-primary-foreground font-bold">
                  Misión Especial para Padres Valientes
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance px-2 text-slate-600">
                Tu misión para blindar la fe de tu hijo comienza ahora
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-2">
                Haz clic abajo para aceptar tu primera prueba de campo y demostrar que estás listo para la batalla
                espiritual más importante de tu vida.
              </p>

              <div className="pt-4 sm:pt-6 px-4">
                <Button
                  onClick={onNext}
                  size="lg"
                  className="hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 rounded-full shadow-glow transition-all hover:scale-105 font-semibold w-full sm:w-auto min-h-[56px] bg-slate-600"
                >
                  <Sparkles className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-balance font-bold">Aceptar Mi Primera Prueba</span>
                </Button>
              </div>

              <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground px-4">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4 text-success flex-shrink-0 text-slate-600" />
                  <span className="text-slate-600">100% Basado en Valores Cristianos</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-success flex-shrink-0 text-green-600" />
                  <span className="text-green-600">Miles de Familias Transformadas</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
