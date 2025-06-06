// src/components/Hero.tsx
import imageHome from '../../../assets/home-illustration/imageHomeCoiffure.png';
import { PLANITY_URL } from '../../../constants/url';

export default function HeroSection() {
  return (
    <section className="bg-beige text-black py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Main text */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-5xl font-serif mb-6 leading-tight">
            Salon Even<br />
            Coiffeur et Coloriste
          </h1>
          <p className="text-lg text-black/80 mb-8">
            Votre salon de coiffure à Paris, pour femmes et hommes. 
            Nous vous accueillons dans un espace élégant et apaisant, au cœur de Paris.
            Notre équipe expérimentée met son savoir-faire au service de votre style. 
            Nous proposons des prestations sur-mesure, pour femmes et hommes, avec une attention particulière portée à la qualité et au confort.
          </p>
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded hover:bg-neutral-800 transition"
          >
            Prendre rendez-vous
          </a>

          {/* phone number */}
          <div className="mt-6 text-lg">
            <a href="tel:+33140267842" className="text-black/80 hover:text-black transition">
              📞 01 40 26 78 42
            </a>
            </div>

        </div>

        {/* right picture */}
        <div className="md:w-1/2">
          <img
            src={imageHome}
            alt="Femme coiffée avec élégance"
            className="rounded-md object-cover w-[280px] h-[360px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
