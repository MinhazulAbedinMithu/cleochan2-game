import React from "react";
import { TNavItem } from "./nav.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem: React.FC<TNavItem> = ({ title, slug, setActiveDropdown }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        className={`text-primary hover:text-blue border-b-2 hover:border-b-blue pb-1 leading-none ${
          pathname === slug ? "border-b-blue" : "border-b-transparent"
        }`}
        href={slug}
        onMouseOver={() => setActiveDropdown(title)}
      >
        <span className="text-[17px]">{title}</span>
      </Link>
    </div>
  );
};

export default NavItem;
