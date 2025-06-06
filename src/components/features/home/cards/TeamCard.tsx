import { Link } from "react-router-dom";
import type { TeamMember } from "../../../../types/TeamMember";

export function TeamCard({ teamMembersData }: { teamMembersData: TeamMember[]}) {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
  {teamMembersData.map((member) => (
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
  )
}