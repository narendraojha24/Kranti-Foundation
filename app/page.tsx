import Hero from "@/components/hero"
import Statistics from "@/components/statistics"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Statistics />
      <CallToAction />
    </div>
  )
}
