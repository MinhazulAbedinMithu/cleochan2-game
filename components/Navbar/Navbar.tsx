"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

//import images
import imgLogo from "@/assets/logo.png";
import { navIconListData, navListData } from "./nav.constant";
import { TNavIconItem, TNavItem } from "./nav.interface";
import NavItem from "./NavItem";
import NavIconItem from "./NavIconItem";
import NavAccountStatus from "./NavAccountStatus";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  const [isToggled, setIsToggled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setNavbarBackground("white");
    } else {
      setNavbarBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggled = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <nav
      className="p-2 w-full fixed top-0 z-[999]"
      style={{
        background: isToggled
          ? "white"
          : navbarBackground === "white"
          ? "white"
          : `linear-gradient(180deg, rgba(103, 133, 180, 0.27) 0%, rgba(103, 133, 180, 0.00) 100%)`,
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-[14px]">
          <Image src={imgLogo} alt="Logo" />
          <div className="hidden md:flex items-center justify-start">
            {navListData.map((navItem: TNavItem, index: number) => (
              <NavItem key={index} title={navItem.title} slug={navItem.slug} />
            ))}
          </div>
        </div>
        <button
          className="md:hidden font-bold text-2xl"
          onClick={handleToggled}
        >
          ☰
        </button>
        <div className="hidden md:flex items-center gap-x-3">
          {navIconListData.map((navIconItem: TNavIconItem, index: number) => (
            <NavIconItem
              key={index}
              slug={navIconItem.slug}
              title={navIconItem.title}
              icon={navIconItem.icon}
            />
          ))}
          <NavAccountStatus />
        </div>
      </div>
      {isToggled && (
        <div className="grid grid-cols-3 w-full px-6 py-4 gap-3 bg-white md:hidden">
          {navListData.map((navItem: TNavItem, index: number) => (
            <NavItem key={index} title={navItem.title} slug={navItem.slug} />
          ))}
          {navIconListData.map((navIconItem: TNavIconItem, index: number) => (
            <NavIconItem
              key={index}
              slug={navIconItem.slug}
              title={navIconItem.title}
              icon={navIconItem.icon}
            />
          ))}
          <NavAccountStatus />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
