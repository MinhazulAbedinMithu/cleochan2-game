"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import imgLeftIcon from "@/assets/icons/left-arrow.png";
import imgRightIcon from "@/assets/icons/right-arrow.png";
import "./fishing.css";

const FishingTab = ({ tabTitleData, tabBodyData }: any) => {
  const [fishingGamesData, setFishingGamesData] = useState<any[]>([]);
  const [selectedTab, setSeletedTab] = useState(tabTitleData[0] || "皇创捕鱼"); // default all tab: 1

  useEffect(() => {
    setFishingGamesData(tabBodyData);
  }, []);

  const handleTabSelect = (title: string) => {
    setSeletedTab(title);
    if (title === (tabTitleData[0] || "皇创捕鱼")) {
      setFishingGamesData(tabBodyData);
    } else {
      const filteredGames = tabBodyData.filter((item: any) => {
        if (item.tags.includes(title)) {
          return item;
        }
      });
      setFishingGamesData(filteredGames);
    }
  };
  return (
    <div className="fishing-tab my-10 py-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center gap-x-3">
          {tabTitleData.map((tab: any, index: number) => (
            <button
              key={index}
              className={`w-[120px] h-[40px] flex items-center justify-center rounded-3xl ${
                selectedTab !== tab.title
                  ? "tab-btn text-primary"
                  : "bg-blue text-white font-medium"
              } text-base border-none hover:bg-blue hover:text-white font-bold`}
              onClick={() => handleTabSelect(tab.title)}
            >
              <Image src={tab.img} alt={tab.title} />
              {tab.title}
            </button>
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 py-4 px-4 overflw-y-auto">
          {fishingGamesData.map((game, index: number) => (
            <div
              key={index}
              className="fishing-tab-card sm:w-full md:w-1/3 lg:w-1/3"
            >
              <Image
                src={game.image}
                alt={game.title}
                width={211}
                className="overflow-hidden rounded-t-xl"
              />
              <h4 className="py-3 px-3">{game.title}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <button className="p-3 bg-white rounded-lg shadow-lg">
          <Image src={imgLeftIcon} alt="left" />
        </button>
        <button className="pagination-btn rounded-lg  shadow-lg">1</button>
        <button className="pagination-btn rounded-lg shadow-lg">2</button>
        <button className="pagination-btn rounded-lg shadow-lg">3</button>
        <button className="p-3 bg-white rounded-lg shadow-lg">
          <Image src={imgRightIcon} alt="left" />
        </button>
      </div>
    </div>
  );
};

export default FishingTab;
