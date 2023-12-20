import React from "react";
import { TNavItem } from "./nav.interface";
import Link from "next/link";

const NavItem: React.FC<TNavItem> = ({ title, slug }) => {
  return (
    <div>
      <Link
        className="text-primary hover:text-blue border-b-2 border-b-transparent hover:border-b-blue pb-1 leading-none"
        href={slug}
      >
        <span className="text-[17px]">{title}</span>
      </Link>
    </div>
  );
};

export default NavItem;
