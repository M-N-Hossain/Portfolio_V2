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
import nestjs from "./assets/tech/nestjs.svg";
import nodejs from "./assets/tech/nodejs.png";
import reactjs from "./assets/tech/reactjs.png";
import reactNative from "./assets/tech/reactNative.png";
import redux from "./assets/tech/redux.png";
import spring from "./assets/tech/spring.png";
import sqlite from "./assets/tech/sqlite.png";
import tailwind from "./assets/tech/tailwind.png";
import typescript from "./assets/tech/typescript.png";

import athme from "./assets/company/athme.jpeg";
import klimakampen from "./assets/company/klimakampen.png";

import cphbusiness from "./assets/education/CPHBusiness.png";
import kea from "./assets/education/KEA.png";

import carrental from "./assets/carrental.png";
import documentationWebsite from "./assets/documentationWebsite.png";
import FaceHook from "./assets/FaceHook.png";
import groceryShop from "./assets/groceryShop.png";
import LWSKitchen from "./assets/LWSKitchen.png";
import MyShop from "./assets/MyShop.png";
import OnileLearningPlatformBackend from "./assets/OnileLearningPlatformBackend.webp";
import TourTravel from "./assets/TourTravel.png";
import UptimeMonitorApi from "./assets/UptimeMonitorApi.webp";
import weatherApp from "./assets/weatherApp.png";

// Enhanced technology categorization
const technologies = {
  frontend: [
    { name: "React JS", icon: reactjs, proficiency: "Expert" },
    { name: "JavaScript", icon: javascript, proficiency: "Expert" },
    { name: "TypeScript", icon: typescript, proficiency: "Advanced" },
    { name: "HTML", icon: html, proficiency: "Expert" },
    { name: "CSS", icon: css, proficiency: "Expert" },
    { name: "Tailwind CSS", icon: tailwind, proficiency: "Advanced" },
    { name: "Redux Toolkit", icon: redux, proficiency: "Advanced" },
  ],
  backend: [
    { name: "Node JS", icon: nodejs, proficiency: "Expert" },
    { name: "Express JS", icon: express, proficiency: "Expert" },
    { name: "Nest JS", icon: nestjs, proficiency: "Advanced" },
    { name: "Java", icon: java, proficiency: "Advanced" },
    { name: "Spring Boot", icon: spring, proficiency: "Advanced" },
  ],
  mobile: [
    { name: "React-Native", icon: reactNative, proficiency: "Advanced" },
  ],
  databases: [
    { name: "MongoDB", icon: mongodb, proficiency: "Advanced" },
    { name: "MySQL", icon: mysql, proficiency: "Advanced" },
    { name: "SQLite", icon: sqlite, proficiency: "Proficient" },
  ],
  cloud: [
    { name: "AWS", icon: aws, proficiency: "Advanced" },
    { name: "Azure", icon: azure, proficiency: "Proficient" },
    { name: "Docker", icon: docker, proficiency: "Advanced" },
  ],
  tools: [{ name: "GitHub", icon: github, proficiency: "Expert" }],
};

const experiences = [
  {
    title: "Software Developer",
    company_name: "Athme",
    icon: athme,
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [
      "Developed a full-stack mobile app for sports event creation and participation.",
      "Built a real-time event management system with frontend-backend integration.",
      "Improved UX through iterative user testing and feedback implementation.",
      "Technologies: React Native, Expo, Node.js, MongoDB, Express.js.",
    ],
  },
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

// Enhanced projects with detailed information for individual pages
const projects = [
  {
    id: "lws-kitchen",
    name: "LWS Kitchen – Food Blog & Recipe Platform",
    shortDescription:
      "A modern recipe platform with dynamic content management and user-friendly navigation.",
    description: `A comprehensive recipe platform built with Next.js, featuring dynamic category and recipe management using custom JSON data. The platform showcases modern web development practices with server-side rendering, responsive design, and intuitive user experience.`,
    detailedDescription: `LWS Kitchen represents a modern approach to recipe sharing and food blogging. Built with Next.js for optimal performance and SEO, the platform features a sophisticated content management system that handles recipes, categories, and user interactions seamlessly.

The project demonstrates advanced React concepts including dynamic routing, component composition, and data fetching strategies. The homepage features curated content including top-rated recipes, popular categories, and seasonal collections, all managed through a flexible JSON-based content system.

Key architectural decisions include the use of modular components for scalability, implementation of responsive design principles for cross-device compatibility, and optimization techniques for fast loading times. The platform also incorporates modern UI/UX principles with clean typography, intuitive navigation, and visually appealing recipe presentations.`,
    problemSolved:
      "Created an engaging platform for food enthusiasts to discover, share, and organize recipes with an emphasis on user experience and content discoverability.",
    keyFeatures: [
      "Dynamic recipe and category management",
      "Responsive design optimized for all devices",
      "Server-side rendering for improved SEO",
      "Intuitive search and filtering system",
      "Modern, clean UI with excellent typography",
      "Fast loading times and performance optimization",
    ],
    challenges: [
      {
        challenge: "Implementing efficient data fetching for dynamic content",
        solution:
          "Utilized Next.js static generation and server-side rendering capabilities to optimize performance while maintaining dynamic content flexibility",
      },
      {
        challenge: "Creating a scalable component architecture",
        solution:
          "Developed modular, reusable components with clear separation of concerns and consistent prop interfaces",
      },
    ],
    impact:
      "Successfully created a user-friendly platform that demonstrates modern web development best practices and serves as a showcase for advanced React/Next.js capabilities.",
    learningOutcomes: [
      "Advanced Next.js features including SSR and static generation",
      "Component architecture and design patterns",
      "Performance optimization techniques",
      "Modern CSS and responsive design principles",
    ],
    techs: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
    ],
    images: [LWSKitchen],
    website_link: "https://lws-kitchen-next-js.vercel.app/",
    source_code_link: "https://github.com/M-N-Hossain/lws-kitchen-NextJS",
    type: "web",
    category: "frontend",
    featured: true,
    dateCompleted: "2024-12",
  },
  {
    id: "weather-app",
    name: "Real-time Weather Application",
    shortDescription:
      "A comprehensive weather app with location services and real-time updates.",
    description: `A modern weather application providing real-time weather updates with location-based services, search functionality, and favorite location management.`,
    detailedDescription: `This weather application showcases advanced React development with custom hooks, context management, and external API integration. Built with Vite for optimal development experience, the app provides comprehensive weather information with an intuitive, user-friendly interface.

The application demonstrates sophisticated state management using React Context API and custom hooks, particularly the useWeather hook that handles all weather-related data fetching and management. The architecture emphasizes reusability and maintainability through well-structured components and clear separation of concerns.

Key technical implementations include geolocation services for automatic location detection, local storage integration for favorite locations, responsive design for cross-device compatibility, and error handling for robust user experience. The app also features loading states, search functionality, and detailed weather information presentation.`,
    problemSolved:
      "Developed a reliable weather application that provides accurate, real-time weather information with enhanced user experience through location services and personalized features.",
    keyFeatures: [
      "Real-time weather data from OpenWeatherMap API",
      "Automatic location detection using geolocation",
      "Search functionality for specific locations",
      "Favorite locations management with local storage",
      "Responsive design for all device types",
      "Custom hooks for clean code architecture",
      "Loading states and error handling",
    ],
    challenges: [
      {
        challenge: "Managing complex state across multiple components",
        solution:
          "Implemented React Context API with custom hooks for centralized state management and clean component interfaces",
      },
      {
        challenge: "Handling asynchronous API calls and loading states",
        solution:
          "Created a custom useWeather hook that manages all API interactions, loading states, and error handling",
      },
    ],
    impact:
      "Created a fully functional weather application that demonstrates advanced React patterns and provides excellent user experience with modern web development practices.",
    learningOutcomes: [
      "Advanced React hooks and context management",
      "External API integration and error handling",
      "Geolocation services implementation",
      "Custom hook development for code reusability",
      "Local storage integration for data persistence",
    ],
    techs: [
      { name: "Vite", color: "blue-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "OpenWeatherMap API", color: "orange-text-gradient" },
    ],
    images: [weatherApp],
    website_link: "https://real-time-weather-dashboard-ebon.vercel.app/",
    source_code_link: "https://github.com/M-N-Hossain/RealTimeWeatherDashboard",
    type: "web",
    category: "frontend",
    featured: true,
    dateCompleted: "2024-11",
  },
  {
    id: "car-rental",
    name: "Car Rental Platform",
    shortDescription:
      "A modern car rental platform with search, comparison, and reservation features.",
    description:
      "A comprehensive car rental website that allows users to rent cars for personal or business use, featuring an intuitive interface for searching, comparing, and reserving vehicles.",
    detailedDescription:
      "This car rental platform represents a modern approach to vehicle rental services, built with React and modern web technologies. The application provides users with a seamless experience for discovering and booking rental cars with various filtering and search capabilities.",
    problemSolved:
      "Created an accessible platform for users to easily find and rent vehicles for their transportation needs.",
    keyFeatures: [
      "Vehicle search and filtering system",
      "Comparison tools for different car models",
      "Reservation management system",
      "Responsive design for all devices",
      "Modern UI with intuitive navigation",
    ],
    challenges: [
      {
        challenge: "Implementing efficient vehicle search and filtering",
        solution:
          "Developed a robust filtering system with multiple criteria to help users find the perfect vehicle",
      },
    ],
    impact:
      "Successfully created a user-friendly platform that simplifies the car rental process with modern web technologies.",
    learningOutcomes: [
      "React component architecture",
      "State management patterns",
      "Responsive web design",
      "User interface design principles",
    ],
    techs: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "CSS", color: "orange-text-gradient" },
    ],
    images: [carrental],
    website_link: "https://rentalfleet.netlify.app/",
    source_code_link: "https://github.com/M-N-Hossain/CarRental",
    type: "web",
    category: "frontend",
    featured: false,
    dateCompleted: "2024-09",
  },
  {
    id: "tour-travel",
    name: "Tour & Travel Website",
    shortDescription:
      "A travel website showcasing destinations and travel packages with modern React design.",
    description:
      "A comprehensive travel website built to demonstrate React fundamentals and core concepts, featuring destination showcases and travel package information.",
    detailedDescription:
      "This travel website serves as a learning project that demonstrates mastery of React core concepts including component composition, state management, and modern JavaScript features. The project showcases various travel destinations and packages with an engaging, user-friendly interface.",
    problemSolved:
      "Created an attractive travel website that demonstrates React development skills and provides users with travel destination information.",
    keyFeatures: [
      "Destination showcase with imagery",
      "Travel package information",
      "Responsive design implementation",
      "Component-based architecture",
      "Modern CSS styling",
    ],
    challenges: [
      {
        challenge: "Learning and implementing React core concepts",
        solution:
          "Systematically built components while focusing on React fundamentals and best practices",
      },
    ],
    impact:
      "Successfully demonstrated React proficiency while creating an engaging travel website.",
    learningOutcomes: [
      "React component lifecycle",
      "JSX and component composition",
      "CSS styling with React",
      "Project structure organization",
    ],
    techs: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "CSS", color: "orange-text-gradient" },
    ],
    images: [TourTravel],
    website_link: "https://transcendent-gaufre-609435.netlify.app/",
    source_code_link: "https://github.com/M-N-Hossain/tour-travelproject",
    type: "web",
    category: "frontend",
    featured: false,
    dateCompleted: "2024-08",
  },
  {
    id: "ecommerce-dashboard",
    name: "E-commerce Product Dashboard",
    shortDescription:
      "A feature-rich dashboard with advanced search, filtering, and product management capabilities.",
    description:
      "A comprehensive e-commerce dashboard that allows users to browse, search, filter, and sort products with an intuitive user experience and modern design.",
    detailedDescription:
      "This e-commerce dashboard showcases advanced React development with custom hooks, real-time search functionality, and sophisticated state management. Built with modern web technologies, the application provides a seamless shopping experience with powerful product discovery features. The project demonstrates expertise in building scalable, user-friendly interfaces with clean architecture and reusable components.",
    problemSolved:
      "Created a powerful e-commerce interface that enhances product discovery and provides users with comprehensive filtering and search capabilities.",
    keyFeatures: [
      "Real-time search with custom useDebounce hook",
      "Advanced filtering and sorting options",
      "Product comparison and wishlist features",
      "Shopping cart management",
      "Responsive design with Tailwind CSS",
      "Modular component architecture",
      "Performance-optimized rendering",
    ],
    challenges: [
      {
        challenge:
          "Implementing efficient real-time search without performance issues",
        solution:
          "Created a custom useDebounce hook to optimize API calls and improve user experience",
      },
      {
        challenge: "Managing complex state across multiple filtering options",
        solution:
          "Developed a centralized state management system using React hooks for clean data flow",
      },
    ],
    impact:
      "Successfully built a modern e-commerce interface that demonstrates advanced React patterns and provides excellent user experience.",
    learningOutcomes: [
      "Custom hook development and optimization",
      "Advanced state management patterns",
      "Performance optimization techniques",
      "Modern UI/UX design with Tailwind CSS",
      "Component architecture and reusability",
    ],
    techs: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    images: [MyShop],
    website_link: "https://my-shop-ruby-mu.vercel.app/",
    source_code_link: "https://github.com/M-N-Hossain/myShop.git",
    type: "web",
    category: "frontend",
    featured: true,
    dateCompleted: "2024-10",
  },

  // backend
  {
    id: "documentation-website",
    name: "Node.js Documentation Hub",
    shortDescription:
      "A comprehensive developer resource hub for Node.js with custom server-side rendering.",
    description:
      "A comprehensive resource hub for developers focusing on Node.js features, RESTful API best practices, and detailed endpoint documentation.",
    detailedDescription:
      "This documentation website serves as a comprehensive resource for developers working with Node.js. Built with a custom template engine for server-side rendering, it provides detailed guidelines, best practices for RESTful API design, and thorough endpoint documentation. The project demonstrates expertise in backend development and custom templating solutions.",
    problemSolved:
      "Created a centralized documentation platform that helps developers understand Node.js concepts and API development best practices.",
    keyFeatures: [
      "Custom template engine implementation",
      "Server-side rendering with Node.js",
      "Comprehensive API documentation",
      "RESTful design guidelines",
      "Terminal command references",
      "Developer-friendly navigation",
    ],
    challenges: [
      {
        challenge:
          "Building a custom template engine for server-side rendering",
        solution:
          "Developed a lightweight templating system that efficiently renders dynamic content server-side",
      },
      {
        challenge: "Organizing complex technical documentation",
        solution:
          "Created a structured information architecture with clear navigation and search functionality",
      },
    ],
    impact:
      "Successfully created a valuable resource for developers learning Node.js and API development.",
    learningOutcomes: [
      "Custom template engine development",
      "Server-side rendering techniques",
      "Documentation architecture design",
      "Node.js backend development",
      "RESTful API design principles",
    ],
    techs: [
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "blue-text-gradient" },
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    images: [documentationWebsite],
    website_link: "https://documentation-s655.onrender.com/",
    source_code_link: "https://github.com/M-N-Hossain/Documentation",
    type: "web",
    category: "backend",
    featured: true,
    dateCompleted: "2024-07",
  },
  {
    id: "uptime-monitoring-api",
    name: "Uptime Monitoring API",
    shortDescription:
      "A robust API monitoring system with SMS notifications built with pure Node.js.",
    description:
      "A comprehensive API monitoring system that tracks endpoint uptime and sends SMS notifications when status changes occur.",
    detailedDescription:
      "This uptime monitoring API demonstrates advanced backend development skills using pure Node.js without frameworks. The system allows users to register and create API health checks with customizable properties including protocol, URL, method, and timeout settings. It performs regular automated checks against specified endpoints and sends real-time SMS notifications via Twilio when status changes are detected. The project showcases expertise in building scalable monitoring solutions from scratch.",
    problemSolved:
      "Created a reliable monitoring solution that helps developers and businesses maintain awareness of their API health and performance.",
    keyFeatures: [
      "User registration and authentication",
      "Customizable API health checks",
      "Real-time uptime monitoring",
      "SMS notifications via Twilio integration",
      "Status change detection and alerting",
      "RESTful API design",
      "Built with pure Node.js (no frameworks)",
    ],
    challenges: [
      {
        challenge: "Building a robust API without using frameworks",
        solution:
          "Implemented custom routing, request handling, and response management using pure Node.js modules",
      },
      {
        challenge: "Managing periodic health checks efficiently",
        solution:
          "Developed a scheduling system that efficiently manages multiple concurrent API monitoring tasks",
      },
    ],
    impact:
      "Successfully created a production-ready monitoring system that demonstrates advanced Node.js capabilities and real-world application.",
    learningOutcomes: [
      "Pure Node.js development without frameworks",
      "API monitoring and health checking",
      "Third-party service integration (Twilio)",
      "Scheduled task management",
      "RESTful API design principles",
    ],
    techs: [
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Twilio API", color: "blue-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    images: [UptimeMonitorApi],
    source_code_link:
      "https://github.com/M-N-Hossain/UptimeMonitoringAPI_RawNode",
    type: "web",
    category: "backend",
    featured: true,
    dateCompleted: "2024-06",
  },
  {
    id: "online-learning-platform",
    name: "Online Learning Platform API",
    shortDescription:
      "A comprehensive backend system for an online learning platform with role-based access control.",
    description: `This project implements a robust backend system for an online learning platform, designed to facilitate seamless interaction between students, instructors, and administrators. It features secure user authentication using JWT tokens and role-based access control, ensuring data integrity and appropriate permissions for different user roles.`,
    detailedDescription: `The Online Learning Platform API represents a sophisticated backend architecture designed for educational technology applications. Built with NestJS for enterprise-grade scalability, the system implements comprehensive user management with role-based access control supporting students, instructors, and administrators.

The platform features advanced course management capabilities, including content creation, enrollment tracking, and progress monitoring. The modular architecture ensures maintainability and scalability, while DTO-based validation guarantees data integrity across all endpoints.

Key technical implementations include JWT-based authentication, MongoDB integration for flexible data storage, comprehensive API documentation via Swagger, and structured error handling. The system is designed to support future enhancements such as progress tracking, certifications, and advanced analytics.`,
    problemSolved:
      "Created a scalable backend infrastructure for educational platforms that supports multiple user roles and comprehensive course management.",
    keyFeatures: [
      "JWT-based authentication and authorization",
      "Role-based access control (Student, Instructor, Admin)",
      "Comprehensive course management system",
      "Student enrollment and progress tracking",
      "DTO-based input validation",
      "Swagger API documentation",
      "Modular and scalable architecture",
    ],
    challenges: [
      {
        challenge: "Implementing complex role-based permissions",
        solution:
          "Developed a flexible RBAC system using NestJS guards and decorators for granular access control",
      },
      {
        challenge: "Ensuring data consistency across user roles",
        solution:
          "Implemented comprehensive DTO validation and database constraints to maintain data integrity",
      },
    ],
    impact:
      "Successfully created a production-ready backend system that can support thousands of users with different access levels and complex course structures.",
    learningOutcomes: [
      "Advanced NestJS framework patterns",
      "Role-based access control implementation",
      "Enterprise-level API design",
      "MongoDB schema design for educational platforms",
      "API documentation with Swagger",
    ],
    techs: [
      { name: "NestJS", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Swagger", color: "yellow-text-gradient" },
      { name: "JWT", color: "purple-text-gradient" },
    ],
    images: [OnileLearningPlatformBackend],
    source_code_link: "https://github.com/M-N-Hossain/online-learning-platform",
    type: "web",
    category: "backend",
    featured: false,
    dateCompleted: "2024-08",
  },
  {
    id: "grocery-shop",
    name: "Grocery Shop Management System",
    shortDescription:
      "A full-stack grocery delivery system with inventory management and order processing.",
    description:
      "This was a 24-hour exam project that allows users to organize product lists, view the entire inventory, place orders, and record delivery details. With CRUD operations, administrators can efficiently manage the product database.",
    detailedDescription: `The Grocery Shop Management System is a comprehensive full-stack application developed under time constraints as an exam project. The system demonstrates rapid development capabilities while maintaining code quality and functionality.

Built with a traditional web stack using HTML, CSS, and JavaScript for the frontend, and Java with MySQL for the backend, the application showcases fundamental full-stack development principles. The system includes complete inventory management, order processing, and delivery tracking capabilities.

Despite the time constraints, the project implements essential e-commerce features including product catalog management, shopping cart functionality, order processing, and administrative controls. The application demonstrates proficiency in database design, server-side logic, and user interface development.`,
    problemSolved:
      "Created a complete grocery delivery management system within a 24-hour timeframe, demonstrating rapid development and problem-solving skills.",
    keyFeatures: [
      "Complete inventory management system",
      "Order placement and processing",
      "Delivery tracking and management",
      "Administrative CRUD operations",
      "User-friendly product catalog",
      "Database-driven architecture",
    ],
    challenges: [
      {
        challenge: "Completing a full-stack application in 24 hours",
        solution:
          "Prioritized core functionality and implemented efficient development practices to deliver a working system within the deadline",
      },
      {
        challenge: "Integrating frontend and backend components quickly",
        solution:
          "Used familiar technologies and established patterns to ensure smooth integration between all system components",
      },
    ],
    impact:
      "Successfully delivered a functional grocery management system under extreme time pressure, demonstrating ability to work efficiently under constraints.",
    learningOutcomes: [
      "Rapid application development techniques",
      "Time management and prioritization",
      "Full-stack integration patterns",
      "Database design for e-commerce",
      "Working under pressure and deadlines",
    ],
    techs: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
    ],
    images: [groceryShop],
    source_code_link:
      "https://github.com/M-N-Hossain/GroceryDeliverySystemFrontend.git",
    type: "web",
    category: "full-stack",
    featured: false,
    dateCompleted: "2024-05",
  },
  {
    id: "facehook",
    name: "Facehook - Social Networking Platform",
    shortDescription:
      "A full-stack social networking platform with real-time features and dynamic user interactions.",
    description: `Facehook is a full-stack social networking platform that allows users to connect, share posts, and interact with others seamlessly. The application includes robust features like user authentication, real-time updates, and dynamic search functionality.`,
    detailedDescription: `Facehook represents a comprehensive social networking solution built with modern web technologies. The platform demonstrates advanced full-stack development capabilities with React for the frontend and Node.js/Express for the backend, creating a seamless user experience.

The application features a responsive design using Tailwind CSS, ensuring optimal user experience across all devices. The backend implements robust authentication using JWT tokens, RESTful API design, and MongoDB for scalable data management. Real-time features enhance user engagement through dynamic updates and interactions.

Key architectural decisions include component-based frontend architecture, secure authentication patterns, efficient state management, and scalable database design. The platform incorporates modern UI/UX principles with intuitive navigation and engaging user interactions.`,
    problemSolved:
      "Created a complete social networking platform that enables users to connect, share content, and interact in real-time with modern web technologies.",
    keyFeatures: [
      "User authentication and profile management",
      "Real-time post sharing and interactions",
      "Dynamic search functionality",
      "Responsive design for all devices",
      "RESTful API architecture",
      "JWT-based secure authentication",
      "Scalable MongoDB data management",
    ],
    challenges: [
      {
        challenge: "Implementing real-time features for user interactions",
        solution:
          "Developed efficient state management and API patterns to handle dynamic content updates and user interactions",
      },
      {
        challenge: "Creating a scalable social platform architecture",
        solution:
          "Implemented modular component architecture and RESTful APIs to ensure the platform can handle growing user base and content",
      },
    ],
    impact:
      "Successfully created a fully functional social networking platform that demonstrates advanced full-stack development capabilities and modern web practices.",
    learningOutcomes: [
      "Advanced React component architecture",
      "Full-stack authentication patterns",
      "Real-time feature implementation",
      "Social platform database design",
      "Modern UI/UX development with Tailwind CSS",
    ],
    techs: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
      { name: "Express", color: "purple-text-gradient" },
      { name: "MongoDB", color: "teal-text-gradient" },
    ],
    images: [FaceHook],
    website_link: "https://face-hook-eta.vercel.app",
    source_code_link: "https://github.com/M-N-Hossain/FaceHook",
    type: "web",
    category: "full-stack",
    featured: true,
    dateCompleted: "2024-07",
  },
];

// Featured projects for homepage showcase
const featuredProjects = {
  web: projects.filter((p) => p.type === "web" && p.featured).slice(0, 3),
  mobile: projects.filter((p) => p.type === "mobile" && p.featured).slice(0, 3),
};

const education = [
  {
    title: "Bachelor's in Web Development",
    school: "Copenhagen Business Academy",
    date: "Aug 2024 – Jan 2026 (Expected)",
    icon: cphbusiness,
    iconBg: "#e0f7fa",
  },
  {
    title: "Associate Degree in Computer Science",
    school: "Copenhagen School of Design and Technology – (KEA)",
    date: "Aug 2021 – Jan 2024",
    icon: kea,
    iconBg: "#f3e5f5",
  },
];

// Personal information
const personalInfo = {
  name: "Md Nayeem Hossain",
  title: "Full-Stack Software Developer",
  location: "Copenhagen, Denmark",
  tagline:
    "Passionate about building efficient and scalable web and mobile applications",
  bio: `I'm a determined Bangladeshi fellow following my dream of being an efficient software developer, passionate about building efficient and scalable web and mobile applications. I love to continuously learn and explore new technologies which makes me confident in building and optimizing end-to-end applications that serve both business and user needs. My journey has been guided by curiosity, adaptability, and a commitment to growth, which I apply to every project I take on.`,
  skills: [
    "Problem Solving",
    "Quick Learning",
    "Team Collaboration",
    "Communication",
    "Adaptability",
    "Continuous Learning",
    "Project Management",
    "User-Centered Design",
  ],
  social: {
    github: "https://github.com/M-N-Hossain",
    linkedin: "https://www.linkedin.com/in/md-nayeem-hossain-86702921b/",
    email: "nayeem@example.com", // Replace with actual email
  },
};

export {
  education,
  experiences,
  featuredProjects,
  personalInfo,
  projects,
  technologies,
};
