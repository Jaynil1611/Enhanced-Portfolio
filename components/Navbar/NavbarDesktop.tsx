import Link from "next/link";
import React from "react";

const NavbarDesktop = () => {
  return (
    <div className="hidden sm:block">
      <nav className="flex py-6 justify-between items-center">
        <div>Jaynil Gaglani</div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/">
              <a className="navbar__item">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="navbar__item">About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="navbar__item">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="navbar__item">Work</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
