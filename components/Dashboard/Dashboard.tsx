import React from "react";
import "./dashboard.css";
import imgSidebar from "@/assets/dashboard/sidebar.png";
import TopThreeCard from "./TopThreeCard";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-3 bg-[#f1f6fe] flex items-start justify-between gap-5">
      <div className="max-w-[280px] w-full">
        <Image src={imgSidebar} alt="sidebar" />
      </div>
      <div className="w-full">
        <div className=" p-[15px] bg-white">
          <h4 className="mb-[15px] border-l-4 border-l-[#4078FB] pl-2">转账</h4>
          <div className="border-t-2 border-t-[#EEE]">
            <h4 className="py-3 text-black text-base font-medium">钱包金额</h4>
            <TopThreeCard />
          </div>
        </div>
      </div>
      <div className="max-w-[250px] w-full">RightBar</div>
    </div>
  );
};

export default Dashboard;
