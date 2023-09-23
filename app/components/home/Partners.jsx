"use client";
import SectionWrapper from "@/app/hoc/SectionWrapper";
import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/app/utils/motion";
import { styles } from "@/app/style";
import Image from "next/image";
import {
  libertyLogoOne,
  libertyLogoTwo,
  whispersms,
  winWiseLogo,
} from "@/app/constants/assets";

const Partners = () => {
  return (
    <div className="min-h-[50vh] text-center grid gap-9 items-center">
      <motion.div
        variants={textVariant()}
        className="mb-5 flex flex-col items-center text-center"
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Partners and Sponsors
        </h2>
        <p className="text-center max-w-[400px]">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </motion.div>

      <div className="border rounded-lg border-borderBrand/10 lg:p-[40px] p-4 relative">
        <div className="absolute w-[75%] lg:h-[2px] h-[1px] bg-primary top-1/2 translate-y-[-50%] z-[1] left-1/2 translate-x-[-50%]"></div>
        <div className="w-full grid grid-cols-3 gap-5">
          <div
            className={`border-r-[1px] lg:border-r-[2px] border-primary ${styles.partnerWrapper}`}
          >
            <div className={styles.partnerLogo}>
              <Image
                src={libertyLogoOne}
                alt="globe"
                objectFit="contain"
                layout="fit"
              />
            </div>
          </div>
          <div
            className={`border-r-[1px] lg:border-r-[2px]  border-primary ${styles.partnerWrapper}`}
          >
            <div className={styles.partnerLogo}>
              <Image
                src={libertyLogoTwo}
                alt="globe"
                objectFit="contain"
                layout="fit"
              />
            </div>
          </div>
          <div className={styles.partnerWrapper}>
            <div className={styles.partnerLogo}>
              <Image
                src={winWiseLogo}
                alt="globe"
                objectFit="contain"
                layout="fit"
              />
            </div>
          </div>
          <div
            className={`border-r-[1px] lg:border-r-[2px] border-primary ${styles.partnerWrapper}`}
          >
            <div className={styles.partnerLogo}>
              <Image
                src={whispersms}
                alt="globe"
                objectFit="contain"
                layout="fit"
              />
            </div>
          </div>
          <div
            className={`border-r-[1px] lg:border-r-[2px] border-primary ${styles.partnerWrapper}`}
          >
            <div className={styles.partnerLogo}>
              <div>
                <h4 className="font-semibold text-[16px] lg:text-[50px]">
                  Pay
                  <span className="text-[#00A3FF]">box</span>
                </h4>
              </div>
            </div>
          </div>
          <div className={`${styles.partnerWrapper}`}>
            <div className={styles.partnerLogo}>
              <div>
                <h4 className="text-[16px] lg:text-[50px] font-serif">
                  Vuzual
                  <span className="text-red-600">Plus</span>
                </h4>
                <p className="text-white text-[6px] lg:text-sm flex justify-end">
                  Design Studios
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Partners, "partners");
