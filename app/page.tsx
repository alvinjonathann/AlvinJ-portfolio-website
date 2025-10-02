"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/ui/Navbar";
import HeroSection from "../components/ui/HeroSection";
import AboutSection from "../components/ui/AboutSection";
import PortfolioSection from "../components/ui/PortfolioSection";
import ConnectSection from "../components/ui/ConnectSection";
// import ScrollToTop from "../components/ui/ScrollToTop";
import LoadingSpinner from "../components/ui/LoadingSpinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="min-h-screen bg-background relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ConnectSection />
      {/* <ScrollToTop /> */}
    </main>
  );
}
