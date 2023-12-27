import React from "react";
import ElectronicBanner from "./ElectronicBanner";
import FishingTab from "../Fishing/FishingTab";
import { electroTabData, electroTabTitleData } from "./electroTabData";

const Electronic = () => {
  return (
    <div className="container">
      <ElectronicBanner />
      <FishingTab
        tabTitleData={electroTabTitleData}
        tabBodyData={electroTabData}
      />
    </div>
  );
};

export default Electronic;
