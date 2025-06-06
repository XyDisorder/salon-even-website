import fanny from '../assets/team/team-fanny.jpeg';
import fabien from '../assets/team/team-fabien.png';
import eliot from '../assets/team/team-eliot.png';
import type { TeamMember } from '../types/TeamMember';

export const teamMembers: TeamMember[] = [
  {
    id: 'fabien',
    name: 'Fabien EVEN',
    role: 'Coiffeur',
    image: fabien,
    bio: 'Fabien est un expert en coupes modernes',
    instagram: 'https://www.instagram.com/fabieneven',
  },
  {
    id: 'fanny',
    name: 'Fanny',
    role: 'Coloriste et Coiffeuse',
    image: fanny,
    bio: 'Fanny est une artiste de la couleur, spécialisée dans les techniques de balayage et d’ombré hair.',
    instagram: 'https://www.instagram.com/fanny_hairmakeupart',
  },
  {
    id: 'eliot',
    name: 'Eliot',
    role: 'Coloriste',
    image: eliot,
    bio: 'Eliot est passionné par les couleurs naturelles et lumineuses, apportant une touche artistique à chaque prestation.',
    instagram: '',
  },
];
