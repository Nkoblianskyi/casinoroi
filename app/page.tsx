import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RankingsSection } from "@/components/rankings-section"
import { GuideSection } from "@/components/guide-section"
import { TopChoiceSection } from "@/components/top-choice-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { TopCasinoPopup } from "@/components/top-casino-popup"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/casino-bg.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="pt-20">
          <HeroSection />
          <div id="rankings">
            <RankingsSection />
          </div>
          <div id="guia">
            <GuideSection />
          </div>
          <TopChoiceSection />
          <div id="faq">
            <FAQSection />
          </div>
          <Footer />
        </div>
      </div>

      {/* Interactive Elements */}
      <CookieBanner />
      <TopCasinoPopup />
    </div>
  )
}
