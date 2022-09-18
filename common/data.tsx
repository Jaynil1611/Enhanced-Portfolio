import { educationImageURL, experienceImageURL } from "./constants";
import {
  Apps,
  EDM,
  Auction,
  Banana,
  CLI,
  CLI2,
  Ebonics,
  Emoji,
  Maze,
  Portfolio,
  MindUI,
  Dietify,
  DietifyDiaries,
  DietifyQuiz,
  Dietgram
} from "../assets/index";

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
  dietGram: {
    imageLink: Dietgram,
    title: "DIETGRAM",
    content:
      "DietGram is a social media app where diet enthusiasts can read, write and share all things diet.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Chakra UI",
      "NodeJS",
      "Express",
      "Mongoose",
      "MongoDB",
      "JWT",
    ],
    demoLink: "https://dietgram.vercel.app/",
    sourceLink: "https://github.com/Jaynil1611/DietGram",
  },
  dietifyDiaries: {
    imageLink: DietifyDiaries,
    title: "DIETIFY DIARIES",
    content:
      "It is a video library app consisting of diet videos where users can search, sort, filter videos. It includes playlist, liked videos, history & other features.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Mind UI",
      "NodeJS",
      "Express",
      "Mongoose",
      "MongoDB",
      "JWT",
    ],
    demoLink: "https://dietify-diaries.vercel.app/",
    sourceLink: "https://github.com/Jaynil1611/Dietify-Diaries",
  },
  dietify: {
    imageLink: Dietify,
    title: "DIETIFY",
    content:
      "Dietify is an online marketplace to buy healthy & nutrition-rich products.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Mind UI",
      "NodeJS",
      "Express",
      "Mongoose",
      "MongoDB",
      "JWT",
    ],
    demoLink: "https://dietify.vercel.app/",
    sourceLink: "https://github.com/Jaynil1611/Dietify",
  },
  dietifyQuiz: {
    imageLink: DietifyQuiz,
    title: "DIETIFY QUIZ",
    content:
      "A quiz application to test the knowledge of users regarding dieting, nutrition, food & eating habits.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Chakra UI",
      "NodeJS",
      "Express",
      "Mongoose",
      "MongoDB",
      "JWT",
    ],
    demoLink: "https://dietify-quiz.vercel.app/",
    sourceLink: "https://github.com/Jaynil1611/Dietify-Quiz",
  },
};

export const otherProjects = {
  mindUI: {
    imageLink: MindUI,
    title: "MIND UI",
    content:
      "Mind UI is a lightweight and modular component library which helps developers to build blazingly fast web apps.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    demoLink: "https://mind-ui.netlify.app/",
    sourceLink: "https://github.com/Jaynil1611/Mind_UI",
  },
  musicRecommendation: {
    imageLink: EDM,
    title: "MUSIC RECOMMENDATION",
    content:
      "Recommendation of songs of different genres in EDM based on their ratings is executed in the frontend using HTML, CSS & ReactJS.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    demoLink: "https://jaynil-gaglani-edm-genres.netlify.app/",
    sourceLink: "https://github.com/Jaynil1611/EDM-Genres",
  },
  emojiInterpreter: {
    imageLink: Emoji,
    title: "EMOJI INTERPRETER",
    content:
      "Emoji Interpreter provides an easy interface to find the meaning of emoji's instantly. It is done using the famous library, ReactJS.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    demoLink: "https://jaynil-gaglani-emoji-interpreter.netlify.app/",
    sourceLink: "https://github.com/Jaynil1611/Emoji-Interpreter",
  },
  ebonicsTranslator: {
    imageLink: Ebonics,
    title: "EBONICS TRANSLATOR",
    content:
      "Ebonics translator converts English language into African American English language also known as ebonics. It is developed using funtranslations API.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://jaynil-gaglani-ebonics-translator.netlify.app/",
    sourceLink: "https://github.com/Jaynil1611/Ebonics-Translator",
  },
  bananaSpeakTranslator: {
    imageLink: Banana,
    title: "BANANA SPEAK TRANSLATOR",
    content:
      "Banana translator app converts text in English language to Minions language. It is developed using funtranslations API.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://jaynil-gaglani-banana-speak.netlify.app/",
    sourceLink: "https://github.com/Jaynil1611/Banana-Speak-App",
  },
  footballRiddles: {
    imageLink: CLI2,
    title: "FOOTBALL RIDDLES",
    content:
      "Football Riddles tests your depth in the sport of football and challenges you with few tricky questions.",
    tags: ["JavaScript", "NodeJS"],
    demoLink: "https://bit.ly/football-riddles",
    sourceLink: "https://github.com/Jaynil1611/Football_Riddles",
  },
  doYouKnowMe: {
    imageLink: CLI,
    title: "DO YOU KOW ME ?",
    content:
      "This CLI quiz app is aimed to check your knowledge about myself. It has 5 questions related to the things which I do everyday.",
    tags: ["JavaScript", "NodeJS"],
    demoLink: "https://bit.ly/know-jaynil",
    sourceLink: "https://github.com/Jaynil1611/Do_You_Know_Me",
  },
  prevPortfolio: {
    imageLink: Portfolio,
    title: "PREVIOUS PERSONAL PORTFOLIO",
    content:
      "Portfolio website showcases my skills, work & technolgies I've worked with. Also, it displays all the projects developed by me. Check it out below.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://jaynil-gaglani.netlify.app/",
    sourceLink: "https://github.com/Jaynil1611/Portfolio-Website",
  },
  googlePlayStudy: {
    imageLink: Apps,
    title: "GOOGLE PLAY STORE STUDY",
    content:
      "This project gives valuable business insights from the google play store app launch study.",
    tags: ["Python", "Machine Learning", "Data Analytics"],
    sourceLink:
      "https://github.com/Jaynil1611/Google-Play-Store-App-Launch-Study",
  },
  onlineAuction: {
    imageLink: Auction,
    title: "ONLINE AUCTION",
    content:
      "Online Auction Site allows buyers and sellers to come together for buying or selling various items in real time.",
    tags: ["HTML", "CSS", "JavaScript", "Angular"],
    sourceLink: "https://github.com/Jaynil1611/AuctionPro",
  },
  pathFinding: {
    imageLink: Maze,
    title: "PATH FINDING: MAZE",
    content: (
      <>
        Comparing <em>Breadth First Search</em> and <em>A star</em> algorithms
        to find the shortest path in a 2D maze.
      </>
    ),
    tags: ["Java", "Canvas", "Graph Algorithms"],
    sourceLink: "https://github.com/Jaynil1611/ADS-PRO",
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
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "Java",
    "C",
    "Golang",
  ],
  Libraries: [
    "React",
    "Redux",
    "React Testing Library",
    "JWT",
    "Jest",
    "JUnit 5",
  ],
  Frameworks: [
    "Angular",
    "Express",
    "NextJS",
    "Micronaut",
    "Chakra UI",
    "Tailwind CSS",
    "Mongoose",
  ],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  Technologies: ["NodeJS", "Git", "Machine Learning"],
};
