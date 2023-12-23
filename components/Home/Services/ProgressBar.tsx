"use client";
import React, { useEffect, useState } from "react";
import "./service.css";
import Image from "next/image";
import imgProgress from "@/assets/moreServices/progress.png";

const ProgressBar = ({ progress, unit, title, tagline }: any) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[160px] h-[137px] progress-bar flex flex-col items-center justify-end relative">
        <Image
          src={imgProgress}
          alt="Progress"
          className="absolute left-[10px] top-[14px]"
        />
        <small className="text-[#6C7BA8] text-[8px] text-xs uppercase">
          Current Speed
        </small>
        <h4 className="text-[#3F76FE] text-6xl font-bold">{progress}</h4>
        <small className="text-[#6C7BA8] text-[12px] text-xs uppercase">
          {unit}
        </small>
      </div>
      <h2 className="pt-6 text-[#303442] text-[18px]">{title}</h2>
      <p className="text-[#6C7BA8] text-[12px]">{tagline}</p>
    </div>
  );
};

export default ProgressBar;
