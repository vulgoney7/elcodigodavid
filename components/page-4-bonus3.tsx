"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Phone, Gift, Sparkles } from "lucide-react"
import BonusUnlockModal from "./bonus-unlock-modal"
import BonusArsenal from "./bonus-arsenal"

interface Page4Bonus3Props {
  onNext: () => void
  onUnlock: () => void
  onSetVirtue: (virtue: string) => void
  unlockedBonuses: number[]
}

export default function Page4Bonus3({ onNext, onUnlock, onSetVirtue, unlockedBonuses }: Page4Bonus3Props) {
  const [virtue, setVirtue] = useState("")
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = () => {
    if (virtue.trim()) {
      onSetVirtue(virtue)
      onUnlock()
      setShowModal(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            <span className="font-semibold text-primary-foreground text-center">Prueba 3 de 3 - ¡Última Prueba!</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary w-full transition-all duration-500" />
          </div>
        </div>

        <BonusArsenal unlockedBonuses={unlockedBonuses} />

        <Card className="p-4 sm:p-6 md:p-8 lg:p-12 shadow-soft">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4 bg-slate-600">
              <Phone className="w-4 h-4 text-primary-foreground" />
              <span className="text-xs sm:text-sm text-primary-foreground font-bold">
                Activa la Línea Directa con Dios
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2 text-slate-600">
              Última Prueba: Tu Declaración de Fe
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto px-2 text-slate-600">
              Para activar la línea directa con el Comandante en Jefe, escribe en una palabra la virtud más importante
              que quieres para tu hijo
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-4 sm:space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {["Fe", "Coraje", "Sabiduría", "Amor", "Paz", "Bondad"].map((example) => (
                  <button
                    key={example}
                    onClick={() => setVirtue(example)}
                    className="px-4 py-2.5 rounded-full bg-secondary/20 hover:bg-secondary/40 active:scale-95 text-sm sm:text-base transition-all min-h-[44px] text-slate-600"
                  >
                    {example}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Input
                  type="text"
                  value={virtue}
                  onChange={(e) => setVirtue(e.target.value)}
                  placeholder="Escribe tu virtud aquí..."
                  className="text-center text-lg sm:text-xl py-5 sm:py-6 rounded-xl border-2 focus:border-primary min-h-[56px]"
                  maxLength={20}
                />
                {virtue && (
                  <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 animate-pulse text-chart-4" />
                )}
              </div>

              <p className="text-xs sm:text-sm text-center px-2 text-slate-600">
                Ejemplos: Fe, Coraje, Sabiduría, Amor, Paz, Bondad
              </p>
            </div>

            {virtue.trim() && (
              <div className="text-center animate-slide-up pt-2 sm:pt-4">
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-6 sm:py-7 rounded-full shadow-glow transition-all hover:scale-105 font-semibold w-full min-h-[56px] bg-slate-600"
                >
                  <Gift className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-balance text-sm sm:text-base font-bold">
                    Activar Línea Directa y Desbloquear Regalo Final
                  </span>
                </Button>
              </div>
            )}
          </div>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-accent/20 rounded-xl text-center">
            <p className="font-medium text-sm sm:text-base px-2 text-slate-600">
              Al declarar tu intención, activarás el protocolo de comunicación celestial y ganarás la herramienta más
              poderosa para padres.
            </p>
          </div>
        </Card>

        {/* Bonus Unlock Modal */}
        {showModal && (
          <BonusUnlockModal
            bonusNumber={3}
            bonusTitle="El Teléfono Rojo de Dios"
            bonusValue="$77"
            bonusImage="https://ibb.co/n8Q1FqJk"
            bonusDescription="¡Línea directa establecida! Has completado el entrenamiento y conquistado todos los regalos."
            onClose={() => setShowModal(false)}
            onNext={onNext}
            isFinal
          />
        )}
      </div>
    </div>
  )
}
