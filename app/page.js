"use client";
import GradientBackground from "../components/ui/GradientBackground";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Partners from "../components/home/Partners";
import Footer from "@/components/layout/Footer";
import ChatSection from "@/components/home/ChatSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <GradientBackground>
          <Hero />
        </GradientBackground>
        <ChatSection />
        <Features />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
