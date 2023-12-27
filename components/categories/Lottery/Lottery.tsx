import GameGlobalCard from "@/components/utils/GameGlobalCard";
import React from "react";
import imgCard from "@/assets/category/lottery/lottery-1.png";
import imgTitle from "@/assets/category/lottery/title-1.png";
import imgBranding from "@/assets/category/lottery/branding.png";
import imgBrand from "@/assets/category/lottery/brand-2.png";

const Lottery = () => {
  return (
    <div>
      <GameGlobalCard
        cardImg={imgCard}
        title={imgTitle}
        description="专注于彩票游戏行业多年，拥有经典彩种、玩法。还有超多独家创新玩法，足够新颖，极易操作的游戏界面，更是在您游戏过程中增光添彩！"
        brandingImg={imgBranding}
        categories={[
          { img: { imgBrand }, title: "xx电竞" },
          { img: { imgBrand }, title: "xx电竞" },
          { img: { imgBrand }, title: "xx电竞" },
        ]}
        btnTitle="进入游戏"
        btnLink="/lottery"
      />
    </div>
  );
};

export default Lottery;
