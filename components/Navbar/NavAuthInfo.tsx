import React from "react";
import NavBlueButton from "./NavBlueButton";

const NavAuthInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-end gap-3">
      <div className="w-[104px] bg-[#6C7BA899]/60 rounded-[14.5px] text-left px-3 py-[6px] text-white text-xs">
        账号
      </div>
      <div className=" flex items-center justify-between w-[104px] bg-[#6C7BA899]/60 rounded-[14.5px] text-left px-3 py-[6px] text-white text-xs">
        <span>密码</span>
        <span>忘记？</span>
      </div>

      <NavBlueButton>登录</NavBlueButton>
      <button className="bg-white text-sm text-[#6C7BA8] px-3 py-[6px] rounded-[14.5px]">
        登录
      </button>
    </div>
  );
};

export default NavAuthInfo;
