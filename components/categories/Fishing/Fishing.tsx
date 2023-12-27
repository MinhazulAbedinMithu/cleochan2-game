import React from "react";
import FishingBanner from "./FishingBanner";
import "./fishing.css";
import FishingTab from "./FishingTab";
import { fishingTabData, fishingTabTitleData } from "./fishingTabData";

const Fishing = () => {
  return (
    <div className="container sm:overflow-y-auto">
      <FishingBanner />
      <FishingTab
        tabTitleData={fishingTabTitleData}
        tabBodyData={fishingTabData}
      />
    </div>
  );
};

export default Fishing;
