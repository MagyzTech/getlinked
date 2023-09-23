"use client";
import { styles } from "@/app/style";
import React from "react";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { rules } from "@/app/constants/assets";
import SectionWrapper from "@/app/hoc/SectionWrapper";

const Rules = () => {
  return (
    <>
      <div className="min-h-[50vh] text-left grid gap-9 lg:grid-cols-2 items-center relative z-[1]">
        <div>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>
              Rules <span className="text-primary block">and Guidlines</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={styles.contentText}
          >
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether{" you'"}re a coding
            genius, a design maverick, or a concept wizard, {"you'll"} have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, {"that's"} what {"we're"} all
            about!
          </motion.p>
        </div>
        <div className="relative w-full h-[300px] lg:h-[500px]">
          <Image src={rules} layout="fill" objectFit="cover" alt="globe" />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Rules, "rules");
