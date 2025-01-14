import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons/faFilePdf';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const contactInfo = [
  {
    link: 'https://www.instagram.com/kmao.jpg/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/im-kevin-mao/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:imkevinmao@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: `${process.env.PUBLIC_URL}/kevin-mao.pdf`,
    label: 'Resume',
    icon: faFilePdf,
  },
];

export default contactInfo;
