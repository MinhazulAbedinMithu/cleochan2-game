import Image from "next/image";
import React from "react";
import { TNavIconItem } from "./nav.interface";

const NavIconItem: React.FC<TNavIconItem> = ({
  slug,
  title,
  icon,
}): JSX.Element => {
  return (
    <div className="text-primary">
      <Image src={icon} alt={title} width={32} height={32} />
      <span className="text-[15px] text-primary hover:text-blue border-b-2 border-b-transparent hover:border-b-blue pb-1">
        {title}
      </span>
    </div>
  );
};

export default NavIconItem;
