// src/components/Hero.tsx
import imageHome from '../../../assets/home-illustration/imageHomeCoiffure.png';
import { INSTAGRAM_URL_SALON, PLANITY_URL } from '../../../constants/url';

export default function HeroSection() {
  return (
    <section className="bg-beige text-black py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Main Block */}
        <div className="md:w-1/2 text-left">

        {/* Main Text */}

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
          <a
            href="tel:+33140267842"
            className="text-black/80 hover:text-black transition block"
          >
            📞 01 40 26 78 42
          </a>

        {/* Instagram */}
          <a
            href={INSTAGRAM_URL_SALON}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-black/80 hover:text-black transition"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.5 2.25a.75.75 0 1 0 0 1.5h.007a.75.75 0 0 0 0-1.5H16.25ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
            </svg>
            @salon.even
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
