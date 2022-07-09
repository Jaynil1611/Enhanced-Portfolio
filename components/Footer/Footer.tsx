import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col space-y-8 bottom-0 py-4 md:space-y-0 md:flex-row">
        <div className="flex-1 text-center md:text-left">
          {`Let's Connect I'd love if you reached out to me on any of the
          platforms below. Drop me a line and I’ll get back to you ASAP!`}
        </div>
        <ul className="list-none flex flex-1 space-x-4 justify-center md:justify-end">
          <li>
            <i className="bx bxl-twitter bx-sm bx-border-circle"></i>
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
      <div></div>
    </>
  );
};

export default Footer;
