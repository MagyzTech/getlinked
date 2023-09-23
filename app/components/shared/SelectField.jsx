import { styles } from "@/app/style";
import React from "react";

const SelectField = ({
  label,
  name,
  error,
  loading,
  options,
  helperText,
  ...props
}) => {
  return (
    <div>
      <div className="relative w-full">
        <select id={name} className={styles.selectStyle} {...props}>
          {loading ? (
            <option>Loading...</option>
          ) : options ? (
            <>
              <option>Select {label}</option>
              {options.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.name}
                </option>
              ))}
            </>
          ) : (
            <option>No {label}</option>
          )}
        </select>
        <label htmlFor={name} className={styles.textLabelStyle}>
          {loading ? `Loading ${label}...` : label}
        </label>
      </div>
      {error && <p className="text-xs mt-2 text-red-600">{error}</p>}

      {!error && helperText && (
        <p className="text-xs mt-2 text-white/60">{helperText}</p>
      )}
    </div>
  );
};

export default SelectField;
