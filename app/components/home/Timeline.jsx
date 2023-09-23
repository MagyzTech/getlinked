"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { timeline } from "@/app/constants";
import SectionWrapper from "@/app/hoc/SectionWrapper";
import { styles } from "@/app/style";
import { textVariant } from "@/app/utils/motion";

const TimelineCard = ({ timeline, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#21124a",
        color: "#fff",
        visibility: "visible",
        borderRadius: "10px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #D434FE" }}
      date={timeline.date}
      iconStyle={{
        background: "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
        visibility: "visible",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full font-bold text-lg">
          {index}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{timeline.title}</h3>
      </div>

      <p className="text-[15px] text-white/70">{timeline.description}</p>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mb-5 flex flex-col items-center text-enter"
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>Timeline</h2>
        <p className="text-center max-w-[400px]">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={true} lineColor="#D434FE">
          {timeline.map((timeline, index) => (
            <TimelineCard
              key={`timeline-${index}`}
              timeline={timeline}
              index={index + 1}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Timeline, "timeline");
