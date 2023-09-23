"use client";
import React from "react";
import { motion } from "framer-motion";

import SectionWrapper from "@/app/hoc/SectionWrapper";
import { textVariant } from "@/app/utils/motion";
import { styles } from "@/app/style";
import { checkIcon } from "@/app/constants";
import { Button } from "../shared/Button";
import Image from "next/image";
import { security } from "@/app/constants/assets";

const Privacy = () => {
  return (
    <div className="min-h-[50vh] grid lg:grid-cols-2 gap-9 items-center">
      <div className="relative">
        <motion.div variants={textVariant()} className="mb-5">
          <h2 className={`${styles.sectionHeadText}`}>
            Privacy Policy and
            <span className="block text-primary">Terms</span>
          </h2>
          <p className="text-sm text-white/60 max-w-[400px] my-7 text-center lg:text-left">
            Last updated on September 12, 2023
          </p>
          <p className="max-w-[400px] my-6 text-center lg:text-left">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </motion.div>
        <div className="border border-primary/70 rounded-md p-5 lg:p-[40px]">
          <p className="mb-[40px]">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <p className="text-primary font-semibold">Licensing Policy</p>
          <p className="mb-5">Here are terms of our Standard License:</p>
          <div>
            <p className="flex gap-x-3 mb-4">
              <span>{checkIcon}</span>
              <span>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </span>
            </p>
            <p className="flex gap-x-3 mb-8">
              <span>{checkIcon}</span>
              <span>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </span>
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute w-full h-[70%] top-0 inset-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="530"
            // height="648"
            className="w-full h-full lg:h-[650px]"
            viewBox="0 0 530 648"
            fill="none"
          >
            <path
              d="M530 294.545C530 458.018 416.933 610.887 265 648C113.067 610.887 0 458.018 0 294.545V117.818L265 0L530 117.818V294.545ZM265 589.091C375.417 559.636 471.111 428.269 471.111 301.025V156.109L265 64.2109L58.8889 156.109V301.025C58.8889 428.269 154.583 559.636 265 589.091ZM347.444 294.545V250.364C347.444 209.127 306.222 176.727 265 176.727C223.778 176.727 182.556 209.127 182.556 250.364V294.545C164.889 294.545 147.222 312.218 147.222 329.891V432.982C147.222 453.6 164.889 471.273 182.556 471.273H344.5C365.111 471.273 382.778 453.6 382.778 435.927V332.836C382.778 312.218 365.111 294.545 347.444 294.545ZM309.167 294.545H220.833V250.364C220.833 226.8 241.444 212.073 265 212.073C288.556 212.073 309.167 226.8 309.167 250.364V294.545Z"
              fill="url(#paint0_linear_110_134)"
              fillOpacity="0.14"
            />
            <defs>
              <linearGradient
                id="paint0_linear_110_134"
                x1="265"
                y1="0"
                x2="265"
                y2="648"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#903AFF" />
                <stop offset="1" stopColor="#FF26B9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <motion.div
          animate={{
            y: [0, 44, 0],
            // scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="relative w-full h-[300px] lg:h-[500px]"
        >
          <Image src={security} layout="fill" objectFit="contain" alt="globe" />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Privacy, "privacy");
