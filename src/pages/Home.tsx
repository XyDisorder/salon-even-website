// src/pages/Home.tsx
import Hero from "../components/features/Home/Hero";
import OpenningSection from "../components/features/Home/OpenningSection";
import SalonGallery from "../components/features/Home/SalonGallery";
import ServiceCTA from "../components/features/Home/ServiceCTA";
import TeamSection from "../components/features/Home/TeamSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TeamSection />
      <ServiceCTA />
      <SalonGallery />
      <OpenningSection  />
    </>
  );
}
