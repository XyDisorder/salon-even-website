// src/pages/Home.tsx
import HeroSection from "../components/features/home/Hero";
import PracticalInformation from "../components/features/home/PracticalInformation";
import SalonGallery from "../components/features/home/SalonGallery";
import ServiceSection from "../components/features/home/ServiceSection";
import TeamSection from "../components/features/home/TeamSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <ServiceSection />
      <SalonGallery />
      <PracticalInformation  />
    </>
  );
}
