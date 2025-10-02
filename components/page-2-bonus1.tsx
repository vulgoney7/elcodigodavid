"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Lock, Gift } from "lucide-react"
import BonusUnlockModal from "./bonus-unlock-modal"
import BonusArsenal from "./bonus-arsenal"

interface Page2Bonus1Props {
  onNext: () => void
  onUnlock: () => void
  unlockedBonuses: number[]
}

export default function Page2Bonus1({ onNext, onUnlock, unlockedBonuses }: Page2Bonus1Props) {
  const [question1Answer, setQuestion1Answer] = useState<string | null>(null)
  const [question2Answer, setQuestion2Answer] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = () => {
    if (question1Answer && question2Answer) {
      onUnlock()
      setShowModal(true)
    }
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const isComplete = question1Answer && question2Answer

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background sm:py-12 mt-0 py-3">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            <span className="font-semibold text-slate-600">Prueba 1 de 3</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-1/3 transition-all duration-500 bg-slate-600" />
          </div>
        </div>

        {/* Bonus Arsenal */}
        <BonusArsenal unlockedBonuses={unlockedBonuses} />

        <Card className="p-4 sm:p-6 md:p-8 lg:p-12 shadow-soft">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4 bg-slate-600">
              <Lock className="w-4 h-4 text-primary-foreground" />
              <span className="text-xs sm:text-sm text-primary-foreground font-bold">
                Desbloquea tu Primer Regalo
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2 text-slate-600">
              Identifica al Enemigo
            </h2>
            <p className="text-base sm:text-lg px-2 text-slate-600">
              Antes de empezar, necesitamos conocer tus mayores desafíos
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 px-2 text-slate-600">
                ¿Cuál es tu mayor temor sobre el futuro espiritual de tu hijo?
              </h3>
              <div className="space-y-3">
                {[
                  "Que se aleje de Dios por la influencia del mundo.",
                  "No saber cómo responder a sus preguntas difíciles sobre la fe.",
                  "Que la tecnología y las malas amistades lo desvíen.",
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setQuestion1Answer(option)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all min-h-[56px] ${
                      question1Answer === option
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-border hover:border-primary/50 bg-card active:scale-98"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-slate-500 ${
                          question1Answer === option ? "border-primary bg-primary" : "border-muted-foreground"
                        }`}
                      >
                        {question1Answer === option && <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                      </div>
                      <span className="text-sm sm:text-base text-slate-600">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            {question1Answer && (
              <div className="animate-slide-up">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 px-2 text-slate-600">
                  ¿Qué te gustaría que tu hijo aprenda primero sobre la fe?
                </h3>
                <div className="space-y-3">
                  {[
                    "Que Dios siempre está con él, incluso en momentos difíciles.",
                    "Cómo orar con confianza y ver respuestas.",
                    "Que la Biblia tiene respuestas para todas sus preguntas.",
                  ].map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setQuestion2Answer(option)}
                      className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all min-h-[56px] ${
                        question2Answer === option
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border hover:border-primary/50 bg-card active:scale-98"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-slate-600 ${
                            question2Answer === option ? "border-primary bg-primary" : "border-muted-foreground"
                          }`}
                        >
                          {question2Answer === option && <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                        </div>
                        <span className="text-sm sm:text-base text-slate-600">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {isComplete && (
            <div className="text-center animate-slide-up px-2 py-0">
              <Button
                onClick={handleSubmit}
                size="lg"
                className="hover:bg-primary/90 px-6 sm:px-8 py-6 sm:py-7 rounded-full shadow-glow transition-all hover:scale-105 w-full sm:w-auto min-h-[56px] text-background bg-slate-500 font-bold"
              >
                <Gift className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-balance">Desbloquear Mi Primer Regalo</span>
              </Button>
            </div>
          )}
        </Card>

        {/* Bonus Unlock Modal */}
        {showModal && (
          <BonusUnlockModal
            bonusNumber={1}
            bonusTitle="El Mapa Secreto de los Salmos"
            bonusValue="$37"
            bonusImage="https://ibb.co/84fSvqNh"
            bonusDescription="Has identificado al enemigo. Ese es el primer paso. Por tu valentía, has desbloqueado el acceso a un arma secreta para padres."
            onClose={handleModalClose}
            onNext={onNext}
          />
        )}
      </div>
    </div>
  )
}
