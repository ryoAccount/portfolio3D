import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  mysql,
  nuxt,
  vue,
  docker,
  vsc,
  twitter,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nuxt,
    name: "Nuxt.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "Vue",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Tools",
  },
  {
    imageUrl: vsc,
    name: "Visual Studio Code",
    type: "Tools",
  },
];

export const experiences = [
  {
    title: "Programmer / System Engineer",
    company_name: "System integrator",
    iconBg: "#accbe1",
    date: "April 2010 - September 2016",
    points: [
      "Develop a system that supports contracts, billing, and logistics operations for businesses that provide mobile WiFi.",
      "I used to program with Java and Oracle DB.",
      "Although I experienced many painful experiences, I was able to develop my own sense of value in my work.",
      "This project has already been completed.",
    ],
  },
  {
    title: "Batch Developer",
    company_name: "Restaurant search",
    iconBg: "#fbc3bc",
    date: "October 2016 - July 2017",
    points: [
      "Design, develop, and maintain a system that allows you to search and reserve restaurants such as restaurants and taverns.",
      "As a member, I mainly developed a batch function that aggregates access logs and delivers emails.",
      "I felt it was a free and easy-to-work environment, but I was quickly transferred.",
    ],
  },
  {
    title: "Team Manager",
    company_name: "EC site",
    iconBg: "#b7e4c7",
    date: "August 2017 - Jun 2018",
    points: [
      "With the expiration of the license of the search engine (GoogleSearchAppliance) used on the EC site, switched to a new search engine.",
      "As the leader of a team of 15 people, I was in charge of managing the progress of members, defining requirements, and collaborating and coordinating with other teams. To be honest, it was a very painful project mentally.",
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "Exchange transaction",
    iconBg: "#e29a06",
    date: "July 2018 - July 2019",
    points: [
      "Newly developed a system that provides foreign exchange trading functions as an ASP service.",
      "I was in charge of developing a component called a gateway, which is responsible for sending and receiving telegrams to and from the Tokyo Financial Exchange.",
      "As the leader of a team of three, I was responsible for server configuration reviews, scheduling with PMs, progress management, quality control, implementation, testing, and reviews.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Reservation management ledger",
    iconBg: "#24e94a",
    date: "August 2019 - February 2021",
    points: [
      "The reservation management ledger system for restaurants has been renovated.",
      "As a sub-leader, I was in charge of managing 3 members. I used Vue.js to develop a screen that adopted an atomic design.",
      "I built an emulator environment and developed a screen that supports multiple browsers and multiple devices.",
      "The team leader was excellent and interesting, and I admired him a little. I wanted to work like that person.",
    ],
  },
  {
    title: "Web Engineer",
    company_name: "Career change support site",
    iconBg: "#e904e0",
    date: "March 2021 - December 2021",
    points: [
      "Develop a career change support site for nurses or caregivers. I implemented a user dashboard using Laravel's authentication feature.",
      "As the person in charge of the project, I decided the system specifications and worked closely with other teams.",
      "Although I was an outsider, I was given a task with unnecessary responsibility.",
      "I met PHP for the first time.",
    ],
  },
  {
    title: "Web Engineer",
    company_name: "Platform for freelance engineers and creators",
    iconBg: "#04e9e0",
    date: "January 2022 - current",
    points: [
      "Develop agent services for freelance engineers and creators. I'm developing a backend / frontend / micro services with TypeScript. We practice Scrum in teams of up to 10 people.",
      "I was able to do what I wanted to do, but I still had a hard time.",
      "I became mentally ill in exchange for my personal growth.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/ryoAccount",
  },
  {
    name: "Twitter",
    iconUrl: twitter,
    link: "https://twitter.com/RYO_nami",
  },
];

export const projects = [
  {
    iconUrl: threads,
    theme: "btn-back-red",
    name: "Tic-Tac-Toe",
    description: "Simple Tic-Tac-Toe game.",
    link: "https://ryoaccount.github.io/profile/game/tictactoe/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Othello",
    description: "Simple othello game.",
    link: "https://ryoaccount.github.io/profile/game/othello/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-blue",
    name: "Mouse Hunter",
    description: "Hidden mouse hunter is aiming at your pointer.",
    link: "https://ryoaccount.github.io/profile/mousehunter/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-orange",
    name: "Motorcycle Game",
    description: "Motorcycle game created with Canvas.",
    link: "https://ryoaccount.github.io/profile/motorcycle/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-pink",
    name: "RSS",
    description: "Content of an RSS feed reader.",
    link: "https://ryoaccount.github.io/rss/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-black",
    name: "Game Boy",
    description: "Created the first Game Boy with CSS.",
    link: "https://ryoaccount.github.io/profile/gameboy/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-yellow",
    name: "VR",
    description: "Virtual Reality with A-Frame.",
    link: "https://ryoaccount.github.io/profile/aframe/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-purple",
    name: "Starfield",
    description: "Colorful starfield.",
    link: "https://ryoaccount.github.io/profile/starfield/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-white",
    name: "PUYO PUYO",
    description: "PUYO PUYO implemented in Javascript. Source code is open to the public.",
    link: "https://ryoaccount.github.io/profile/puyopuyo/",
  },
];
