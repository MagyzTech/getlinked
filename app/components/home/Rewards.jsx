"use client";
import React from "react";
import { motion } from "framer-motion";

import SectionWrapper from "@/app/hoc/SectionWrapper";
import { styles } from "@/app/style";
import { fadeIn, textVariant } from "@/app/utils/motion";
import Image from "next/image";
import {
  bronzeMedal,
  goldMedal,
  silverMedal,
  trophy,
} from "@/app/constants/assets";
import { Stars } from "./abstract";

const Rewards = () => {
  return (
    <>
      <Stars />
      <div className="min-h-[50vh] text-left grid gap-9 lg:grid-cols-[2fr,3fr] items-center">
        <div>
          <motion.div
            animate={{
              // y: [0, 34, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="relative w-full h-[300px] lg:h-[400px]"
          >
            <Image src={trophy} layout="fill" objectFit="contain" alt="globe" />
          </motion.div>
        </div>
        <div>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>
              Prizes and
              <span className="text-primary block">Rewards</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={styles.contentText}
          >
            Highlight of tthe prizess or rewards for winners and participants.
          </motion.p>

          <div className="grid grid-cols-3 gap-4 mt-[140px]">
            <div className="relative">
              <div className={styles.glassCard}>
                <div className="absolute lg:w-[100px] lg:h-[100px] lg:top-[-50px] w-[80px] h-[80px] top-[-40px] left-1/2 translate-x-[-50%]">
                  <Image
                    src={silverMedal}
                    layout="fill"
                    objectFit="contain"
                    alt="silver"
                  />
                </div>
                <div className="relative flex flex-col items-center gap-y-2 text-center lg:mt-[100px] lg:px-[40px] mt-[50px] px-[20px]">
                  <h4 className="text-lg md:text-[28px] text-white font-bold">
                    2nd <span className="text-sm block">Runner</span>
                  </h4>
                  <h3 className="text-primary font-bold text-[16px] md:text-[30px]">
                    N300,000
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className={styles.glassCardWinner}>
                <motion.div
                  initial={{ opacity: 1, translateX: "-50%" }}
                  animate={{
                    opacity: 1,
                    rotate: [0, -10, 10, -10, 10, 0],
                    transition: {
                      duration: 1.5,
                      repeat: 2,
                      repeatType: "mirror",
                    },
                  }}
                  className="absolute lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] lg:bottom-[180px] bottom-[130px] left-1/2 transform -translate-x-1/2"
                  style={{ transform: "translateX(-50%) !important" }}
                >
                  <Image
                    src={goldMedal}
                    layout="fill"
                    objectFit="contain"
                    alt="gold"
                  />
                </motion.div>

                <div className="relative flex flex-col items-center gap-y-2 text-center lg:mt-[150px] lg:px-[40px] mt-[70px] px-[20px] ">
                  <h4 className="text-lg md:text-[28px] text-white font-bold">
                    1st <span className="text-sm block">Runner</span>
                  </h4>
                  <h3 className="text-[#903AFF] font-bold text-[14px] md:text-[30px]">
                    N4000,000
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className={styles.glassCard}>
                <div className="absolute lg:w-[100px] lg:h-[100px] lg:top-[-50px] w-[80px] h-[80px] top-[-40px] left-1/2 translate-x-[-50%]">
                  <Image
                    src={bronzeMedal}
                    layout="fill"
                    objectFit="contain"
                    alt="bronze"
                  />
                </div>
                <div className="relative flex flex-col items-center gap-y-2 text-center lg:mt-[100px] lg:px-[40px] mt-[50px] px-[20px]">
                  <h4 className="text-lg md:text-[28px] text-white font-bold">
                    3nd <span className="text-sm block">Runner</span>
                  </h4>
                  <h3 className="text-primary font-bold text-[16px] md:text-[30px]">
                    N150,000
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Rewards, "rewards");
