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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  rbv,
  carrotsuite,
  Tens,
  zuri,
  payyng,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
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
];

const experiences = [
  {
    title: "Mobile Developer",
    company_name: "RBV",
    icon: rbv,
    iconBg: "#fff",
    date: "Febuaury 2022 - January 2023",
    points: [
      "Utilized third party API and dependencies ",
      "Integrated a secure financial payment gateway for bills payment  ",
      "Integrated with a secure backend for preserving sensitive data ",
      "Created Aesthetically pleasing UI for the application",
      " Developed the RBV Foods mobile application and deployed to the app and google play store",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "Zuri Chat",
    icon: zuri,
    iconBg: "#fff",
    date: "September 2022-December 2022",
    points: [
      "Built aesthetic UIs using modern technologies",
      "Released fully functional, play store builds",
      "Wrote functional unit tests on all production codebases",
    ],
  },
  {
    title: "Web Developer",
    company_name: "TENS Global",
    icon: Tens,
    iconBg: "#fff",
    date: "Januaury 2023 - September 2023",
    points: [
      "Worked with UI designers to create a pixel-perfect UI for a better user experience",
      "Utilized geolocation services for tracking and reading real-time user locations",
      "Utilized Google maps and Google  maps API services  like directions API, autocomplete API and distance matrix API to create a robust map and directions system to enable intercity navigation",
      "Integrated with the server to implement user authentication",
      "Utilized native device modules like file system, camera, gallery, phone contacts and messaging for user profiling ",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "Carrotsuite ERP",
    icon: carrotsuite,
    iconBg: "#fff",
    date: "July 2023 - September 2023",
    points: [
      "Improved and upgraded the UI based on user feedbacks and reviews",
      "Debugged bottlenecks in the legacy codebase caused majorly by deprecated dependencies and dev dependencies",
      "Utilized and implemented native file modules, camera, gallery for the multiple applications (mirror homes, Carrotsuite go)",
      "Utilized an offline-first system using redux to enable seamless user experience while subsequently sending the data to the server when a stable connection has been established",
      "Integrated with the server systems to enable user profile creation, profile deletion and user authentication",
      "Utilized a global storage system using redux to store local data for faster loading times and make requests to the server",
      "Served as a mentor to an intern, steadily monitoring his progress",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "Payyng",
    icon: payyng,
    iconBg: "#000",
    date: "April 2023 - Present",
    points: [
      "Improved and upgraded the UI by implementing industry standard practices for animations to improve user experiences",
      "Integrate offline features for users with limited network connectivity ",
      "Improved rendering performances of UI components, optimizing for smoother displays and a faster refresh rate (aimed for a steady 60fps)",
      "Integrated with a NodeJS and Express backend to institute login personalities as well as authentications with social providers such as Google, Apple",
      "I Enabled a password recovery system for users to recover their accounts ",
      "Utilize native modules like file system, camera, notifications",
      "Integrated a customer support system in order to create an easier communication system for user complaints and enquiries",
      " Deployed application to the Google play store",
      "Maintained and constantly upgraded live application versions based on user feedbakcs",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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

export { services, technologies, experiences, testimonials, projects };
