// src/components/ServiceCTA.tsx
import { Link } from 'react-router-dom';

export default function ServiceSection() {
  return (
    <section className="bg-beige text-black py-24 text-center border-t border-neutral-300">
      <h2 className="text-3xl font-serif mb-6">Découvrez nos prestations</h2>
      <Link
        to="/services"
        className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-neutral-800 transition"
      >
        Voir les prestations
      </Link>
    </section>
  );
}
