import { educationImageURL, experienceImageURL } from "../common/constants";
import { Apps, EDM } from "../assets/index";

export const timeLineData = {
  experience: [
    {
      date: "May 2020 - July 2020",
      company: "Credit Suisse",
      title: "Technology Analyst Intern",
      content: `My project was to build a test assessment platform using React, Redux & Micronaut(JVM). I also developed REST API's to handle requests and give responses.`,
      timelineImageURL: experienceImageURL,
    },
    {
      date: "June 2019 - August 2019",
      company: "Eatabl",
      title: "Angular Developer",
      content: `Eatabl is a food-tech startup based in Mumbai. My work was to design a website using Angular 6 with all functionalities and store the data into Firebase.`,
      timelineImageURL: experienceImageURL,
    },
  ],
  education: [
    {
      date: "June 2021",
      title: "B.Tech in Information Technology",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timelineImageURL: educationImageURL,
    },
  ],
};

export const featuredProjects = {
  p1: {
    imageLink:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Title",
    content:
      "A responsive full-stack food order web app built in Next.js, Redux and MongoDB. Users can add items to the cart and place orders. The order info will be sent to the database.",
    tags: [
      "NextJs",
      "React",
      "JavaScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
      "TypeScript",
    ],
    demoLink: "https://github.com/Jaynil1611/Enhanced-Portfolio",
    sourceLink: "https://github.com/Jaynil1611/Enhanced-Portfolio",
  },
  p2: {
    imageLink: Apps,
    title: "Title 2",
    content: "sfsfd",
    tags: ["HTML", "CSS"],
    demoLink: "https://github.com/Jaynil1611/Enhanced-Portfolio",
    sourceLink: "https://github.com/Jaynil1611/Enhanced-Portfolio",
  },
};

export const otherProjects = {
  musicRecommendation: {
    imageLink: EDM,
    title: "MUSIC RECOMMENDATION",
    content: "sfsfd",
    tags: ["HTML", "CSS", "Javascript", "React"],
    demoLink: "https://jaynil-gaglani-edm-genres.netlify.app/",
    sourceLink: "https://github.com/Jaynil1611/EDM-Genres",
  },
};

export const cardsData = {
  projects: {
    featured: featuredProjects,
    all: { ...featuredProjects, ...otherProjects },
  },
};

export const skillsData = {
  Languages: [
    "Javascript",
    "Javascript",
    "Javascript",
    "Javascript",
    "Javascript",
    "Javascript",
    "Javascript",
  ],
  Languages1: ["Javascript", "Javascript"],
  Languages2: ["Javascript", "Javascript"],
  Languages3: ["Javascript", "Javascript"],
};
