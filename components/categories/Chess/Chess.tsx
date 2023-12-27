import GameGlobalCard from "@/components/utils/GameGlobalCard";
import React from "react";
import imgCard from "@/assets/category/chess/card-1.png";
import imgTitle from "@/assets/category/chess/title-1.png";
import imgBrand from "@/assets/category/lottery/brand-2.png";

const Chess = () => {
  return (
    <div>
      <GameGlobalCard
        cardImg={imgCard}
        title={imgTitle}
        description="开云集团官方直营，欧洲最高级别安全认证，热门棋牌品类丰富，聆听悦耳音乐，感受非同凡响极致体验，让游戏改变生活，尽在开云棋牌。"
        categories={[
          { img: imgBrand, title: "xx电竞" },
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

export default Chess;
