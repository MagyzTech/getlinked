"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-full relative py-2 border-b border-white/40`}>
      <div
        className="w-full flex items-start cursor-pointer select-none pb-2"
        onClick={toggleOpen}
      >
        <h3 className="flex-1 text-lg mb-0">{question}</h3>
        <span className="text-[40px] pl-4 leading-[16px]">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
        className={`${isOpen ? "open" : ""}`}
      >
        <p className="pb-4 text-white">{answer}</p>
      </motion.div>
    </div>
  );
};

export default FAQItem;
