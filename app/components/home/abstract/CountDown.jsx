import { styles } from "@/app/style";
import React from "react";

const CountDown = () => {
  return (
    <div className="mt-[50px] flex items-center gap-x-5">
      <div>
        <span className={styles.timerStyle}>00</span>
        <span>H</span>
      </div>
      <div>
        <span className={styles.timerStyle}>00</span>
        <span>M</span>
      </div>
      <div>
        <span className={styles.timerStyle}>00</span>
        <span>S</span>
      </div>
    </div>
  );
};

export default CountDown;
