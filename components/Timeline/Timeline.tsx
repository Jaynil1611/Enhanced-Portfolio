import Image from "next/image";
import React from "react";
import { timelineImageURL } from "../../common/constants";

interface TimelineData {
  date?: string;
  company?: string;
  title: string;
  content: string;
}

interface TimelineProps {
  timeline: Array<TimelineData>;
}

const Timeline = ({ timeline }: TimelineProps) => {
  return (
    <div className="antialiased p-6 bg-gray-100 text-gray-800 mb-28">
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 inset-0 left-22 bg-white h-full w-2 shadow-md md:mx-auto md:left-0 md:right:0"></div>
        {timeline?.map((timeline, index) => {
          const { date, company, title, content } = timeline;
          const isIndexOdd = index % 2 !== 0;
          return (
            <div key={date} className="relative z-10">
              <div className="timeline__img">
                <div className="p-5">
                  <Image
                    src={timelineImageURL}
                    alt=""
                    width="96px"
                    height="96px"
                  />
                </div>
              </div>
              <div
                className={`timeline__container ${
                  isIndexOdd ? "timeline__container--left" : ""
                }`}
              >
                <div
                  className={`timeline__pointer ${
                    isIndexOdd ? "timeline__pointer--left" : ""
                  }`}
                ></div>
                <div className="bg-white rounded-md shadow-md p-6">
                  <span className="font-bold text-indigo-600 text-sm tracking-wide">
                    {date}
                  </span>
                  <h1 className="text-2xl font-bold pt-1">{company}</h1>
                  <p className="text-gray-500 py-1">{title}</p>
                  <p className="pt-1">{content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
