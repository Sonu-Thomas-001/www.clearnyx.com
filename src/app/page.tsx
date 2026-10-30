import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

export default function HomePage() {
  return (
    <>
      {/* Brand Experience Preloader */}
      <Preloader />

      <main className="relative min-h-screen flex flex-col justify-between w-full bg-white text-[#071B2C] overflow-hidden selection:bg-[#00A6CE]/20 selection:text-[#00A6CE]">
        {/* SECTION 1: Minimalist Transparent Header */}
        <Header />

        {/* SECTION 2: Focused Cinematic Coming Soon Hero with Integrated Countdown */}
        <Hero />

        {/* SECTION 3: Minimalist Brand Footer */}
        <Footer />
      </main>
    </>
  );
}

