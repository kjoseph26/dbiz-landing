import { Navbar } from './_components/Navbar'
import { HeroSection } from './_components/HeroSection'
import { TrustBar } from './_components/TrustBar'
import { StatsSection } from './_components/StatsSection'
import { CapabilitiesSection } from './_components/CapabilitiesSection'
import { AiFrameworkSection } from './_components/AiFrameworkSection'
import { TestimonialSection } from './_components/TestimonialSection'
import { ProvenSection } from './_components/ProvenSection'
import { HowWeWork } from './_components/HowWeWork'
import { WhyDbiz } from './_components/WhyDbiz'
import { CtaSection } from './_components/CtaSection'
import { Footer } from './_components/Footer'

export default function V11Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <CapabilitiesSection />
      <AiFrameworkSection />
      <TestimonialSection />
      <ProvenSection />
      <HowWeWork />
      <WhyDbiz />
      <CtaSection />
      <Footer />
    </>
  )
}
