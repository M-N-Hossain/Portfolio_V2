import aws from "./assets/tech/aws.png";
import azure from "./assets/tech/azure.png";
import css from "./assets/tech/css.png";
import docker from "./assets/tech/docker.png";
import express from "./assets/tech/express.png";
import github from "./assets/tech/github.png";
import html from "./assets/tech/html.png";
import java from "./assets/tech/java.png";
import javascript from "./assets/tech/javascript.png";
import mongodb from "./assets/tech/mongodb.png";
import mysql from "./assets/tech/mysql.png";
import nodejs from "./assets/tech/nodejs.png";
import reactjs from "./assets/tech/reactjs.png";
import reactNative from "./assets/tech/reactNative.png";
import redux from "./assets/tech/redux.png";
import spring from "./assets/tech/spring.png";
import sqlite from "./assets/tech/sqlite.png";
import tailwind from "./assets/tech/tailwind.png";
import typescript from "./assets/tech/typescript.png";

import carrental from "./assets/carrental.png";
import klimakampen from "./assets/company/klimakampen.png";
import documentationWebsite from "./assets/documentationWebsite.png";
import groceryShop from "./assets/groceryShop.png";
import TourTravel from "./assets/TourTravel.png";
import UptimeMonitorApi from "./assets/UptimeMonitorApi.webp";
import weatherApp from "./assets/weatherApp.png";
import MyShop from "./assets/MyShop.png";

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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React-Native",
    icon: reactNative,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    date: "August 2023 - January 2024",

    points: [
      "Enhanced the user experience of the Klimakampen cross-platform app by implementing a variety of user-centered design principles and conducting extensive user testing.",
      "Developed and sustaining both the frontend (React Native) and backend (Node.js) components of the app, ensuring seamless integration and optimal performance.",
      "Utilized AWS services to build a robust and scalable infrastructure capable of handling a growing user base and increasing traffic demands.",
      "Played a key role in expanding the app's functionality to include personalized recommendations, progress tracking, and gamification elements.",
    ],
  },
];

const projects = [
  {
    name: "Real-time Weather Application",
    description: `A modern weather application that provides real-time weather updates for the user's current location. 
    Users can search for specific locations, view detailed weather data, and save their favorite locations for quick access. 
    Built with Vite and React, this app leverages custom hooks like useWeather for fetching data from OpenWeatherMap API, 
    along with Context API and React hooks for state management and functionality.`,
    techs: [
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "OpenWeatherMap API",
        color: "orange-text-gradient",
      },
    ],
    image: weatherApp,
    wesite_link: "https://real-time-weather-dashboard-ebon.vercel.app/",
    source_code_link: "https://github.com/M-N-Hossain/RealTimeWeatherDashboard",
    type: "frontend",
  },
  {
    name: "Car Rental",
    description:
      "A car rental website is an online platform that allows users to rent cars for personal or business use." +
      "The website provides an interface for searching, comparing and reserving cars. Its in under development. ",
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
    image: carrental,
    wesite_link: "https://rentalfleet.netlify.app/",
    source_code_link: "https://github.com/M-N-Hossain/CarRental",
    type: "frontend",
  },
  {
    name: "Documentation",
    description: `This project is a comprehensive resource hub for developers, focusing on the core features and detailed guidelines of Node.js.
    It offers best practices for designing RESTful APIs, along with thorough endpoint documentation and terminal commands. 
    The website is built with a custom template engine to achieve server-side rendering using Node.js.
    NB: This website is not responsive.`,
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
    wesite_link: "https://documentation-s655.onrender.com/",
    source_code_link: "https://github.com/M-N-Hossain/Documentation",
    type: "backend",
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
    type: "frontend",
  },
  {
    name: "E-commerce Product Dashboard",
    description: `A feature-rich e-commerce dashboard that allows users to browse, search, filter, and sort a variety of products seamlessly. 
    The application provides an intuitive user experience with real-time search functionality powered by a custom useDebounce hook. 
    Sorting options and category filters enhance product discovery, while a clean design built with Tailwind CSS ensures visual appeal. 
    The app is highly modular, leveraging reusable components like ProductCard and Cart, with state management handled effectively using React hooks.`,
    techs: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      
    ],
    image: MyShop, // Replace with the actual image variable or URL
    wesite_link: "https://my-shop-ruby-mu.vercel.app/", 
    source_code_link: "https://github.com/M-N-Hossain/myShop.git", // Replace with your GitHub repo link
    type: "frontend",
  },
  
  // backend
  {
    name: "Uptime Monitoring API",
    description: `This project implements an API to monitor user-defined checks for API uptime and sends mobile notifications via SMS when the status changes (up or down). 
    Users can register and create API checks with properties like protocol, URL, method, and timeout. 
    The system performs regular checks against specified endpoints, and when the status changes, an SMS is sent to the user.
    The system uses Twilio for sending SMS notifications. It's built with Node.js without any frameworks.`,
    techs: [
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },

      {
        name: "Twilio",
        color: "blue-text-gradient",
      },
    ],
    image: UptimeMonitorApi,
    source_code_link:
      "https://github.com/M-N-Hossain/UptimeMonitoringAPI_RawNode",
    type: "backend",
  },

  // Full-Stcak
  {
    name: "Grocery Shop",
    description:
      "This was a 24-hour exam project and it allows users to organize the list product, view the entire inventory, " +
      " place orders, and record delivery details and so on. With CRUD operations, administrators can efficiently manage the product database.",

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
    type: "full-stack",
  },
];

export { experiences, projects, technologies };
