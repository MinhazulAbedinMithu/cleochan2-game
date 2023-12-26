import { StaticImageData } from "next/image";

export type TNavItem = {
  slug: string;
  title: string;
  dropdownEl?: any;
  setActiveDropdown?: any;
};

export type TNavIconItem = {
  slug: string;
  title: string;
  icon: StaticImageData;
};
