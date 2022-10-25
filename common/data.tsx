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
  Dietgram,
} from "../assets/index";

export const timeLineData = {
  experience: [
    {
      date: "September 2021 - Present",
      company: "Razorpay",
      title: "Frontend Engineer",
      content: (
        <>
          Owned & delivered <b>Vendor Portal</b> project with team. Developed UI
          & wrote tests covering all the edge cases.
          <br /> Increased testing coverage of the codebase to <b>40%</b> by
          writing unit & integration tests using <b>RTL</b>.
        </>
      ),
      timelineImageURL: experienceImageURL,
    },
    {
      date: "May 2020 - July 2020",
      company: "Credit Suisse",
      title: "Technology Analyst Intern",
      content: (
        <>
          Developed a User Interface for an Online Test Assessment Platform
          using <b>ReactJS</b> & <b>Redux</b>. <br />
          Written unit test cases using Jest, Enzyme & JUnit 5, achieved more
          than <b>80%</b> overall code coverage
        </>
      ),
      timelineImageURL: experienceImageURL,
    },
    {
      date: "June 2019 - August 2019",
      company: "Eatabl",
      title: "Angular Developer",
      content: (
        <>
          Eatabl is a food-tech startup based in Mumbai. My work was to design a
          website using <b>Angular 6</b> with all functionalities and store the
          data into <b>Firebase</b>.
        </>
      ),
      timelineImageURL: experienceImageURL,
    },
  ],
  education: [
    {
      date: "2017 - 2021",
      title: "Bachelor of Technology, Information Technology",
      content: (
        <>
          Grade: CGPA: <b>9.64</b> <br /> Completed my B.Tech in I.T.
          Engineering from Sardar Patel Institute of Technology, Mumbai.
        </>
      ),

      timelineImageURL: educationImageURL,
    },
    {
      date: "2015 - 2017",
      title: "HSC, Science",
      content: (
        <>
          Grade: <b>92 %</b> <br /> Completed my HSC Science from Thakur College
          of Science And Commerce, Mumbai.
        </>
      ),
      timelineImageURL: educationImageURL,
    },
    {
      date: "2015",
      title: "SSC",
      content: (
        <>
          Grade: <b>96.8 %</b> <br /> Completed schooling from St.Francis
          D&apos;Assisi High School, Mumbai.
        </>
      ),
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
      "JavaScript",
      "React",
      "Redux",
      "Chakra UI",
      "Express",
      "Mongoose",
      "MongoDB",
      "NodeJS",
      "HTML",
      "CSS",
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
      "JavaScript",
      "React",
      "Mind UI",
      "Express",
      "Mongoose",
      "MongoDB",
      "NodeJS",
      "JWT",
      "HTML",
      "CSS",
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
      "JavaScript",
      "React",
      "Mind UI",
      "Express",
      "Mongoose",
      "MongoDB",
      "JWT",
      "NodeJS",
      "HTML",
      "CSS",
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
      "JavaScript",
      "TypeScript",
      "React",
      "Chakra UI",
      "Express",
      "Mongoose",
      "MongoDB",
      "JWT",
      "HTML",
      "CSS",
      "NodeJS",
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
