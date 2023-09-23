import { styles } from "@/app/style";
import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button className={styles.buttonStyle} {...props}>
      {children}
    </button>
  );
};
