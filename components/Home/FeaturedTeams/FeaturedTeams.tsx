import React from "react";
import { teamsData } from "./teamsData";
import imgCrystal from "@/public/crystal.png";
import Image from "next/image";
import BgImageDiv from "@/components/utils/BgImageDiv";

const FeaturedTeams = () => {
  return (
    <div className="container flex items-center justify-between">
      {teamsData.map((team, index) => (
        <div
          key={index}
          className={`h-[180px] max-w-[136px] w-full flex flex-col items-center justify-end pb-10 relative `}
        >
          <BgImageDiv image={team.image} />
          <h4 className="text-[#303442] text-[16px]">{team.title}</h4>
          <p className="text-[#7884A7] text-[12px]">{team.tagline}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedTeams;
