import GameGlobalCard from "@/components/utils/GameGlobalCard";
import React from "react";
import imgCard from "@/assets/category/gaming/card-1.png";
import imgTitle from "@/assets/category/gaming/title-1.png";
import imgBrand from "@/assets/category/lottery/brand-2.png";

const Casino = () => {
  return (
    <div className="py-6">
      <GameGlobalCard
        cardImg={imgCard}
        title={imgTitle}
        description="开云真人视讯为开云集团官方直营，最美荷官在线互动，带您玩转百家乐、骰宝、轮盘、牛牛、炸金花等多款真人视讯游戏, 国际标准、公平公正，极致享受尽在开云真人。"
        categories={[
          { img: imgBrand, title: "xx电竞" },
          { img: imgBrand, title: "xx电竞" },
          { img: imgBrand, title: "xx电竞" },
        ]}
        btnTitle="进入游戏"
        btnLink="/casino"
      />
    </div>
  );
};

export default Casino;
