"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Gift, AlertTriangle, CheckCircle2, Clock } from "lucide-react"
import Image from "next/image"

interface PageFinalOfferProps {
  unlockedBonuses: number[]
  userVirtue: string
}

export default function PageFinalOffer({ unlockedBonuses, userVirtue }: PageFinalOfferProps) {
  const [spotsLeft, setSpotsLeft] = useState(117)
  const [showPurchasePopup, setShowPurchasePopup] = useState(false)
  const [lastBuyer, setLastBuyer] = useState("")
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes in seconds

  const CHECKOUT_URL = "https://pay.hotmart.com/B102214875A" // Replace with your actual checkout URL

  const latinNames = [
    "María González",
    "Carmen Rodríguez",
    "Ana Martínez",
    "Isabel López",
    "Rosa Fernández",
    "Leticia López",
    "Laura Ramírez",
    "Patricia Silva",
    "Rose Martinez",
    "Sofía Torres",
    "Gabriela Morales",
    "Valentina Castro",
  ]

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Spots countdown
  useEffect(() => {
    const interval = setInterval(
      () => {
        if (spotsLeft > 23) {
          setSpotsLeft((prev) => prev - 1)
          const randomName = latinNames[Math.floor(Math.random() * latinNames.length)]
          setLastBuyer(randomName)
          setShowPurchasePopup(true)
          setTimeout(() => setShowPurchasePopup(false), 4000)
        }
      },
      Math.random() * 8000 + 7000,
    ) // Random between 7-15 seconds
    return () => clearInterval(interval)
  }, [spotsLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const bonuses = [
    {
      title: "El Mapa Secreto de los Salmos",
      value: "$17",
      image: "https://i.ibb.co/qFcPqK7Z/Gemini-Generated-Image-nh7em5nh7em5nh7e.png",
      description: "Guía completa de los Salmos más poderosos para cada situación que enfrenta tu hijo.",
    },
    {
      title: "El Arsenal Anti-Monstruos",
      value: "$25",
      image: "https://i.ibb.co/BKLWKXVZ/Gemini-Generated-Image-ikd77eikd77eikd7.png",
      description: "Manual de guerra nocturna con oraciones específicas para vencer miedos y pesadillas.",
    },
    {
      title: "El Teléfono Rojo de Dios",
      value: "$32",
      image: "https://i.ibb.co/0VY9xpbJ/Gemini-Generated-Image-z3r5hrz3r5hrz3r5.png",
      description: "Sistema de comunicación directa: enseña a tu hijo a orar con poder y confianza.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background py-8 sm:py-12">
      {/* Purchase Popup */}
      {showPurchasePopup && (
        <div className="fixed top-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto z-50 animate-slide-up">
          <Card className="p-3 sm:p-4 shadow-2xl bg-white dark:bg-slate-800 border-2 border-green-500">
            <div className="flex items-center gap-2 sm:gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{lastBuyer}</p>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                  Acaba de asegurar su paquete
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Congratulations Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-success/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <span className="font-semibold text-success-foreground text-xs sm:text-sm text-slate-400">
              ¡Felicidades! Has Completado el Entrenamiento
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2 text-slate-600">
            Tu Paquete de Misión Completo
          </h1>
          <p className="text-lg sm:text-xl px-2 text-slate-600">
            Has conquistado tus armas espirituales. Ahora es momento de reclamarlas.
          </p>
        </div>

        {/* Urgency Banner */}
        <Card className="p-4 sm:p-6 mb-6 sm:mb-8 bg-warning/10 border-warning shadow-glow">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-warning-foreground flex-shrink-0 mt-0.5 sm:mt-0 text-amber-300" />
              <div className="flex-1">
                <p className="font-bold text-warning-foreground text-base sm:text-lg text-red-600">
                  ¡ADVERTENCIA DE MISIÓN!
                </p>
                <p className="text-sm text-warning-foreground text-red-500">
                  Solo quedan <span className="font-bold">{spotsLeft}</span> vacantes del día
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-warning/20 px-4 py-2.5 rounded-full w-full sm:w-auto justify-center">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-warning-foreground text-destructive" />
              <span className="font-mono font-bold text-warning-foreground text-lg sm:text-xl text-red-600">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
        </Card>

        {/* Main Product */}
        <Card className="p-8 md:p-12 mb-8 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center mb-8 sm:mb-8">
            {/* Product Image */}
            <div className="relative order-1">
              <Image
                src="/images/design-mode/mockup-ebook-de-lado.png"
                alt="El Código David"
                width={773}
                height={773}
                className="w-full max-w-sm mx-auto md:max-w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold shadow-lg text-xs sm:text-sm">
                Producto Principal
              </div>
            </div>
            {/* Product Description */}
            <div className="order-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-600">
                El Código David
              </h2>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-5 tracking-tight px-0 py-0 text-slate-600">
                {
                  "Un sistema de entrenamiento militar espiritual de 30 días que transforma a tu hijo en un AGENTE DE ÉLITE de Dios, un GUERRERO DE FE!  \nTu hijo se convertirá en el LÍDER espiritual de su generación."
                }
              </p>
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {[
                  "30 historias bíblicas transformadas en aventuras que tu hijo vivirá cada noche",
                  "Oraciones poderosas para cada situación",
                  "Actividades prácticas para fortalecer la fe",
                  "Guía para padres con respuestas bíblicas",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-chart-3 font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
              {/* Pricing */}
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="text-2xl sm:text-3xl font-bold line-through text-red-500">$67</span>
                <span className="text-4xl sm:text-5xl font-bold text-green-500">$8.97</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="hover:bg-primary/90 text-primary-foreground text-base sm:text-xl sm:px-12 sm:py-8 rounded-full shadow-glow transition-all hover:scale-105 font-bold w-full md:w-auto min-h-[56px] bg-slate-500 my-0 px-1.5 py-9 animate-pulse-subtle"
              onClick={() => (window.location.href = CHECKOUT_URL)}
            >
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="text-balance">Sí, Quiero Blindar la Fe de Mi Hijo Ahora</span>
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 px-2">
              Acceso inmediato + Todos los bonos conquistados
            </p>
          </div>
        </Card>

        {/* Bonuses Section */}
        <div className="mb-8 sm:mb-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 px-2 text-gray-600">
            + Tus Regalos Conquistados (GRATIS)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="p-4 sm:p-6 shadow-soft hover:shadow-glow transition-all">
                <div className="relative mb-4">
                  <Image
                    src={bonus.image || "/placeholder.svg"}
                    alt={bonus.title}
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-success px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm shadow-lg text-[rgba(31,245,78,1)] tracking-wider font-black mb-0 mt-2 mr-1 bg-secondary-foreground">
                    GRATIS
                  </div>
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold mb-2 text-slate-600">Bonus #{index + 1}</h4>
                <h5 className="font-semibold mb-2 sm:text-base text-slate-600 text-lg">{bonus.title}</h5>
                <p className="text-xs sm:text-sm mb-3 text-slate-500">{bonus.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-bold line-through text-chart-1">{bonus.value}</span>
                  <span className="text-lg sm:text-xl font-bold text-success text-[rgba(12,213,22,1)]">GRATIS</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Value Stack */}
        <Card className="p-6 sm:p-8 mb-8 sm:mb-8 bg-accent/20">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 px-2 text-slate-600">
            Valor Total de Tu Misión
          </h3>
          <div className="space-y-2 sm:space-y-3 max-w-md mx-auto mb-4 sm:mb-6">
            <div className="flex justify-between items-center text-sm sm:text-base">
              <span className="text-slate-500">✓ El Código David</span>
              <span className="font-semibold text-slate-700">$67</span>
            </div>
            <div className="flex justify-between items-center text-success-foreground text-sm sm:text-base">
              <span className="text-slate-500">✓ El Mapa Secreto de los Salmos</span>
              <span className="font-semibold text-slate-700">$17</span>
            </div>
            <div className="flex justify-between items-center text-success-foreground text-sm sm:text-base">
              <span className="text-slate-500">✓ El Arsenal Anti-Monstruos</span>
              <span className="font-semibold text-slate-700">$25</span>
            </div>
            <div className="flex justify-between items-center text-success-foreground text-sm sm:text-base">
              <span className="text-slate-500">✓ El Teléfono Rojo de Dios</span>
              <span className="font-semibold text-slate-700">$32</span>
            </div>
            <div className="border-t-2 border-border pt-3 flex justify-between items-center text-lg sm:text-xl font-bold">
              <span className="text-slate-600">VALOR TOTAL:</span>
              <span className="line-through text-slate-700">$141</span>
            </div>
            <div className="text-center pt-4">
              <p className="mb-2 text-sm sm:text-base text-slate-600">Tu inversión de hoy:</p>
              <p className="text-4xl sm:text-5xl font-bold text-[rgba(0,213,11,1)]">$8.97</p>
              <p className="text-sm sm:text-base text-success-foreground mt-2 font-semibold text-red-400">
                ¡Ahorras $132.03!
              </p>
            </div>
          </div>
        </Card>

        {/* Final Warning */}
        <Card className="p-6 sm:p-8 bg-warning/10 border-2 border-warning">
          <div className="text-center space-y-3 sm:space-y-4">
            <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-warning-foreground mx-auto text-red-500" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-warning-foreground px-2 text-destructive-foreground">
              ¡ÚLTIMA ADVERTENCIA!
            </h3>
            <p className="text-warning-foreground max-w-2xl mx-auto text-sm sm:text-base px-2 text-slate-600">
              Este subsidio de misión está limitado a los primeros 100 reclutas del día. Si abandonas esta página, tus
              regalos conquistados (valorados en $141) se bloquearán permanentemente y se asignarán al siguiente recluta
              en la fila.
            </p>
            <p className="font-bold text-warning-foreground text-lg sm:text-xl px-2 text-slate-600">
              No hay segundas oportunidades. La decisión es tuya.
            </p>
            <div className="pt-2 sm:pt-4">
              <Button
                size="lg"
                className="hover:bg-warning/90 text-warning-foreground text-base sm:text-xl px-8 sm:px-12 sm:py-8 rounded-full shadow-glow transition-all hover:scale-105 font-bold w-full md:w-auto min-h-[56px] bg-slate-500 text-background py-9 animate-pulse-subtle"
                onClick={() => (window.location.href = CHECKOUT_URL)}
              >
                <span className="text-balance">Reclamar Mi Paquete Completo Ahora</span>
              </Button>
            </div>
          </div>
        </Card>

        {/* Trust Badges */}
        <div className="mt-8 sm:mt-12 text-center space-y-4">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success text-green-600" />
              <span className="text-green-600">Acceso Inmediato</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success text-green-600" />
              <span className="text-green-600">Garantía de 30 Días</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success text-green-600" />
              <span className="text-green-600">Pago Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
