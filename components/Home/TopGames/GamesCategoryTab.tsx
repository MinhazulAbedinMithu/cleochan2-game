"use client";
import React, { useEffect, useState } from "react";
import { TGameCard, TTabTitle, gamesDemoData, tabTitleData } from "./tabInfo";
import Image from "next/image";
import GameCard from "./GameCard";

const GamesCategoryTab = () => {
  const [gamesData, setGamesData] = useState<TGameCard[]>([]);
  const [selectedTab, setSeletedTab] = useState<string>("皇创反波胆"); // default all tab: 1

  useEffect(() => {
    setGamesData(gamesDemoData);
  }, []);

  const handleTabSelect = (title: string) => {
    setSeletedTab(title);
    if (title === "皇创反波胆") {
      setGamesData(gamesDemoData);
    } else {
      const filteredGames = gamesDemoData.filter((item) => {
        if (item.tags.includes(title)) {
          return item;
        }
      });
      setGamesData(filteredGames);
    }
  };

  return (
    <div className="container py-8">
      <div className="flex items-center justify-center gap-x-3">
        {tabTitleData.map((tab: TTabTitle, index) => (
          <button
            key={index}
            className={`w-[120px] h-[40px] flex items-center justify-center bg-transparent rounded-3xl ${
              selectedTab === tab.title
                ? "bg-blue text-white font-medium"
                : "tab-btn text-primary"
            } text-base  border-none hover:bg-blue hover:text-white font-bold`}
            onClick={() => handleTabSelect(tab.title)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-y-8 py-8">
        {gamesData.map((game: TGameCard, index: number) => (
          <GameCard key={index} info={game} />
        ))}
      </div>
    </div>
  );
};

export default GamesCategoryTab;
