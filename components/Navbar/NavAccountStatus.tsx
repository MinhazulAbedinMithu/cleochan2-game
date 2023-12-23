import Image from "next/image";
import React from "react";

import iconVipo from "@/assets/icons/vipo.png";
import imgAvatar from "@/assets/avatar.png";

const NavAccountStatus: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-end gap-1">
      <div className="text-primary">
        <div className="flex items-start justify-start gap-x-2">
          <span className="text-base">duan111</span>
          <Image src={iconVipo} alt="User" />
        </div>
        <p className="text-base font-mono">27658.42</p>
      </div>

      <div className="">
        <Image src={imgAvatar} alt="User" height={48} width={48} />
      </div>
    </div>
  );
};

export default NavAccountStatus;
