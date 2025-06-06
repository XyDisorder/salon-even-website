// src/pages/Services.tsx
import { useState } from "react";
import { services } from "../data/ServiceData";
import { PLANITY_URL } from "../constants/url";

const categories = ["Toutes les catégories", ...services.map((s) => s.category)];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Toutes les catégories");

  const filteredServices =
    selectedCategory === "Toutes les catégories"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <section className="bg-[#1e1e1e] text-white px-6 pt-24 pb-40 min-h-screen relative">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-10">Nos services</h1>

        {/* Dropdown filter */}
        <div className="mb-8">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-auto px-4 py-2 bg-[#2a2a2a] border border-white/20 text-white rounded-md shadow-sm"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-[#1e1e1e] text-white">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Full Service List with filtering */}
        <div className="space-y-12">
          {filteredServices.map(({ category, items }) => (
            <div key={category}>
              <h2 className="text-2xl font-serif text-white mb-4 border-b border-white/10 pb-2">
                {category}
              </h2>
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <p className="text-white text-base font-medium">{item.name}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right text-emerald-400 font-semibold">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <a
          href={PLANITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-xl transition"
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}