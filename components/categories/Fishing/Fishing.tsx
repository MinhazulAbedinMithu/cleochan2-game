import React from "react";
import FishingBanner from "./FishingBanner";
import "./fishing.css";

const Fishing = () => {
  return (
    <div className="container">
      <FishingBanner />
      <div className="fishing-tab my-10"></div>
    </div>
  );
};

export default Fishing;
