import React from "react";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import StatsSection from "./components/StatsSection";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Configurable company name placeholder
  const COMPANY_NAME = "AURA";

  return (
    <div className="relative min-h-screen bg-white text-text-dark font-outfit antialiased selection:bg-accent selection:text-white">
      {/* Scroll indicator overlay */}
      <ScrollProgress />

      {/* Sticky Glass Navbar */}
      <Header companyName={COMPANY_NAME} />

      {/* Main Layout Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us Section (Includes designer & developer credits + statistics) */}
        <About />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Portfolio Section (Includes category filter and modal details lightbox) */}
        <Portfolio />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Design Process Timeline Section */}
        <Process />

        {/* 7. Client Testimonials Slider Section */}
        <Testimonials />

        {/* 8. Full-Width Animated Counter Statistics Section */}
        <StatsSection />

        {/* 9. FAQ Accordions Section */}
        <FAQ />

        {/* 10. Contact Form & GPS Map Section */}
        <Contact />
      </main>

      {/* 11. Footer Section (Includes Vansh & Ridham credit badges) */}
      <Footer companyName={COMPANY_NAME} />
    </div>
  );
}
