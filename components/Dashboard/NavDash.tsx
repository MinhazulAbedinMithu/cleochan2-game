"use client";
import React, { useState } from "react";
import imgLogo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import imgAvatar from "@/assets/avatar.png";

const hiddenText = "hidden";

const NavDash = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <nav className={`w-full fixed top-0 z-[999] bg-[#e7edf5] mb-24`}>
      <div className="container mx-auto px-2 py-3 flex items-center justify-between">
        <div className="flex items-center gap-x-[20px]">
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
            {/* <NavItem title="转账" slug="/dashboard" /> */}
            <div>
              <Link
                className="text-primary hover:text-blue border-b-2 hover:border-b-blue pb-1 leading-none border-b-transparent"
                href="/dashboard"
              >
                <span className="text-[17px]">首页</span>
              </Link>
            </div>
            <div>
              <Link
                className="text-primary hover:text-blue border-b-2 hover:border-b-blue pb-1 leading-none border-b-transparent"
                href="/dashboard"
              >
                <span className="text-[17px]">中心</span>
              </Link>
            </div>
            <div>
              <Link
                className="text-primary hover:text-blue border-b-2 hover:border-b-blue pb-1 leading-none border-b-transparent"
                href="/dashboard"
              >
                <span className="text-[17px]">中页</span>
              </Link>
            </div>
            <div>
              <Link
                className="text-primary hover:text-blue border-b-2 hover:border-b-blue pb-1 leading-none border-b-transparent"
                href="/dashboard"
              >
                <span className="text-[17px]">中首</span>
              </Link>
            </div>
            <div>
              <Link
                className="text-primary hover:text-blue border-b-2 hover:border-b-blue pb-1 leading-none border-b-transparent"
                href="/dashboard"
              >
                <span className="text-[17px]">首中页</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="text-slate-700">福利中</button>
          <button className="text-slate-700">福利中心</button>
          <div>
            <h4>
              <span>Duan111</span>
              <sup className="bg-black/75 p-1 rounded-md text-white">
                福利中
              </sup>
            </h4>
            <div className="flex items-center justify-between w-16 gap-1">
              <span>{isHidden ? "*****" : hiddenText}</span>

              <button onClick={() => setIsHidden(!isHidden)}>
                {isHidden ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>
          <div className="">
            <Image src={imgAvatar} alt="User" height={48} width={48} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavDash;
