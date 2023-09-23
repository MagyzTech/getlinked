import { Address, ContactForm } from "@/app/components/contact";
import { Stars } from "@/app/components/home/abstract";
import { styles } from "@/app/style";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description: "Igniting a Revolution in HR Innovation",
};

const page = () => {
  return (
    <>
      <div
        className={`${styles.padding} w-full items-center max-w-7xl mx-auto  relative grid lg:grid-cols-2 gap-9  min-h-[50vh]`}
      >
        <Address />
        <ContactForm />
      </div>
    </>
  );
};

export default page;
