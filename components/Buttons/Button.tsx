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
  target = "_blank",
}: ButtonProps) => {
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
