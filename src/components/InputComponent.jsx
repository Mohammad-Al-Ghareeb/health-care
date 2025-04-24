import React, { useState } from "react";

const style = {
  transition: "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
  padding: ".375rem .75rem",
};

const InputComponent = ({
  label,
  placeholder,
  name,
  type,
  margin,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusStyle = isFocused
    ? {
        borderColor: "#80bdff",
        boxShadow: "0 0 0 .2rem rgba(0, 123, 255, .25)",
      }
    : {};

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={margin ? "mb-[1rem]" : ""}>
      {label && (
        <label
          htmlFor={name}
          className="mb-[0.5rem] text-[14px] text-[#212529] font-[400] block"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        style={{ ...style, ...focusStyle }}
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        className="block text-[14px] text-[#495057] border border-[#0000001a] w-[100%] rounded-[.25rem] outline-none"
      />
    </div>
  );
};

export default InputComponent;
