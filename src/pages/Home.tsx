import HeroSection from '../components/features/home/HeroSection';
import TeamSection from '../components/features/home/TeamSection';
import ServiceSection from '../components/features/home/ServiceSection';
import SalonGallery from '../components/features/home/SalonGallery';
import PracticalInformation from '../components/features/home/PracticalInformation';


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
