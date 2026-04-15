import Hero from "../components/landing/hero";
import PathCards from "../components/landing/path-cards";
import HowItWorks from "../components/landing/how-it-works";
import StackSection from "../components/landing/stack-section";
import CtaSection from "../components/landing/cta-section";
import Footer from "../components/landing/footer";
import { paths } from "../lib/challenges";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <PathCards paths={paths} />
      <HowItWorks />
      <StackSection />
      <CtaSection />
      <Footer />
    </main>
  );
}