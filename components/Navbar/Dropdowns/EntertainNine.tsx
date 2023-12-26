import React from "react";
import DropdownCardVr from "./DropdownCardVr";
import imgCard1 from "@/assets/dropdown/enter-1.png";
import imgCard2 from "@/assets/dropdown/enter-2.png";
import imgCard3 from "@/assets/dropdown/enter-3.png";
import imgCard4 from "@/assets/dropdown/enter-4.png";
import imgCard5 from "@/assets/dropdown/enter-5.png";
import imgCard6 from "@/assets/dropdown/enter-6.png";
import imgBrand from "@/assets/dropdown/brand_logo.png";
import imgTag120 from "@/assets/dropdown/tag-120.png";
import imgTag from "@/assets/dropdown/backupTag.png";

const EntertainNine = () => {
  return (
    <div className="flex items-start justify-center gap-x-3 py-3">
      <DropdownCardVr
        imgCard={imgCard1}
        imgTag={imgTag}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={146}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard2}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={146}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard3}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={146}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard4}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={146}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard5}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={146}
        title="BG真人"
        tagline="HCH CASINO"
      />
      <DropdownCardVr
        imgCard={imgCard6}
        imgBrand={imgBrand}
        imgHeight={180}
        imgWidth={146}
        title="BG真人"
        tagline="HCH CASINO"
      />
    </div>
  );
};

export default EntertainNine;
