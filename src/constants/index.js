import {
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
  git,
  figma,
  electron,
  reactnative,
  threejs,
  rbv,
  carrotsuite,
  Tens,
  zuri,
  payyng,
  payyng2,
  c,
  bootstrap,
  zira,
  memoir,
  modi,
  cplus,
  firebase,
  graphql,
  jest,
  jquery,
  sqlite,
  web2,
  computer,
  phone,
  mealstogo,
  moviehut,
  socialbay,
  readers,
  timer,
  whatsapp,
  zippy,
  zustand,
  znews,
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
    icon: phone,
  },
  {
    title: "Desktop Developer",
    icon: computer,
  },
  {
    title: "Web Developer",
    icon: web2,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React native",
    icon: reactnative,
  },
  {
    name: "Electron",
    icon: electron,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Tk",
    icon: redux,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Graphql",
    icon: graphql,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "SqLite",
    icon: sqlite,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "Tailwind ",
  //   icon: tailwind,
  // },
  // {
  //   name: "Figma",
  //   icon: figma,
  // },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "Jquery",
    icon: jquery,
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
  {
    title: "Mobile Developer",
    company_name: "ReadersPlug",
    icon: readers,
    iconBg: "#000",
    date: "Dec 2023 - April 2024",
    points: [
      "Improved and upgraded the UI by implementing industry standard practices for animations to improve user experiences",
      "Integrate offline features for users with limited network connectivity ",
      "Improved rendering performances of UI components, optimizing for smoother displays and a faster refresh rate (aimed for a steady 60fps)",
      "Integrated with a NodeJS and Express backend to institute login personalities, using email sign-in as the authentication process",
      "I Enabled a password recovery system for users to recover their accounts",
      "Utilize native modules like file system, camera, notifications",
      "Implemented a text-to-speech feature for the dictionary module",
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
    name: "Payyng",
    description:
      "Making bill payments, Data Subscription, Electricity, Utilities, Trade, Buy and sell PayPal, Wise Deposit seamless for Nigerians.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "text-sky-800",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "asyncstorage",
        color: "green-text-gradient",
      },
      {
        name: "one-signal",
        color: "text-emerald-500",
      },
      {
        name: "tailwind",
        color: "brown-text-gradient",
      },
      {
        name: "lottie",
        color: "pink-text-gradient",
      },
    ],
    image: payyng2,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.payyng.mobile",
  },
  {
    name: "Whatsapp + AI",
    description:
      "Cloned the social media application called Whatsapp. Integrated user display picture, 1v1 chat with stored contacts, media attachments such as pictures, 1v1 video call, and Ai chat.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "text-sky-800",
      },
      {
        name: "asyncstorage",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "text-emerald-500",
      },
      {
        name: "voximplant",
        color: "orange-text-gradient",
      },
      {
        name: "ChatGPT API v2",
        color: "text-lime-400",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://github.com/looju/whatsapp",
  },
  {
    name: "Meals To Go",
    description:
      "Meals To Go is a cross-platform application that allows users to order their favourite meals from various restaurants as well as keep track of favourite listings. It also alllows for flexible and secure payment options",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "text-sky-800",
      },
      {
        name: "asyncstorage",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "text-emerald-500",
      },
      {
        name: "google maps API",
        color: "orange-text-gradient",
      },
      {
        name: "Paystack API",
        color: "text-lime-400",
      },
      {
        name: "lottie",
        color: "pink-text-gradient",
      },
    ],
    image: mealstogo,
    source_code_link: "https://github.com/looju/MealsToGo",
  },
  {
    name: "Zira",
    description:
      "Zira is a cross-platform mobile fintech application that allows users to deposit, withdraw money to their account. It offers the latest crypto prices as well as more detailed info about the coin such as a graph of historical prices as well as links to their official documentation. It also offers AI one-on-one chat",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "text-sky-800",
      },
      {
        name: "asyncstorage",
        color: "green-text-gradient",
      },
      {
        name: "tanstack query",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "yellow",
      },
      {
        name: "firebase",
        color: "text-emerald-500",
      },
      {
        name: "gemini API",
        color: "orange-text-gradient",
      },
      {
        name: "coinmarket API",
        color: "text-lime-400",
      },
      {
        name: "lottie",
        color: "pink-text-gradient",
      },
    ],
    image: zira,
    source_code_link: "https://github.com/looju/Zira",
  },
  {
    name: "Memoir",
    description:
      "Memoir is a cross-platform desktop application for MacOs, windows and Linux that allows users to write,delete,edit and modify notes with ease",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "text-sky-800",
      },
      {
        name: "electron",
        color: "green-text-gradient",
      },
      {
        name: "jotai",
        color: "text-emerald-500",
      },
      {
        name: "lodash",
        color: "text-orange-700",
      },
    ],
    image: memoir,
    source_code_link: "https://github.com/looju/Memoir",
  },
  {
    name: "Social Bay",
    description:
      "Created an application that allows user to match and like eact other's profile and then chat. Implemented an algorithm to detect matches",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "text-sky-800",
      },
      {
        name: "asyncstorage",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "text-emerald-500",
      },
      {
        name: "lottie",
        color: "pink-text-gradient",
      },
    ],
    image: socialbay,
    source_code_link: "https://github.com/looju/SocialBay",
  },
  {
    name: "Movie Hut",
    description:
      "A cross-platform application where users can watch their favourite movie shows, Tvs, Cartoons, and can find out more info about a particular film",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "text-sky-800",
      },
      {
        name: "asyncstorage",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "text-emerald-500",
      },
      {
        name: "Youtube API",
        color: "text-emerald-800",
      },
      {
        name: "Simkl API",
        color: "text-blue-400",
      },
      {
        name: "lottie",
        color: "pink-text-gradient",
      },
    ],
    image: moviehut,
    source_code_link: "https://github.com/looju/MovieHut",
  },
  {
    name: "Znews",
    description:
      "An application that allows users to catch up on the latest happenings in the world of sports, technology, business, entertainment and just about anything else",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "text-sky-800",
      },
      {
        name: "asyncstorage",
        color: "green-text-gradient",
      },
      {
        name: "Newws API",
        color: "text-emerald-500",
      },
      {
        name: "lottie",
        color: "pink-text-gradient",
      },
    ],
    image: znews,
    source_code_link: "https://github.com/looju/Znews",
  },
  {
    name: "Modi",
    description:
      "Modi is a cross-platform desktop application for MacOs, windows and Linux that allows users to edit and modify the dimensions of their images, existing or new, and produced a newly resized image",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "electron",
        color: "text-sky-800",
      },
      {
        name: "toastify-js",
        color: "green-text-gradient",
      },
    ],
    image: modi,
    source_code_link: "https://github.com/looju/Modi",
  },
  {
    name: "Zippy",
    description:
      "Built an application that allows companies to keep track of their customer orders and location, saving time and enabling increased customer service performance",
    tags: [
      {
        name: "typescript",
        color: "text-emerald-600",
      },
      {
        name: "react native",
        color: "text-sky-800",
      },
      {
        name: "asyncstorage",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "text-emerald-500",
      },
      {
        name: "Google Maps API",
        color: "orange-text-gradient",
      },
      {
        name: "Graphql",
        color: "text-amber-400",
      },
      {
        name: "lottie",
        color: "pink-text-gradient",
      },
    ],
    image: zippy,
    source_code_link: "https://github.com/looju/Zippy",
  },
  {
    name: "Focus Time",
    description:
      "This application was created to be able to manage and keep task of times, as well as organize schedules and tasks. Allows for deleting and rescheduling of tasks",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "text-sky-800",
      },
    ],
    image: timer,
    source_code_link: "https://github.com/looju/PomodoroTimer",
  },
];

export { services, technologies, experiences, testimonials, projects };
