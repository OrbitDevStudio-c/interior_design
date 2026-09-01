import React, { useState } from "react";
import { MotionConfig } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress";
import ChapterProgress from "./components/ChapterProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import CustomCursor from "./components/CustomCursor";
import NoiseOverlay from "./components/NoiseOverlay";
import MobileChapterDock from "./components/MobileChapterDock";
import AutoScroll from "./components/AutoScroll";

export default function App() {
  const COMPANY_NAME = "AURA";
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#0b0b0b] text-[#f1f1f1] antialiased selection:bg-[#c49678] selection:text-[#0b0b0b] overflow-x-hidden">
        
        {/* 3-Second Inactivity Auto-Scroll Tour */}
        <AutoScroll />

        {/* Custom Luxury Interactive Spring Cursor (Desktop) */}
        <CustomCursor />

        {/* Cinematic Editorial Film Grain Texture */}
        <NoiseOverlay />

        {/* Ambient Floating Atmospheric Glow Orbs */}
        <div className="ambient-glow-copper -top-40 -left-40" />
        <div className="ambient-glow-gold top-[25%] -right-40" />
        <div className="ambient-glow-copper top-[50%] -left-40" />
        <div className="ambient-glow-gold top-[75%] -right-40" />

        {/* Top 1px hairline scroll progress */}
        <ScrollProgress />

        {/* Persistent Bottom Chapter Navigation Bar (Desktop) */}
        <ChapterProgress />

        {/* Floating Compact Mobile Chapter Dock (Mobile) */}
        <MobileChapterDock onOpenContact={openContact} />

        {/* Fixed Top Header */}
        <Header companyName={COMPANY_NAME} onOpenContact={openContact} />

        {/* Main Content Chapters */}
        <main className="relative z-10">
          {/* Hero Section */}
          <Hero onOpenContact={openContact} />

          {/* Chapter I &bull; 01 / ABOUT */}
          <About onOpenContact={openContact} />

          {/* Chapter II &bull; 02 / INTERIOR (Portfolio & Lightbox) */}
          <Portfolio onOpenContact={openContact} />

          {/* Chapter III &bull; 03 / SERVICES (Craft & Objects) */}
          <Services onOpenContact={openContact} />

          {/* Chapter IV &bull; 04 / ARCHITECTURE (Process & Standards) */}
          <Process onOpenContact={openContact} />
          <WhyChooseUs />

          {/* Chapter V &bull; 05 / CONTACT (Record of Impact, Dialogue & Inquiries) */}
          <StatsSection />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        {/* Footer */}
        <Footer companyName={COMPANY_NAME} onOpenContact={openContact} />

        {/* Global Floating Contact Modal ("Let Ideas Take Shape") */}
        <ContactModal isOpen={isContactOpen} onClose={closeContact} />

      </div>
    </MotionConfig>
  );
}
