import React from "react";
import "./electronic.css";
import Image from "next/image";
import imgTitle from "@/assets/category/electronic/title.png";
import imgBannerBg from "@/assets/category/electronic/electro-banner.png";

const ElectronicBanner = () => {
  return (
    <div className="w-full relative min-h-[430px] pb-6">
      <div className="absolute -right-0 -z-10">
        <Image
          src={imgBannerBg}
          alt="Fishing Bg"
          className="fishing-banner-bg"
        />
      </div>
      <Image src={imgTitle} alt="Title" />
      <div className="fishing-number pt-2">
        <span>7</span>
        <span>6</span>,<span>5</span>
        <span>1</span>
        <span>6</span>,<span>3</span>
        <span>5</span>
        <span>5</span>.<span>1</span>
        <span>0</span>
        <span>1</span>
      </div>
    </div>
  );
};

export default ElectronicBanner;
