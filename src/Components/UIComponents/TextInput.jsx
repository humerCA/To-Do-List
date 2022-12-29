import React from "react";

const TextBox = React.forwardRef((props, ref) => {
  const { label, htmlFor, className, containerClass, labelClass, ...rest } =
    props;

  return (
    <>
      <div className="relative m-2 grow">
        <input
          ref={ref}
          className={` ${className} peer h-10 w-full border-b-[1px] border-slate-300 bg-transparent text-slate-900 placeholder-transparent focus:border-b-[2.5px] focus:border-yellow-400 focus:outline-none dark:border-slate-500 dark:bg-transparent dark:text-slate-50 dark:focus:border-yellow-400`}
          {...rest}
        />
        <label
          htmlFor={htmlFor}
          className={`${labelClass} pointer-events-none absolute left-0 -top-3.5 text-sm text-slate-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400  peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-yellow-400 dark:text-slate-500 dark:peer-placeholder-shown:text-slate-400 dark:peer-focus:text-yellow-400`}
        >
          {label}
        </label>
      </div>
    </>
  );
});

export default TextBox;
