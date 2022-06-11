import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navData } from "./data";

const NavbarMobile = () => {
  const [active, setActive] = useState(false);
  const handleNavbarToggle = () => setActive((prev) => !prev);

  return (
    <div
      className={`${
        active ? "top-0 bottom-0" : ""
      } bg-white w-full fixed z-10 sm:hidden`}
    >
      <div className="bg-white flex flex-col">
        <div
          onClick={handleNavbarToggle}
          className="w-full flex justify-end p-4 transition-all"
        >
          {active ? (
            <Image
              src="https://img.icons8.com/material-outlined/24/undefined/delete-sign.png"
              alt="close"
              width="24px"
              height="24px"
            />
          ) : (
            <Image
              src="https://img.icons8.com/material-outlined/24/undefined/menu--v3.png"
              alt="menu"
              width="24px"
              height="24px"
            />
          )}
        </div>
        <div
          className={`${
            active ? "opacity-100" : "opacity-0 h-0"
          } transition-opacity`}
        >
          <NavbarContent />
        </div>
      </div>
    </div>
  );
};

const NavbarContent = () => {
  return (
    <div className="w-full mt-4 flex justify-center bg-white">
      <ul className="flex flex-col">
        {navData.map((data) => {
          const { name, component, route } = data;
          return (
            <li key={name} className="list-none">
              <Link href={route}>
                <a>{component}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarMobile;
