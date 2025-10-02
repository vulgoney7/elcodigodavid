"use client"

import { useState } from "react"
import Page1Hero from "@/components/page-1-hero"
import Page2Bonus1 from "@/components/page-2-bonus1"
import Page3Bonus2 from "@/components/page-3-bonus2"
import Page4Bonus3 from "@/components/page-4-bonus3"
import PageFinalOffer from "@/components/page-final-offer"

export default function FunnelPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [unlockedBonuses, setUnlockedBonuses] = useState<number[]>([])
  const [userVirtue, setUserVirtue] = useState("")

  const unlockBonus = (bonusNumber: number) => {
    if (!unlockedBonuses.includes(bonusNumber)) {
      setUnlockedBonuses([...unlockedBonuses, bonusNumber])
    }
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen">
      {currentPage === 1 && <Page1Hero onNext={goToNextPage} />}
      {currentPage === 2 && (
        <Page2Bonus1 onNext={goToNextPage} onUnlock={() => unlockBonus(1)} unlockedBonuses={unlockedBonuses} />
      )}
      {currentPage === 3 && (
        <Page3Bonus2 onNext={goToNextPage} onUnlock={() => unlockBonus(2)} unlockedBonuses={unlockedBonuses} />
      )}
      {currentPage === 4 && (
        <Page4Bonus3
          onNext={goToNextPage}
          onUnlock={() => unlockBonus(3)}
          onSetVirtue={setUserVirtue}
          unlockedBonuses={unlockedBonuses}
        />
      )}
      {currentPage === 5 && <PageFinalOffer unlockedBonuses={unlockedBonuses} userVirtue={userVirtue} />}
    </main>
  )
}
