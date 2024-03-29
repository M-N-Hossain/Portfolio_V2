import klimakampen from "./assets/company/klimakampen.png";
import TourTravel from "../src/assets/TourTravel.png";
import documentationWebsite from "../src/assets/documentationWebsite.png";
import groceryShop from "../src/assets/groceryShop.png";

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

export { experiences, projects };
