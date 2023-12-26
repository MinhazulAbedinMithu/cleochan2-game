import React from "react";
import imgCard1 from "@/assets/dropdown/chess-1.png";
import imgCard2 from "@/assets/dropdown/chess-2.png";
import imgCard3 from "@/assets/dropdown/chess-3.png";
import imgCard4 from "@/assets/dropdown/chess-4.png";
import imgCard5 from "@/assets/dropdown/chess-5.png";
import imgTag from "@/assets/dropdown/backupTag.png";
import imgTag120 from "@/assets/dropdown/tag-120.png";
import imgBrand from "@/assets/dropdown/brand_logo.png";
import DropdownCardVr from "./DropdownCardVr";

const ChessCardFive = () => {
  return (
    <div className="flex items-end justify-center gap-x-3 py-3">
      <DropdownCardVr
        imgCard={imgCard1}
        imgTag={imgTag}
        imgTag2={imgTag120}
        imgBrand={imgBrand}
        title="皇创棋牌"
        tagline="HCH board games"
      />
      <DropdownCardVr
        imgCard={imgCard2}
        imgBrand={imgBrand}
        title="yoo棋牌"
        tagline="yy board games"
      />
      <DropdownCardVr
        imgCard={imgCard3}
        imgBrand={imgBrand}
        title="高登棋牌"
        tagline="gd board games"
      />
      <DropdownCardVr
        imgCard={imgCard4}
        imgBrand={imgBrand}
        title="双赢棋牌"
        tagline="winwin board games"
      />
      <DropdownCardVr
        imgCard={imgCard5}
        imgTag={imgTag}
        imgTag2={imgTag120}
        imgBrand={imgBrand}
        title="yoo棋牌"
        tagline="boya board games"
      />
    </div>
  );
};

export default ChessCardFive;
