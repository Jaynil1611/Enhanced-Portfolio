import Link from "next/link";
import React from "react";
import { navData } from "./data";

const NavbarDesktop = () => {
  return (
    <div className="hidden sm:block">
      <nav className="flex py-6 justify-between items-center">
        <Link href="/">
          <a>Jaynil Gaglani</a>
        </Link>
        <ul className="flex">
          {navData.map((data) => {
            const { name, component, route, target } = data;
            return (
              <li key={name} className="list-none m-4 navbar__item">
                <Link href={route}>
                  <a className="no-underline" target={target}>
                    {component}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
