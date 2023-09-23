"use client";
import { styles } from "@/app/style";
import React from "react";
import { fadeIn, staggerContainer, textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { keyAttributes } from "@/app/constants/assets";
import SectionWrapper from "@/app/hoc/SectionWrapper";
import { attributes } from "@/app/constants";

const KeyAttributes = () => {
  const [showMore, setShowMore] = React.useState(false);
  const attributesToShow = showMore ? attributes : attributes.slice(0, 3);
  return (
    <div className="min-h-[50vh] text-left grid gap-9 lg:grid-cols-2 items-center">
      <div className="relative w-full h-[300px] lg:h-[500px]">
        <Image
          src={keyAttributes}
          layout="fill"
          objectFit="cover"
          alt="globe"
        />
      </div>
      <div>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>
            Judging Criteria{" "}
            <span className="text-primary block">Key attributes</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("top", "tween", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="grid gap-y-3 place-items-start"
        >
          {attributesToShow.map((attribute) => (
            <div
              key={attribute.title}
              className={`${styles.contentText} flex flex-col lg:inline-flex gap-x-2 flex-wrap`}
            >
              <span className="text-[#FF26B9] text-center lg:text-left font-semibold">
                {attribute.title}:
              </span>
              {attribute.description}
            </div>
          ))}

          {attributes.length > 4 && (
            <div className="flex justify-center lg:justify-start w-full">
              <motion.button
                onClick={() => setShowMore(!showMore)}
                className={`${styles.buttonStyle} mt-7`}
                initial={false}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
              >
                {showMore ? "Show Less" : "View More"}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(KeyAttributes, "key-attributes");
