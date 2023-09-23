import { globe } from "@/app/constants/assets";
import Image from "next/image";
import React from "react";

const TechCanvas = () => {
  return (
    <div className="relative w-full h-full">
      <div className="person absolute w-full h-full z-[0]"></div>

      <div className="w-full h-full relative z-[1] mix-blend-hard-light">
        <Image src={globe} layout="fill" objectFit="contain" alt="globe" />
      </div>
    </div>
  );
};

export default TechCanvas;
