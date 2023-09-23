"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { Button } from "./Button";
import { Logo } from "./Logo";
import { styles } from "@/app/style";
import useDeviceSize from "@/app/hooks/useDeviceSize";
import { closeIcon, menuButton, navLinks } from "@/app/constants";
import Link from "next/link";
import { fadeIn, fadeInFromTop } from "@/app/utils/motion";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { isMobile, isTablet, isDesktop } = useDeviceSize();
  const [mobile, setMobile] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState("");
  useEffect(() => {
    setMobile(isTablet || isMobile);
  }, [isTablet, isMobile]);

  // mobile menu navigation
  const MobileNav = () => {
    return (
      <div className="lg:hidden fixed top-0 w-full z-10 pb-[50px] shadow-lg inset-0">
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 w-full h-screen z-0"
        ></div>

        <motion.div
          variants={fadeInFromTop(1, 0.75)}
          className="relative z-[1] w-full bg-forgroud pb-[50px]"
        >
          <div className="w-full">
            <div className="mb-[40px] flex justify-end px-[20px]">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="border border-primary rounded-full w-[40px] h-[40px] flex items-center justify-center transition-colors hover:bg-primary/20 mt-[20px]"
              >
                {closeIcon}
              </button>
            </div>
            <ul className="flex flex-col items-start space-y-2">
              {navLinks.map((link) => (
                <li key={link.id} className="w-full">
                  <Link
                    onClick={() => setMenuOpen(false)}
                    className={`${styles.linkStyle} text-[18px] w-full flex p-4 transition-colors hover:bg-primary/5`}
                    href={`${
                      link.type === "reference" ? `/#${link.id}` : `/${link.id}`
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="px-[20px] w-full">
                <div className="mt-[40px] flex flex-col max-w-[400px]">
                  <Button
                    onClick={() => {
                      setMenuOpen(false);
                      router.push("/register");
                    }}
                    type="button"
                  >
                    Register
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    );
  };

  // desktop menu navigation
  const DesktopNav = () => {
    return (
      <ul className="hidden lg:flex items-center space-x-[40px]  ">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              className={`${styles.linkStyle} ${
                active === link.title ? styles.activelinkStyle : "text-white"
              } text-[16px]`}
              href={`${
                link.type === "reference" ? `/#${link.id}` : `/${link.id}`
              }`}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li>
          <div className="ml-[40px]">
            <Button
              onClick={() => {
                setMenuOpen(false);
                router.push("/register");
              }}
              type="button"
            >
              Register
            </Button>
          </div>
        </li>
      </ul>
    );
  };

  return (
    <div className="border-b border-borderBrand/10 sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-forgroud/95 supports-backdrop-blur:bg-forgroud/60 dark:bg-transparent">
      <div className={`max-w-7xl mx-auto ${styles.paddingX}`}>
        <div className="grid grid-cols-2 items-center py-[16px]">
          <Logo setActive={setActive} />

          <div className="flex justify-end items-center gap-x-9">
            {!mobile ? (
              <DesktopNav />
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={`${styles.defaultButtonStyle} pr-0`}
                >
                  {menuButton}
                </button>
                {menuOpen && <MobileNav />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
