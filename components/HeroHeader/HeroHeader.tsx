import Image from "next/image";
import React from "react";
import HeroImage from "../../assets/waving-hand.png";
import LinkButton from "../Buttons/LinkButton";

const HeroHeader = () => {
  return (
    <div className="pt-4 mb-24">
      <h1 className="text-4xl font-extrabold mb-8">
        Hi! <Image src={HeroImage} width="32px" height="32px" alt="hero" /> I am
        Jaynil Gaglani.
      </h1>
      <p className="text-gray-500">
        I want to take my passion, education, and experience to develop
        websites, webapps and mobile applications. Check out my{" "}
        <LinkButton href="/projects" target="">
          side-projects
        </LinkButton>{" "}
        and my blog where I post tutorials and things that spark my curiosity.
      </p>
    </div>
  );
};

export default HeroHeader;
