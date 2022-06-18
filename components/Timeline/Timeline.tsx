import Image from "next/image";
import React from "react";

interface TimelineProps {
  date: string;
  title: string;
  content: string;
}

const Timeline = ({ content, date, title }: TimelineProps) => {
  return (
    <div className="antialiased p-6 bg-gray-100 text-gray-800 mb-48">
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 inset-0 left-22 bg-white h-full w-2 shadow-md md:mx-auto md:left-0 md:right:0"></div>
        <div className="relative z-10">
          <div className="timeline__img">
            <div className="p-5">
              <Image
                src="https://img.icons8.com/ios-filled/100/undefined/briefcase.png"
                alt=""
                width="96px"
                height="96px"
              />
            </div>
          </div>
          <div className="timeline__container">
            <div className="timeline__pointer"></div>
            <div className="bg-white rounded-md shadow-md p-6">
              <span className="font-bold text-indigo-600 text-sm tracking-wide">
                Jan 2021
              </span>
              <h1 className="text-2xl font-bold pt-1">An amazing travel</h1>
              <p className="pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                nesciunt alias. Cumque velit sequi deleniti blanditiis nesciunt
                incidunt accusamus tempore mollitia illo laudantium eveniet
                veritatis, eum delectus asperiores, dolorem quibusdam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
