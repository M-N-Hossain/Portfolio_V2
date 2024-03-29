import github from "./assets/tech/github.png";
import css from "./assets/tech/css.png";
import docker from "./assets/tech/docker.png";
import html from "./assets/tech/html.png";
import javascript from "./assets/tech/javascript.png";
import typescript from "./assets/tech/typescript.png";
import java from "./assets/tech/java.png";
import spring from "./assets/tech/spring.png";
import sqlite from "./assets/tech/sqlite.png";
import mysql from "./assets/tech/mysql.png";
import nodejs from "./assets/tech/nodejs.png";
import reactjs from "./assets/tech/reactjs.png";
import reactNative from "./assets/tech/reactNative.png";
import redux from "./assets/tech/redux.png";
import tailwind from "./assets/tech/tailwind.png";
import aws from "./assets/tech/aws.png";
import azure from "./assets/tech/azure.png";

import klimakampen from "./assets/company/klimakampen.png";
import TourTravel from "./assets/TourTravel.png";
import documentationWebsite from "./assets/documentationWebsite.png";
import groceryShop from "./assets/groceryShop.png";

const technologies = [
  {
    name: "Java",
    icon: java,
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
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React-Native",
    icon: reactNative,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "SQLite",
    icon: sqlite,
  },

  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Klimakampen ApS",
    icon: klimakampen,
    iconBg: "#383E56",
    date: "August 2023 - Januaey 2024",

    points: [
      "Enhancing the user experience of the Klimakampen cross-platform app by implementing a variety of user-centered design principles and conducting extensive user testing.",
      "Developing and sustaining both the frontend (React Native) and backend (Node.js) components of the app, ensuring seamless integration and optimal performance.",
      "Utilizing AWS services to build a robust and scalable infrastructure capable of handling a growing user base and increasing traffic demands.",
      "Playing a key role in expanding the app's functionality to include personalized recommendations, progress tracking, and gamification elements.",
    ],
  },
];

const projects = [
  {
    name: "Documentation",
    description:
      "This site showcasing Comprehensive resources for developers covering core features and detailed guidelines of Node js, designing RESTful APIs," +
      "including best practices, endpoint documentation and terminal commands. ",
    techs: [
      {
        name: "Html",
        color: "orange-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: documentationWebsite,
    wesite_link: "",
    source_code_link: "https://github.com/M-N-Hossain/Documentation",
  },
  {
    name: "Grocery Shop",
    description:
      "This was a 24-hour exam project and it allows users to organize the list product, view the entire inventory, " +
      " place orders, and record delivery details and so on. With CRUD operations, administrators can efficiently manage the product database",

    techs: [
      {
        name: "Html",
        color: "orange-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: groceryShop,
    wesite_link: "",
    source_code_link:
      "https://github.com/M-N-Hossain/GroceryDeliverySystemFrontend.git",
  },
  {
    name: "Tour&Travel",
    description:
      "It is a fun project while learning about react. It potrays my ability and understanding of React and its core concepts.",
    techs: [
      {
        name: "JavaScript",
        color: "pink",
      },
      {
        name: "React JS",
        color: "blue",
      },
      {
        name: "Css",
        color: "pink",
      },
    ],
    image: TourTravel,
    wesite_link: "https://transcendent-gaufre-609435.netlify.app/",
    source_code_link: "https://github.com/M-N-Hossain/tour-travelproject",
  },
];

export { experiences, projects, technologies };
