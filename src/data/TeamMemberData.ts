import fanny from '../assets/team/team-fanny.png';
import fabien from '../assets/team/team-fabien.png';
import eliot from '../assets/team/team-eliot.png';
import type { TeamMember } from '../types/TeamMember';

export const teamMembersData: TeamMember[] = [
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
    role: 'Coloriste et Coiffeur',
    image: eliot,
    bio: 'Eliot est spécialisé en blond, coupe cheveux longs et brush.',
    instagram: '',
  },
];
