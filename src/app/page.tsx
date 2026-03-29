import { BackgroundTexture } from "@/components/coming-soon/BackgroundTexture";
import { CTASection } from "@/components/coming-soon/CTASection";
import { EnvelopeCard } from "@/components/coming-soon/EnvelopeCard";
import { Heading } from "@/components/coming-soon/Heading";
import { LaunchDate } from "@/components/coming-soon/LaunchDate";

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-dvh bg-brand-dark overflow-hidden flex flex-col items-center">
      {/* Fabric texture overlay */}
      <BackgroundTexture />

      {/* Centered content column */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-97.5 md:max-w-120 px-5">
        <Heading />
        <EnvelopeCard />
        <LaunchDate />
        <CTASection />
      </div>
    </main>
  );
}
