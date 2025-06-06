import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { teamMembers } from '../data/TeamMember';

export default function Team() {
  const { hash } = useLocation();
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const memberRefs = useRef<Record<string, HTMLDivElement>>({});

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = memberRefs.current[id];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setHighlighted(id);
        setTimeout(() => setHighlighted(null), 2000);
      }
    }
  }, [hash]);

  return (
    <section className="bg-[#1e1e1e] text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-20">Notre équipe</h1>

        <div className="space-y-24">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              id={member.id}
              ref={(el) => {
                if (el) memberRefs.current[member.id] = el;
              }}
              className={`transition duration-700 ease-out transform ${
                highlighted === member.id ? 'scale-105 shadow-2xl' : 'scale-100'
              } flex flex-col md:flex-row items-center gap-10 bg-[#2a2a2a] rounded-3xl border border-[#3a3a3a] p-8`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[220px] h-[300px] object-cover rounded-xl shadow-md"
              />

              <div className="text-center md:text-left">
                <h2 className="text-2xl font-serif mb-1">{member.name}</h2>
                <p className="text-sm uppercase tracking-wide text-neutral-400 mb-4">{member.role}</p>
                <p className="text-sm text-neutral-300 leading-relaxed mb-6 max-w-lg">
                  {member.bio}
                </p>
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.5 2.25a.75.75 0 1 0 0 1.5h.007a.75.75 0 0 0 0-1.5H16.25ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
                    </svg>
                    Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}