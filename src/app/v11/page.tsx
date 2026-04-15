import { Navbar } from './_components/Navbar'
import { HeroSection } from './_components/HeroSection'
import { TrustBar } from './_components/TrustBar'
import { StatsSection } from './_components/StatsSection'
import { AiFrameworkSection } from './_components/AiFrameworkSection'
import { ExpertiseSection } from './_components/ExpertiseSection'
import { TestimonialSection } from './_components/TestimonialSection'
import { HowWeWork } from './_components/HowWeWork'
import { WhyDbiz } from './_components/WhyDbiz'
import { CtaSection } from './_components/CtaSection'
import { Footer } from './_components/Footer'

export default function V11Page() {
  return (
    <div className='min-h-screen bg-v11-background text-v11-foreground'>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <AiFrameworkSection />
      <ExpertiseSection />
      <TestimonialSection />
      <HowWeWork />
      <WhyDbiz />
      <CtaSection />
      <Footer />
    </div>
  )
}
