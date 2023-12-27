import React from "react";
import "./fishing.css";
import Image from "next/image";
import imgTitle from "@/assets/category/fishing-title.png";
import imgBannerBg from "@/assets/category/fishing-bg.png";

const FishingBanner = () => {
  return (
    <div className="w-full relative min-h-[430px]">
      <div className="absolute -right-48 -z-10">
        <Image
          src={imgBannerBg}
          alt="Fishing Bg"
          className="fishing-banner-bg"
        />
      </div>
      <Image src={imgTitle} alt="Title" />
      <div className="fishing-number">
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

export default FishingBanner;
