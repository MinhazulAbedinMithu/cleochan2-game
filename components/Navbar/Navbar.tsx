import Image from "next/image";
import Link from "next/link";
import React from "react";

//import images
import imgLogo from "@/assets/logo.png";
import { navIconListData, navListData } from "./nav.constant";
import { TNavIconItem, TNavItem } from "./nav.interface";
import NavItem from "./NavItem";
import NavIconItem from "./NavIconItem";
import NavAccountStatus from "./NavAccountStatus";

const Navbar = () => {
  return (
    <nav className="bg-[#e6f7ff] p-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-[14px]">
          <Image src={imgLogo} alt="Logo" />
          {navListData.map((navItem: TNavItem, index: number) => (
            <NavItem key={index} title={navItem.title} slug={navItem.slug} />
          ))}
        </div>
        <div className="flex items-center gap-x-3">
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
    </nav>
  );
};

export default Navbar;
