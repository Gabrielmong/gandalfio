import { socialMediaData } from './socialmedia';
import linkedin from 'assets/images/LinkedIn.png';
import whatsapp from 'assets/images/WhatsApp.png';
import gmail from 'assets/images/Gmail.png';

export const contactData = {
  title: 'Contact',
  description: 'This is where you can contact me.',
  socialMedia: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gabrielmonge/',
      image: linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:gabriel.monge.lizano@gmail.com',
      image: gmail,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/50686837078',
      image: whatsapp,
    },
  ],
};
