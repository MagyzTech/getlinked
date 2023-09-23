import { styles } from "@/app/style";
import Link from "next/link";
import React from "react";

export const Logo = ({ setActive, size }) => {
  return (
    <div className="relative">
      <Link
        onClick={() => {
          setActive("home");
          window.scrollTo(0, 0);
        }}
        href="/"
        className={
          size && size === "small" ? styles.textLogoSmall : styles.textLogo
        }
      >
        <span>get</span>
        <span className="text-primary">linked</span>
      </Link>
    </div>
  );
};
