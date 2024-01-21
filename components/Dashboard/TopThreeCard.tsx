import React from "react";
import "./dashboard.css";
import Image from "next/image";
import iconFile from "@/assets/dashboard/file-icon.png";
import iconMoney from "@/assets/dashboard/yuan-icon.png";
import iconFoc from "@/assets/dashboard/qk-icon.png";

const TopThreeCard = () => {
  return (
    <div className="flex items-start justify-between gap-2">
      <div className="top-card">
        <div>
          <Image src={iconFile} alt="FIle" width={19} height={16} />
          <p className="pt-2">
            <span className="text-xs pr-1">¥</span>
            <span className="text-[20px]">0.00</span>
          </p>
        </div>
        <div>
          <p className="text-blue">一键回收</p>
        </div>
      </div>
      <div className="top-card">
        <div>
          <Image
            src={iconMoney}
            alt="FIle"
            width={19}
            height={16}
            className="inline"
          />
          <span className="inline text-[14px] pl-[5px] text-[#7481A2]">
            锁定钱包
          </span>
          <p className="">
            <span className="text-xs pr-1">¥</span>
            <span className="text-[20px]">0.00</span>
          </p>
        </div>
      </div>
      <div className="top-card">
        <div>
          <Image
            src={iconFoc}
            alt="FIle"
            width={19}
            height={16}
            className="inline"
          />
          <span className="inline text-[14px] pl-[5px] text-[#7481A2]">
            福利中心
          </span>
          <p className="">
            <span className="text-xs pr-1">¥</span>
            <span className="text-[20px]">0.00</span>
          </p>
        </div>
        {/* <div>
                  <p className="text-blue">一键回收</p>
                </div> */}
      </div>
    </div>
  );
};

export default TopThreeCard;
