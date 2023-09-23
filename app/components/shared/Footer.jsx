"use client";
import { styles } from "@/app/style";
import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { socialLinks } from "@/app/constants";

const Footer = () => {
  return (
    <div className="bg-[#100B20]">
      <div
        className={`${styles.paddingX} ${styles.paddingY} max-w-7xl mx-auto grid lg:grid-cols-2 gap-9`}
      >
        <div className="flex flex-col">
          <Logo size={"small"} />
          <p className="mt-5">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of orgaizations with the aim of showcasing
            young and talenteed individuals in the field of technology
          </p>
          <div className="flex gap-x-3 mt-[40px]">
            <Link
              href="/terms"
              className="text-white/60 transition-colors hover:text-primary text-sm"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="text-white/60 transition-colors hover:text-primary text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h4 className="text-primary font-semibold">Usefull Links</h4>
            <div className="flex flex-col gap-y-4 mt-5">
              <Link href="/#about">Overview</Link>
              <Link href="/#timeline">Timeline</Link>
              <Link href="/#faqs">FAQs</Link>
              <Link href="/register">Register</Link>

              <div className="flex items-center gap-x-5 mt-[20px]">
                <span className="text-primary">Follow Us</span>
                {socialLinks.map((link, index) => (
                  <Link key={index} href={link.url}>
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-primary font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-y-4 mt-5">
              <p className="flex space-x-5">
                <span className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z"
                      fill="#F8F8F8"
                    />
                    <path
                      d="M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z"
                      fill="#F8F8F8"
                    />
                  </svg>
                </span>
                <span>+234 6707653444</span>
              </p>
              <p className="flex space-x-5">
                <span className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                  >
                    <path
                      d="M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z"
                      fill="#F8F8F8"
                    />
                  </svg>
                </span>
                <span>
                  27,Alara Street <br /> Yaba 100012 <br /> Lagos State
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm pb-[50px] pt-[30px] border-t border-borderBrand/10">
        All rights reserved. © getlinked Ltd.
      </p>
    </div>
  );
};

export default Footer;
