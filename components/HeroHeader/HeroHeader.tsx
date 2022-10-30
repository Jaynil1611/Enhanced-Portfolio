import Image from "next/image";
import React from "react";
import { HeroImage } from "../../assets/index";
import { headerContentList } from "../../common/data";
import { Button, HeaderContent } from "../index";

const HeroHeader = () => {
  return (
    <div className="pt-4 mb-24">
      <h1 className="text-4xl lg:header__title font-extrabold mb-4">
        Hi!{" "}
        <Image
          src={HeroImage}
          width="32px"
          height="32px"
          loading="eager"
          alt="hero"
        />{" "}
        I am Jaynil Gaglani.
      </h1>
      <HeaderContent contentList={headerContentList} />
      <div className="flex justify-center">
        <Button href="/about">more about me</Button>
      </div>
    </div>
  );
};

export default HeroHeader;
