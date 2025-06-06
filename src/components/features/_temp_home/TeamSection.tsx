import { teamMembersData } from '../../../data/TeamMemberData';
import { TeamCard } from './cards/TeamCard';

export default function TeamSection() {
  return (
    <section className="bg-beige text-black py-24 border-t border-neutral-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-12">Équipe</h2>
        <TeamCard teamMembersData={teamMembersData} />
      </div>
    </section>
  );
}
