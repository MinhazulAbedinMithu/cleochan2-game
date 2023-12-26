import React from "react";
import DropdownCardVr from "./DropdownCardVr";
import imgCard1 from "@/assets/dropdown/electro-1.png";
import imgCard2 from "@/assets/dropdown/electro-2.png";
import imgCard3 from "@/assets/dropdown/electro-3.png";
import imgCard4 from "@/assets/dropdown/electro-4.png";
import imgCard5 from "@/assets/dropdown/electro-5.png";
import imgCard6 from "@/assets/dropdown/electro-6.png";
import imgCard7 from "@/assets/dropdown/electro-7.png";
import imgBrand from "@/assets/dropdown/brand_logo.png";
import imgTag120 from "@/assets/dropdown/tag-120.png";
import imgTag from "@/assets/dropdown/backupTag.png";

const ElectroEight = () => {
  return (
    <div className="flex items-start justify-center gap-x-3 py-3">
      <DropdownCardVr
        imgCard={imgCard1}
        imgTag={imgTag}
        imgTag2={imgTag120}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={148}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard2}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={148}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard3}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={148}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard4}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={148}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard5}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={148}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard6}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={148}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard7}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={148}
        title="BG真人"
        tagline="HCH CASINO"
      />
    </div>
  );
};

export default ElectroEight;
