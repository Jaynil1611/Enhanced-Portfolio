/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <div className="antialiased p-6 bg-gray-100 text-gray-800 mb-48">
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 inset-0 left-22 bg-white h-full w-2 shadow-md md:mx-auto md:left-0 md:right:0"></div>
        <div className="relative z-10">
          <div className="timeline__img">
            <img
              src="https://img.icons8.com/ios-filled/100/undefined/briefcase.png"
              alt=""
              className="w-24 h-24 p-2"
            />
          </div>
          <div className="timeline__container">
            <div className="timeline__pointer"></div>
            <div className="bg-white rounded-md shadow-md p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              nesciunt alias. Cumque velit sequi deleniti blanditiis nesciunt
              incidunt accusamus tempore mollitia illo laudantium eveniet
              veritatis, eum delectus asperiores, dolorem quibusdam?
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="timeline__img">
            <img
              src="https://img.icons8.com/ios-filled/100/undefined/briefcase.png"
              alt=""
              className="w-24 h-24 p-2"
            />
          </div>
          <div className="timeline__container timeline__container--left">
            <div className="timeline__pointer timeline__pointer--left"></div>
            <div className="bg-white rounded-md shadow-md p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              nesciunt alias. Cumque velit sequi deleniti blanditiis nesciunt
              incidunt accusamus tempore mollitia illo laudantium eveniet
              veritatis, eum delectus asperiores, dolorem quibusdam?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
