import github from 'assets/images/Github.png';
import linkedin from 'assets/images/LinkedIn.png';
import gmail from 'assets/images/Gmail.png';
import whatsapp from 'assets/images/WhatsApp.png';
import { Social } from 'models';

export const socials: Social[] = [
  { name: 'GitHub', url: 'https://github.com/Gabrielmong', icon: github },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gabrielmonge/',
    icon: linkedin,
  },
  { name: 'Email', url: 'mailto:gabriel.monge.lizano@gmail.com', icon: gmail },
  { name: 'WhatsApp', url: 'https://wa.me/50686837078', icon: whatsapp },
];
