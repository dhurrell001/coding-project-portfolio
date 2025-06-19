import calcImage from "../assets/calculator-424564_1280.jpg"; // Adjust the path as necessary
import cardImage from "../assets/pexels-pnw-prod-8250913.jpg"; // Adjust the path as necessary
import cottageImage from "../assets/GlandwrCottage.jpg"; // Adjust the path as necessary
import portfolioImage from "../assets/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg";
const projectData = [
  {
    id: 1,
    title: "Plaster Calculator",
    description:
      "First mobile app using React Native + Expo. Published on the App Store. Designed to help tradespeople estimate how much plaster is needed based on area, thickness, and contingency. Simple, responsive UI tailored for mobile users.",
    stack: "React Expo",
    repository: "https://github.com/dhurrell001/js-flashcards-mobile",
    image: calcImage,
    website:
      "https://apps.apple.com/us/app/plaster-calculator/id6738589483?platform=iphone",
  },
  {
    id: 2,
    title: "JS Flashcards",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac mollis lacus. Vivamus ullamcorper felis purus, ",
    stack: "React",
    repository: null,
    image: cardImage,
    website: "",
  },
  {
    id: 3,
    title: "Project Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac mollis lacus. Vivamus ullamcorper felis purus, ",
    stack: "React",
    repository: null,

    image: portfolioImage,
    website: "",
  },
  {
    id: 4,
    title: "Glandwr Cottage App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac mollis lacus. Vivamus ullamcorper felis purus, ",
    stack: "React Expo",
    repository: "active",
    image: cottageImage,
    website: "",
  },
];

export default projectData;
