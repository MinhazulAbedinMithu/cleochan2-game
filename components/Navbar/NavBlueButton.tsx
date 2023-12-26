import React from "react";

const NavBlueButton = ({ children }: any) => {
  return (
    <button className="bg-gradient-to-br from-[#5096FD] via-[#5AAAFE] to-[#5DB0FE] text-sm text-white px-3 py-[6px] rounded-[14.5px]">
      {children}
    </button>
  );
};

export default NavBlueButton;
