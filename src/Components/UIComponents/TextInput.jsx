import React from "react";

const TextBox = (props) => {
  const { label, htmlFor, ...rest } = props;

  return (
    <div className="relative mb-4">
      <input
        className="peer h-10 w-full border-b-[1px] border-gray-300 text-gray-900 placeholder-transparent focus:border-b-[2.5px] focus:border-yellow-400 focus:outline-none dark:border-gray-500 dark:bg-gray-700 dark:text-gray-50"
        {...rest}
      />
      <label
        htmlFor={htmlFor}
        className="pointer-events-none absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400  peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-yellow-400 dark:text-gray-500 dark:peer-placeholder-shown:text-gray-400"
      >
        {label}
      </label>
    </div>
  );
};

export default TextBox;
