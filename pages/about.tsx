import Image from "next/image";
import React from "react";
import { skillsData } from "../common/data";
import Layout from "../components/Layout";
import Skills from "../components/Skills/Skills";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col-reverse flex-1 md:flex-row">
        <div className="w-full p-4 md:w-full md:p-0">
          <Image
            src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
            width="100%"
            height="75px"
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <header className="md:ml-8 flex flex-col p-4">
          <h1 className="text-3xl font-bold py-4">Hello I am Creator</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            assumenda, illum architecto numquam non itaque provident voluptate,
            beatae, quia debitis vitae quasi sapiente animi eius dolorem dolores
            et deleniti! Ullam!
          </p>
        </header>
      </div>
      <div className="flex flex-col">
        <Skills skillsData={skillsData} />
      </div>
    </Layout>
  );
};

export default About;
