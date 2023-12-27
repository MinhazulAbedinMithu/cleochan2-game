import GameGlobalCard from "@/components/utils/GameGlobalCard";
import imgCard from "@/assets/category/gaming/card-1.png";
import imgTitle from "@/assets/category/gaming/title-1.png";
import imgBranding from "@/assets/category/gaming/branding.png";
import imgBrand from "@/assets/category/lottery/brand-2.png";
import React from "react";

const Gaming = () => {
  return (
    <div className="py-10">
      <GameGlobalCard
        cardImg={imgCard}
        title={imgTitle}
        description="专注于彩票游戏行业多年，拥有经典彩种、玩法。还有超多独家创新玩法，足够新颖，极易操作的游戏界面，更是在您游戏过程中增光添彩！"
        brandingImg={imgBranding}
        categories={[
          { img: imgBrand, title: "xx电竞" },
          { img: imgBrand, title: "xx电竞" },
          { img: imgBrand, title: "xx电竞" },
        ]}
        btnTitle="进入游戏"
        btnLink="/gaming"
      />
    </div>
  );
};

export default Gaming;
