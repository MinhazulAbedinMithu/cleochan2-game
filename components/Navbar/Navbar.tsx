"use client";
import Image from "next/image";
import "./navbar.css";
import React, { useEffect, useState } from "react";

//import images
import imgLogo from "@/public/logo.png";
import { TNavIconItem, TNavItem } from "./nav.interface";
import NavItem from "./NavItem";
import NavIconItem from "./NavIconItem";
import NavAccountStatus from "./NavAccountStatus";
import NavAuthInfo from "./NavAuthInfo";
import { navIconListData, navListData } from "./nav.constant";
import { usePathname } from "next/navigation";
import NavDash from "../Dashboard/NavDash";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [isToggled, setIsToggled] = useState(false);

  const [userInfo, setUserInfo] = useState(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setNavbarBackground("white");
    } else {
      setNavbarBackground("transparent");
    }
  };
  const pathname = usePathname();

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
    <>
      {pathname?.split("/")[1] === "dashboard" ? (
        <NavDash />
      ) : (
        <nav
          className={`w-full fixed top-0 z-[999] ${
            activeDropdown ? "nav-background-bg" : ""
          }`}
          style={{
            background: isToggled
              ? "white"
              : navbarBackground === "white"
              ? "white"
              : `linear-gradient(180deg, rgba(103, 133, 180, 0.27) 0%, rgba(103, 133, 180, 0.00) 100%)`,
          }}
        >
          <div className="container mx-auto p-2 flex items-center justify-between">
            <div className="flex items-center gap-x-[14px]">
              <div>
                <Image
                  src={imgLogo}
                  alt="Logo"
                  quality={100}
                  // width={130.815}
                  // height={39.11}
                  priority
                />
              </div>
              <div className="hidden md:flex items-center justify-start gap-x-3">
                {navListData.map((navItem: TNavItem, index: number) => (
                  <NavItem
                    key={index}
                    title={navItem.title}
                    slug={navItem.slug}
                    setActiveDropdown={setActiveDropdown}
                  />
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
              {navIconListData.map(
                (navIconItem: TNavIconItem, index: number) => (
                  <NavIconItem
                    key={index}
                    slug={navIconItem.slug}
                    title={navIconItem.title}
                    icon={navIconItem.icon}
                  />
                )
              )}
              {userInfo ? <NavAccountStatus /> : <NavAuthInfo />}
            </div>
          </div>
          {isToggled && (
            <div className="grid grid-cols-3 w-full px-6 py-4 gap-3 bg-white md:hidden">
              {navListData.map((navItem: TNavItem, index: number) => (
                <NavItem
                  key={index}
                  title={navItem.title}
                  slug={navItem.slug}
                />
              ))}
              {navIconListData.map(
                (navIconItem: TNavIconItem, index: number) => (
                  <NavIconItem
                    key={index}
                    slug={navIconItem.slug}
                    title={navIconItem.title}
                    icon={navIconItem.icon}
                  />
                )
              )}
              {userInfo ? <NavAccountStatus /> : <NavAuthInfo />}
            </div>
          )}
          <div className="w-full">
            <div
              className="container"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {
                navListData.filter(
                  (item, index) => item.title === activeDropdown
                )[0]?.dropdownEl
              }
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
