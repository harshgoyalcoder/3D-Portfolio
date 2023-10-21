import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
 
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
import { Facebook, Instagram, LinkedIn, GitHub, YouTube } from '@mui/icons-material';

interface SocialItem {
  id: number;
  url: string;
  icon: React.ElementType;
  colorClass: string; 
}

export const social: SocialItem[] = [
  {
    id: 1,
    url: 'https://www.facebook.com/profile.php?id=100013201639310',
    icon: Facebook,
    colorClass: 'text-blue-500', // Specify the color class for Facebook
  },
  {
    id: 2,
    url: 'https://www.instagram.com/h.a.r.s.h._4/',
    icon: Instagram,
    colorClass: 'text-red-500', // Specify the color class for Instagram
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/harsh-goyal-b361b41b9',
    icon: LinkedIn,
    colorClass: 'text-blue-700', // Specify the color class for LinkedIn
  },
  {
    id: 4,
    url: 'https://github.com/harshgoyalcoder',
    icon: GitHub,
    colorClass: 'text-gray-500', // Specify the color class for GitHub
  },
  {
    id: 5,
    url: 'https://www.youtube.com/channel/UCsSkUi1SH0fq8T5ien9Dolw',
    icon: YouTube,
    colorClass: 'text-red-600', // Specify the color class for YouTube
  },
];




const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "BITS Pilani,Pilani Campus",
    company_name: "1 ClickTech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AI/ML",
    company_name: "Army Base Camp",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2018 - April 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "April 2017 - April 2018",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const educations = [
  {
    name: "BITS Pilani, Pilani Campus",
    education: "Graduation",
    info: "B.E. in Electrical And Electronic Engineering",
    date:"May 2024",
    image: "https://qph.cf2.quoracdn.net/main-qimg-757b494adc114bcef4b312661687f8b8",
  },
  {
    name: "Apollo Public School",
    education: "Higher Education",
    info: "AIR 6603 in JEE Advanced",
    date:"May 2020",
    image: "data:image/png;base64,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",
  },
 
  {
    name: "Tagore International School",
    education: "Secondary Education",
    info: "C.B.S.E. Board",
    date:"May 2018",
    image: "https://harshgoyalcoder.github.io/Personal-Portfolio-Website/tis-logo.jpeg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, educations, projects };
