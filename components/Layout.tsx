import React from "react";
import Footer from "./Footer/Footer";
import NavbarDesktop from "./Navbar/NavbarDesktop";
import NavbarMobile from "./Navbar/NavbarMobile";
import { CommonSeo } from "./index";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CommonSeo
        title="Jaynil Gaglani | Portfolio"
        description="Portfolio"
      ></CommonSeo>
      <NavbarMobile />
      <div className="px-4 lg:px-0 max-w-4xl m-auto">
        <NavbarDesktop />
        <div className="pt-20 md:pt-6 mb-48 md:mb-0">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
