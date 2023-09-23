"use client";
import { styles } from "@/app/style";
import React from "react";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { faq } from "@/app/constants/assets";
import SectionWrapper from "@/app/hoc/SectionWrapper";
import { faqs } from "@/app/constants";
import { FAQItem } from "./abstract";

const Faqs = () => {
  return (
    <div className="min-h-[50vh] text-left grid gap-9 lg:grid-cols-2 items-center">
      <div>
        <motion.div variants={textVariant()} className="mb-5">
          <h2 className={styles.sectionHeadText}>
            Frequently Ask
            <span className="text-primary block">Questions</span>
          </h2>
          <p className="text-center lg:text-left">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("top", "tween", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="grid gap-y-3 place-items-start mt-[40px]"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </motion.div>
      </div>
      <div>
        <span className="question-mark question-1">?</span>
        <span className="question-mark question-2">?</span>
        <span className="question-mark question-1 last">?</span>
        <motion.div
          animate={{
            y: [0, 34, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="relative w-full h-[300px] lg:h-[500px]"
        >
          <Image src={faq} layout="fill" objectFit="cover" alt="globe" />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Faqs, "faqs");
