import { Gift, Lock } from "lucide-react"
import { Card } from "@/components/ui/card"

interface BonusArsenalProps {
  unlockedBonuses: number[]
}

export default function BonusArsenal({ unlockedBonuses }: BonusArsenalProps) {
  const bonuses = [
    { id: 1, name: "Mapa de Salmos", icon: "📖" },
    { id: 2, name: "Arsenal Anti-Monstruos", icon: "🛡️" },
    { id: 3, name: "Teléfono Rojo", icon: "📞" },
  ]

  return (
    <Card className="p-3 sm:p-4 mb-6 sm:mb-8 bg-card/50 backdrop-blur">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 border-0">
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-600" />
          <span className="font-semibold text-sm sm:text-base text-slate-600">Tu Arsenal:</span>
        </div>
        <div className="flex flex-wrap sm:w-auto my-0 px-0 mx-0 gap-2 w-full py-0 mr-0 pr-0 pl-0">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg transition-all text-xs sm:text-sm ${
                unlockedBonuses.includes(bonus.id)
                  ? "bg-success/20 text-success-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <img
                src="/images/design-mode/Gemini-Generated-Image-jvuunfjvuunfjvuu.png"
                alt={bonus.name}
                className="w-8 sm:w-8 sm:h-8 object-contain flex-shrink-0 h-8 px-0 tracking-normal"
              />
              <span className="hidden sm:inline text-xs">{bonus.name}</span>
              {!unlockedBonuses.includes(bonus.id) && <Lock className="w-3 h-3 text-destructive" />}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
