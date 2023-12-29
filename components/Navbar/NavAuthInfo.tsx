import React, { useState } from "react";
import NavBlueButton from "./NavBlueButton";

const NavAuthInfo = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const handleChangeInput = (key: "username" | "password", value: string) => {
    setLoginInfo({ ...loginInfo, [key]: value });
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-end gap-3">
      <form className="flex flex-col md:flex-row items-center justify-end gap-3">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="账号"
          value={loginInfo.username}
          onChange={(e) =>
            handleChangeInput(
              e.target.name as "username" | "password",
              e.target.value
            )
          }
          className="w-[96px] placeholder:text-white bg-[#6C7BA899]/60 rounded-[14.5px] text-left px-2 py-[6px] text-white text-xs"
        />
        <div className=" flex items-center justify-between w-[110px] bg-[#6C7BA899]/60 rounded-[14.5px] text-left px-[6px] py-[6px] text-white text-xs">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="密码"
            value={loginInfo.password}
            onChange={(e) =>
              handleChangeInput(
                e.target.name as "username" | "password",
                e.target.value
              )
            }
            className="bg-transparent placeholder:text-white text-white text-xs w-[60%]"
          />
          <button className="cursor-pointer text-xs">忘记？</button>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-br from-[#5096FD] via-[#5AAAFE] to-[#5DB0FE] text-sm text-white px-3 py-[6px] rounded-[14.5px]"
        >
          登录
        </button>
      </form>
      <button className="bg-white text-sm text-[#6C7BA8] px-3 py-[6px] rounded-[14.5px]">
        注册
      </button>
    </div>
  );
};

export default NavAuthInfo;
