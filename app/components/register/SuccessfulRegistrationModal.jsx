"use client";
import React from "react";
import { Button } from "../shared/Button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const SuccessfulRegistrationModal = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 bg-forgroud/90 grid place-content-center p-7">
      <div className="border border-primary/60 rounded-lg grid items-center w-full max-w-lg min-h-[200px] px-5 py-[40px]">
        <div className="relative flex justify-center items-center">
          <div className="success man z-[1]"></div>
          <motion.div
            variants={{
              hidden: {
                opacity: 1,
              },
              show: {
                opacity: 1,
                rotate: [0, -10, 10, -10, 10, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              },
            }}
            // className="success icon"
          >
            <div className="success icon"></div>
          </motion.div>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-lg lg:text-2xl font-semibold text-center">
            <span className="block text-green-400 text-3xl">
              Congratulations
            </span>{" "}
            you have successfully Registered!
          </h4>
          <p className="text-center mt-4 max-w-sm">
            Yes, it was easy and you did it! check your mail box for next step
          </p>
          <div className="mt-7">
            <Button type="button" onClick={() => router.back()}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulRegistrationModal;
