import React from "react";
import DropdownCardVr from "./DropdownCardVr";
import imgCard1 from "@/assets/dropdown/real-1.png";
import imgCard2 from "@/assets/dropdown/real-2.png";
import imgCard3 from "@/assets/dropdown/real-3.png";
import imgTag from "@/assets/dropdown/backupTag.png";
import imgTag2 from "@/assets/dropdown/tag-2.png";
import imgBrand from "@/assets/dropdown/brand_logo.png";

const RealFour = () => {
  return (
    <div className="flex items-end justify-center gap-x-3 py-3">
      <DropdownCardVr
        imgCard={imgCard1}
        imgTag={imgTag}
        imgTag2={imgTag2}
        imgBrand={imgBrand}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard2}
        imgBrand={imgBrand}
        title="ag真人"
        tagline="ag CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard3}
        imgTag2={imgTag2}
        imgBrand={imgBrand}
        title="og真人"
        tagline="og CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard1}
        imgBrand={imgBrand}
        title="og真人"
        tagline="og CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard3}
        imgBrand={imgBrand}
        title="og真人"
        tagline="og CASINO"
      />
    </div>
  );
};

export default RealFour;
