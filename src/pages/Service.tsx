// src/pages/Services.tsx
import { useState } from "react";
import { services } from "../data/ServiceData";
import { PLANITY_URL } from "../constants/url";
import { Dropdown } from "../components/commons/Dropdown";
import { StickyCTA } from "../components/commons/StickyCTA";

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

      <Dropdown 
        options={categories}
        selectedOption={selectedCategory}
        onSelect={setSelectedCategory}
      />

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
                        {item.duration && (
                          <p className="text-sm text-neutral-400">Durée : {item.duration}</p>
                        )}
                        { item.note && (
                          <p className="text-sm text-neutral-400">Note : {item.note}</p>
                        )}
                      </div>
                      <div className="mt-2 md:mt-0 text-right text-white font-semibold">
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
      <StickyCTA 
        href={PLANITY_URL}
        text="Prendre rendez-vous"
      />
    </section>
  );
}