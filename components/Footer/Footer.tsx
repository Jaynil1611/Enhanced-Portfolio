import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="absolute bg-blue-600 bottom-0 left-0 right-0 py-12">
        <div className="text-white px-4 max-w-4xl m-auto flex flex-col space-y-8 md:space-y-0 md:flex-row lg:px-0">
          <div className="flex-1 text-center mr-4 md:text-left">
            {`Let's Connect I'd love if you reached out to me on any of the
          platforms below. Drop me a line and I’ll get back to you ASAP!`}
          </div>
          <ul className="list-none flex flex-1 space-x-4 justify-center md:justify-end">
            <li>
              <Link href="https://twitter.com/JAYNIL1611">
                <a className="text-white" target="_blank">
                  <i className="bx bxl-twitter bx-sm bx-border-circle"></i>
                </a>
              </Link>
            </li>
            <li>
              <i className="bx bxl-github bx-sm bx-border-circle"></i>
            </li>
            <li>
              <i className="bx bxl-linkedin bx-sm bx-border-circle"></i>
            </li>
            <li>
              <i className="bx bx-envelope bx-sm bx-border-circle"></i>
            </li>
            <li>
              <i className="bx bxl-medium bx-sm bx-border-circle"></i>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Footer;
