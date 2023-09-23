import { styles } from "@/app/style";
import React from "react";

const TextField = ({
  label,
  name,
  error,
  isTextArea,
  helperText,
  ...props
}) => {
  return (
    <div>
      <div className="relative w-full">
        {isTextArea ? (
          <textarea
            {...props}
            id={name}
            className={` ${styles.inputStyle} ${
              error
                ? "border-red-600"
                : "border-white/40 dark:focus:border-primary focus:border-primary "
            }`}
            placeholder=" "
            rows={3}
          />
        ) : (
          <input
            {...props}
            type="text"
            id={name}
            className={`${styles.inputStyle} ${
              error
                ? "border-red-600"
                : "border-white/40 dark:focus:border-primary focus:border-primary "
            }`}
            placeholder=" "
          />
        )}
        <label htmlFor={name} className={styles.textLabelStyle}>
          {label}
        </label>
      </div>
      {error && <p className="text-xs mt-2 text-red-600">{error}</p>}

      {!error && helperText && (
        <p className="text-xs mt-2 text-white/60">{helperText}</p>
      )}
    </div>
  );
};

export default TextField;
