import React from "react";
import DropdownCardHr from "./DropdownCardHr";
import imgCard1 from "@/assets/dropdown/lottery-1.png";
import imgCard2 from "@/assets/dropdown/lottery-2.png";
import imgCard3 from "@/assets/dropdown/lottery-3.png";
import imgTag from "@/assets/dropdown/backupTag.png";
import imgBrand from "@/assets/dropdown/brand_logo.png";

const LotterySeven = () => {
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
        imgTag={imgTag}
        imgBrand={imgBrand}
        title="xx体育"
        tagline="KAIYUN SPORTS"
        buttonTitle="进入游戏"
        buttonLink="/"
      />
      <DropdownCardHr
        imgCard={imgCard3}
        imgTag={imgTag}
        imgBrand={imgBrand}
        title="xx体育"
        tagline="KAIYUN SPORTS"
        buttonTitle="进入游戏"
        buttonLink="/"
      />
    </div>
  );
};

export default LotterySeven;
