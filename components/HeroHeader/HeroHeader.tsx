import Image from "next/image";
import React from "react";
import { HeroImage } from "../../assets/index";
import { Button, LinkButton, HeaderContent } from "../index";

const contentList = [
  "I'm a Frontend Engineer and a B.Tech graduate in Information Technology from Mumbai, India.",
  "I've been programming for more than 3 years and have developed my passion towards frontend development.",
  <>
    I&apos;ve developed many full-stack{" "}
    <LinkButton href="/projects" target="">
      projects
    </LinkButton>{" "}
    focusing on responsiveness, accessibility and performance.
  </>,
  <>
    Check out my <LinkButton href="/blogs">blogs</LinkButton> where I post
    tutorials and articles that spark my curiosity.
  </>,
];

const HeroHeader = () => {
  return (
    <div className="pt-4 mb-24">
      <h1 className="text-4xl lg:header__title font-extrabold mb-4">
        Hi! <Image src={HeroImage} width="32px" height="32px" alt="hero" /> I am
        Jaynil Gaglani.
      </h1>
      <p className="text-gray-500 mb-6">
        <HeaderContent contentList={contentList} />
      </p>
      <div className="flex justify-center">
        <Button href="/about">more about me</Button>
      </div>
    </div>
  );
};

export default HeroHeader;
