"use client";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/app/style";
import { Stroke } from "@/app/constants";
import Image from "next/image";
import { whiteStar } from "@/app/constants/assets";
import { Button } from "../shared/Button";
import Link from "next/link";
import { CountDown, TechCanvas } from "./abstract";

const Hero = () => {
  return (
    <section
      className={`relative w-full grid grid-rows-[auto,1fr] lg:block min-h-[90vh] mx-auto`}
    >
      <div
        className={`relative z-[1] max-w-7xl mx-auto ${styles.paddingX} lg:grid lg:grid-rows-[auto,1fr] gap-7 lg:min-h-full`}
      >
        <div className="w-full flex justify-end relative py-5 mt-6">
          <span className="absolute left-0 bottom-[-40px] lg:bottom-[-10px]">
            <Image
              width={"auto"}
              className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
              height={"auto"}
              src={whiteStar}
              alt="star"
            />
          </span>
          <h3 className="text-white/70 font-bold font-italic text-[20px] sm:text-[24px] lg:text-[32px]">
            Igniting a Revolution in HR Innovation
          </h3>
          <div className="absolute bottom-0 right-0">
            <span className="relative">
              {<Stroke width={"220"} height={"17"} />}
            </span>
          </div>
        </div>
        <div className="grid  w-full max-w-[600px] relative">
          <div className="bulb hidden lg:block particles"></div>
          <div className="blast particles"></div>
          <motion.div
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="chain particles"
          ></motion.div>
          <div className="pt-[40px]">
            <div className="relative">
              <h1 className={`${styles.heroHeadText} text-white/90`}>
                getlinked Tech Hackathon{" "}
                <span className="text-primary">1.0</span>
              </h1>
              <p className={`${styles.heroSubText} mt-4 text-white-100`}>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize.
              </p>

              <div className="flex flex-col max-w-[170px] mt-[40px]">
                <Button type="button">Register</Button>
              </div>
            </div>

            <CountDown />
          </div>
        </div>
      </div>
      <div className="lg:absolute h-[300px] lg:h-full lg:w-[50vw] lg:right-0 w-full bottom-0 z-0 lg:pt-[150px]">
        <div className="absolute inset-0 overlay w-full h-full z-[1]"></div>
        <TechCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-[40px] w-full flex justify-center items-center z-10">
        <Link href="/#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white/70 mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
