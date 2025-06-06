import { teamMembers } from "../data/TeamMember";

import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Team() {
  const { hash } = useLocation();
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const memberRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = memberRefs.current[id];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setHighlighted(id);
        setTimeout(() => setHighlighted(null), 2000); // retire l'effet après 2s
      }
    }
  }, [hash]);

  return (
    <section className="bg-[#1e1e1e] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-20">Notre équipe</h1>

        <div className="space-y-24">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              id={member.id}
              ref={(el) => (memberRefs.current[member.id] = el)}
              className={`transition duration-700 ease-out transform ${
                highlighted === member.id ? 'scale-105 shadow-lg' : 'scale-100'
              } flex flex-col md:flex-row items-center gap-10 bg-[#2a2a2a] rounded-3xl border border-[#3a3a3a] p-8`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[220px] h-[300px] object-cover rounded-lg shadow-md"
              />

              <div className="text-center md:text-left">
                <h2 className="text-2xl font-serif mb-1 text-white">{member.name}</h2>
                <p className="text-sm uppercase tracking-wide text-neutral-400 mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed mb-6 max-w-lg">
                  {member.bio}
                </p>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
                >
                  <svg width="16" height="16" fill="currentColor">
                    <use href="#icon-instagram" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
