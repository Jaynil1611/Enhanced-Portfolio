import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navData } from "./data";

interface NavbarContentProps {
  onToggle: () => void;
}

const NavbarMobile = () => {
  const [active, setActive] = useState(false);
  const handleNavbarToggle = () => setActive((prev) => !prev);

  return (
    <div
      className={`${
        active ? "top-0 bottom-0" : ""
      } bg-white w-full fixed z-50 px-4 shadow-md sm:hidden`}
    >
      <div className="flex flex-col text-center">
        <div className="w-full flex p-4">
          {active ? (
            <div onClick={handleNavbarToggle} className="flex-1 text-right">
              <Image
                src="https://img.icons8.com/material-outlined/24/undefined/delete-sign.png"
                alt="close"
                width="24px"
                height="24px"
              />
            </div>
          ) : (
            <div className="flex flex-1">
              <div className="flex-1 text-center font-semibold">
                Jaynil Gaglani
              </div>
              <Image
                src="https://img.icons8.com/material-outlined/24/undefined/menu--v3.png"
                alt="menu"
                width="24px"
                height="24px"
                onClick={handleNavbarToggle}
              />
            </div>
          )}
        </div>
        <div className={active ? "block" : "hidden"}>
          <NavbarContent onToggle={handleNavbarToggle} />
        </div>
      </div>
    </div>
  );
};

const NavbarContent = ({ onToggle }: NavbarContentProps) => {
  return (
    <div className="w-full mt-12 flex justify-center">
      <ul className="flex flex-col p-0 m-0 items-start">
        {navData.map((data) => {
          const { name, component, route } = data;
          return (
            <li key={name} className="list-none m-4 text-xl font-bold">
              <Link href={route}>
                <a onClick={onToggle} className="no-underline">
                  {component}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarMobile;
