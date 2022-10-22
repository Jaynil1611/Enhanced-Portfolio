import Link from "next/link";
import React, { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
}

const Button = ({
  children,
  className = "",
  href = "",
  target = "",
}: ButtonProps) => {
  return (
    <Link href={href}>
      <a
        target={target}
        className={`inline-block text-md m-4 px-8 py-3 uppercase rounded-full tracking-widest border-2 text-gray-600 border-gray-400 button__transition ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
