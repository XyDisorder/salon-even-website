import { Link } from 'react-router-dom';
import { teamMembers } from '../../../data/TeamMember';

export default function TeamSection() {
  return (
    <section className="bg-beige text-black py-24 border-t border-neutral-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-12">Équipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              to={`/team#${member.id}`}
              className="block text-center transition hover:scale-105 hover:shadow-md duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-md h-[320px] w-[240px] object-cover mx-auto mb-4 grayscale"
              />
              <h3 className="text-xl font-serif">{member.name}</h3>
              <p className="text-black/70">{member.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
