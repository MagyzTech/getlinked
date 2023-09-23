"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../style";
import Line from "../components/shared/Line";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <>
        <Line />
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl w-full mx-auto relative z-0`}
        >
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>

          <Component />
        </motion.section>
      </>
    );
  };

export default SectionWrapper;
