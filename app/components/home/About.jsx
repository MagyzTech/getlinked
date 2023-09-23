"use client";
import SectionWrapper from "@/app/hoc/SectionWrapper";
import { styles } from "@/app/style";
import React from "react";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { idea } from "@/app/constants/assets";

const About = () => {
  return (
    <div className="min-h-[50vh] text-left grid gap-9 lg:grid-cols-2 items-center">
      <div className="relative w-full  h-[300px] lg:h-[400px]">
        <Image src={idea} layout="fill" objectFit="contain" alt="globe" />
      </div>
      <div>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>
            Introduction to getlinked{" "}
            <span className="text-primary block">tech Hackathon 1.0.</span>
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={styles.contentText}
        >
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether {"you're"} a coding
          genius, a design maverick, or a concept wizard, {"you'll"} have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, {"that's"} what {"we're"} all about! life!
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
