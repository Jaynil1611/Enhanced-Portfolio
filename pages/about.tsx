import Image from "next/image";
import React from "react";
import { Profile } from "../assets";
import { skillsData, timeLineData } from "../common/data";
import { SectionHeader, Timeline } from "../components";
import Layout from "../components/Layout";
import Skills from "../components/Skills/Skills";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col-reverse flex-1 items-center md:flex-row">
        <div className="w-full p-4 md:w-full md:p-0">
          <Image
            src={Profile}
            width="100%"
            height="100px"
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
            alt="logo"
          />
        </div>
        <header className="md:ml-8 flex flex-col p-4">
          <h1 className="header__title font-bold pb-4">
            Hello, I&apos;m Jaynil Gaglani
          </h1>
          <p className="lg:text-xl text-gray-500">
            I want to take my passion, education, and experience to develop
            real-world web apps. I&apos;m extremely motivated to constantly
            develop my skills and grow professionally. Apart from coding, I love
            listening to electronic music and play football.
          </p>
        </header>
      </div>
      <div className="flex flex-col mt-8">
        <SectionHeader
          heading="Skills"
          description="I am familiar with many technologies in the field of Web Development , Machine Learning & Data Analaytics."
        />
        <Skills skillsData={skillsData} />
      </div>
      <SectionHeader heading="Education" description="I have done B.Tech" />
      <Timeline timeline={timeLineData.education} />
    </Layout>
  );
};

export default About;
