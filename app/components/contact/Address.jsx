import { socialLinks } from "@/app/constants";
import Link from "next/link";
import React from "react";

const Address = () => {
  return (
    <div className="grid gap-9">
      <h1 className="text-primary font-bold text-lg md:text-[30px]">
        Get in touch
      </h1>
      <p>Contact Information</p>

      <div className="grid gap-9 text-white">
        <p>
          {" "}
          <span className="block">27,Alara Street</span>{" "}
          <span className="block">Yaba 100012</span> Lagos State
        </p>
        <p>Call Us : 07067981819</p>
        <p>We are open from Monday-Friday 08:00am - 05:00pm</p>

        <div className="flex flex-col gap-y-3">
          <p className="text-primary">Share on</p>
          <div className="flex items-center gap-x-3">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.url}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
