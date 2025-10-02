"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, Shield, Gift } from "lucide-react"
import BonusUnlockModal from "./bonus-unlock-modal"
import BonusArsenal from "./bonus-arsenal"

interface Page3Bonus2Props {
  onNext: () => void
  onUnlock: () => void
  unlockedBonuses: number[]
}

export default function Page3Bonus2({ onNext, onUnlock, unlockedBonuses }: Page3Bonus2Props) {
  const [question1Answer, setQuestion1Answer] = useState<string | null>(null)
  const [question1Correct, setQuestion1Correct] = useState<boolean | null>(null)
  const [question2Answer, setQuestion2Answer] = useState<string | null>(null)
  const [question2Correct, setQuestion2Correct] = useState<boolean | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [showError, setShowError] = useState(false)

  const correctAnswer1 = "El poder de la Oración"
  const correctAnswer2 = "Leer la Biblia juntos antes de dormir"

  const handleQuestion1 = (answer: string) => {
    setQuestion1Answer(answer)
    if (answer === correctAnswer1) {
      setQuestion1Correct(true)
      setShowError(false)
    } else {
      setQuestion1Correct(false)
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }

  const handleQuestion2 = (answer: string) => {
    setQuestion2Answer(answer)
    if (answer === correctAnswer2) {
      setQuestion2Correct(true)
      setShowError(false)
    } else {
      setQuestion2Correct(false)
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }

  const handleSubmit = () => {
    if (question1Correct && question2Correct) {
      onUnlock()
      setShowModal(true)
    }
  }

  const isComplete = question1Correct && question2Correct

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            <span className="font-semibold text-primary-foreground">Prueba 2 de 3</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary w-2/3 transition-all duration-500" />
          </div>
        </div>

        <BonusArsenal unlockedBonuses={unlockedBonuses} />

        {showError && (
          <Card className="p-3 sm:p-4 mb-4 sm:mb-6 bg-warning/10 border-warning animate-slide-up">
            <div className="flex items-center gap-2 sm:gap-3 text-warning-foreground">
              <XCircle className="w-5 h-5 flex-shrink-0" />
              <p className="font-semibold text-sm sm:text-base text-secondary-foreground">
                Una buena táctica, pero necesitamos un arma más poderosa. Inténtalo de nuevo.
              </p>
            </div>
          </Card>
        )}

        <Card className="p-4 sm:p-6 md:p-8 lg:p-12 shadow-soft">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4 font-bold bg-slate-600 text-card">
              <Shield className="w-4 h-4 text-primary-foreground" />
              <span className="text-xs sm:text-sm text-primary-foreground font-bold">
                Prepara el Campo de Batalla
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2 text-slate-600">
              Elige tus Armas Espirituales
            </h2>
            <p className="text-base sm:text-lg px-2 text-slate-600">
              El enemigo ataca de noche con miedos y pesadillas
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 px-2 text-slate-600">
                ¿Cuál es tu primera línea de defensa contra los miedos nocturnos?
              </h3>
              <div className="space-y-3">
                {[
                  { text: "Una luz de noche", icon: "💡" },
                  { text: "Un vaso de agua", icon: "💧" },
                  { text: "El poder de la Oración", icon: "🙏" },
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestion1(option.text)}
                    disabled={question1Correct === true}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all min-h-[56px] ${
                      question1Answer === option.text && question1Correct
                        ? "border-success bg-success/10 shadow-md"
                        : question1Answer === option.text && !question1Correct
                          ? "border-warning bg-warning/10"
                          : "border-border hover:border-primary/50 bg-card active:scale-98"
                    } ${question1Correct === true ? "opacity-50" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl flex-shrink-0">{option.icon}</span>
                      <span className="flex-1 text-sm sm:text-base text-slate-600 font-semibold">{option.text}</span>
                      {question1Answer === option.text && question1Correct && (
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      )}
                      {question1Answer === option.text && question1Correct === false && (
                        <XCircle className="w-5 h-5 text-warning flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            {question1Correct && (
              <div className="animate-slide-up">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 px-2 text-slate-600">
                  ¿Cuál es la mejor manera de fortalecer la fe de tu hijo cada día?
                </h3>
                <div className="space-y-3">
                  {[
                    { text: "Ver películas cristianas", icon: "🎬" },
                    { text: "Leer la Biblia juntos antes de dormir", icon: "📖" },
                    { text: "Escuchar música cristiana", icon: "🎵" },
                  ].map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestion2(option.text)}
                      disabled={question2Correct === true}
                      className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all min-h-[56px] ${
                        question2Answer === option.text && question2Correct
                          ? "border-success bg-success/10 shadow-md"
                          : question2Answer === option.text && !question2Correct
                            ? "border-warning bg-warning/10"
                            : "border-border hover:border-primary/50 bg-card active:scale-98"
                      } ${question2Correct === true ? "opacity-50" : ""}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl sm:text-3xl flex-shrink-0">{option.icon}</span>
                        <span className="flex-1 text-sm sm:text-base text-slate-600 font-semibold">{option.text}</span>
                        {question2Answer === option.text && question2Correct && (
                          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                        )}
                        {question2Answer === option.text && question2Correct === false && (
                          <XCircle className="w-5 h-5 text-warning flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {isComplete && (
            <div className="text-center animate-slide-up">
              <div className="mb-4 p-3 sm:p-4 bg-success/10 rounded-xl">
                <p className="text-success-foreground font-semibold text-sm sm:text-base text-slate-600">
                  ¡Respuesta correcta, soldado! La oración es nuestra arma más poderosa.
                </p>
              </div>
              <Button
                onClick={handleSubmit}
                size="lg"
                className="hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-6 sm:py-7 rounded-full shadow-glow transition-all hover:scale-105 font-semibold w-full sm:w-auto min-h-[56px] bg-slate-600"
              >
                <Gift className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-balance">Desbloquear Mi Segundo Regalo</span>
              </Button>
            </div>
          )}
        </Card>

        {/* Bonus Unlock Modal */}
        {showModal && (
          <BonusUnlockModal
            bonusNumber={2}
            bonusTitle="El Arsenal Anti-Monstruos"
            bonusValue="$50"
            bonusImage="https://ibb.co/vv1yv7xP"
            bonusDescription="Has ganado acceso a nuestro manual de guerra nocturna. ¡Segundo regalo conquistado!"
            onClose={() => setShowModal(false)}
            onNext={onNext}
          />
        )}
      </div>
    </div>
  )
}
