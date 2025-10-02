"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Gift, Sparkles } from "lucide-react"
import Image from "next/image"

interface BonusUnlockModalProps {
  bonusNumber: number
  bonusTitle: string
  bonusValue: string
  bonusImage: string
  bonusDescription: string
  onClose: () => void
  onNext: () => void
  isFinal?: boolean
}

export default function BonusUnlockModal({
  bonusNumber,
  bonusTitle,
  bonusValue,
  bonusImage,
  bonusDescription,
  onClose,
  onNext,
  isFinal = false,
}: BonusUnlockModalProps) {
  const [show, setShow] = useState(false)

  const bonusImages: Record<number, string> = {
    1: "https://i.ibb.co/qFcPqK7Z/Gemini-Generated-Image-nh7em5nh7em5nh7e.png",
    2: "https://i.ibb.co/BKLWKXVZ/Gemini-Generated-Image-ikd77eikd77eikd7.png",
    3: "https://i.ibb.co/0VY9xpbJ/Gemini-Generated-Image-z3r5hrz3r5hrz3r5.png",
  }

  const currentBonusImage = bonusImages[bonusNumber] || bonusImage

  useEffect(() => {
    setTimeout(() => setShow(true), 100)
  }, [])

  const handleNext = () => {
    setShow(false)
    setTimeout(() => {
      onClose()
      onNext()
    }, 300)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <Card
        className={`max-w-lg w-full p-6 sm:p-8 shadow-glow transition-all duration-500 my-auto ${
          show ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2">
          <div className="relative">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 animate-pulse text-yellow-300" />
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 absolute -top-2 -right-2 animate-sparkle text-yellow-300" />
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 absolute -bottom-2 -left-2 animate-sparkle text-yellow-300" />
          </div>
        </div>

        <div className="text-center space-y-4 sm:space-y-6">
          {/* Success Badge */}
          <div className="inline-flex items-center gap-2 bg-success/20 px-3 sm:px-4 py-2 rounded-full">
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-success-foreground text-green-600" />
            <span className="font-semibold text-success-foreground text-xs sm:text-sm text-green-600 py-0 my-0 border-0">
              ¡Regalo Desbloqueado!
            </span>
          </div>

          <div className="relative animate-unlock">
            <Image
              src={currentBonusImage || "/placeholder.svg"}
              alt={bonusTitle}
              width={300}
              height={400}
              className="w-48 sm:w-64 h-auto mx-auto rounded-lg shadow-lg"
            />
            <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-success px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm shadow-lg bg-green-400 text-card font-extrabold">
              GRATIS
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 text-slate-600">Bonus #{bonusNumber}</h3>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 px-2 text-slate-600">{bonusTitle}</h4>
            <p className="mb-4 text-sm sm:text-base px-2 text-slate-500">{bonusDescription}</p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-xl sm:text-2xl font-bold line-through text-destructive">Valor: {bonusValue}</span>
              <span className="text-2xl sm:text-3xl font-bold text-success text-green-600">GRATIS</span>
            </div>
          </div>

          <Button
            onClick={handleNext}
            size="lg"
            className="hover:bg-primary/90 px-6 sm:px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105 w-full min-h-[56px] font-bold bg-slate-600 text-card"
          >
            {isFinal ? (
              <>
                <Gift className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-balance">Ver Mi Paquete Completo</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-balance">Continuar a la Siguiente Prueba</span>
              </>
            )}
          </Button>
        </div>
      </Card>
    </div>
  )
}
