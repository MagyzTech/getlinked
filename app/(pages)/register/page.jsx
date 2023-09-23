import { RegisterForm } from "@/app/components/register";
import { manSiting } from "@/app/constants/assets";
import { styles } from "@/app/style";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Registration - GetLinked",
  description: "Create your free account",
};

const page = () => {
  return (
    <>
      <div
        className={`${styles.padding} w-full items-center max-w-7xl mx-auto  relative grid lg:grid-cols-[2fr,3fr] gap-9  min-h-[50vh]`}
      >
        <div className="w-full h-[300px] lg:h-full relative">
          <Image
            src={manSiting}
            alt="man-thumbs-up"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <RegisterForm />
      </div>
    </>
  );
};

export default page;
