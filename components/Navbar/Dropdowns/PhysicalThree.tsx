import React from "react";

import imgCard1 from "@/assets/dropdown/physical-1.png";
import imgCard2 from "@/assets/dropdown/physical-2.png";
import imgCard3 from "@/assets/dropdown/physical-3.png";
import imgSports from "@/assets/dropdown/physical-sports.png";
import imgTag from "@/assets/dropdown/backupTag.png";
import imgBrand from "@/assets/dropdown/brand_logo.png";
import Image from "next/image";
import NavBlueButton from "../NavBlueButton";
import DropdownCardHr from "./DropdownCardHr";

const PhysicalThree = () => {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <DropdownCardHr
        imgCard={imgCard1}
        imgTag={imgTag}
        imgBrand={imgBrand}
        title="xx体育"
        tagline="KAIYUN SPORTS"
        buttonTitle="进入游戏"
        buttonLink="/"
      />
      <DropdownCardHr
        imgCard={imgCard2}
        // imgTag={imgTag}
        imgBrand={imgBrand}
        title="xx体育"
        tagline="KAIYUN SPORTS"
        buttonTitle="进入游戏"
        buttonLink="/"
      />
      <DropdownCardHr
        imgCard={imgCard3}
        // imgTag={imgTag}
        imgBrand={imgBrand}
        title="xx体育"
        tagline="KAIYUN SPORTS"
        buttonTitle="进入游戏"
        buttonLink="/"
      />
      <Image src={imgSports} alt="sports" />
    </div>
  );
};

export default PhysicalThree;
