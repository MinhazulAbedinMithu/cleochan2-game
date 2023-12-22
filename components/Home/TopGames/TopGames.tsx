import Image from "next/image";
import React from "react";
import imgTopGamesTitle from "@/assets/topGames/top_game_title.png";
import SectionTitle from "@/components/utils/SectionTitle";
import GamesCategoryTab from "./GamesCategoryTab";

const TopGames = () => {
  return (
    <div className="container py-5">
      <SectionTitle titleImg={imgTopGamesTitle} tagline="" />

      <GamesCategoryTab />
    </div>
  );
};

export default TopGames;
