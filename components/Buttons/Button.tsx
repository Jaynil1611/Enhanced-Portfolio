import Link from "next/link";
import React from "react";

const Button = ({ children, className = "", href = "", target = "_blank" }) => {
  return (
    <Link href={href}>
      <a
        target={target}
        className={`inline-block m-4 px-8 py-4 uppercase tracking-widest rounded-md border-2 text-gray-500 border-gray-400 button__transition ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
