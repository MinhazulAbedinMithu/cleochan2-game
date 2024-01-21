"use client";
import Image from "next/image";
import React, { useState } from "react";
import imgArrowRight from "@/assets/dashboard/arrow-right.png";
import imgTransfer from "@/assets/dashboard/transfer.png";

const TransferDetails = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div className="bg-white my-2 px-[15px]">
        <div className="flex items-center justify-between py-6">
          <h4 className="text-[#000] text-[14px]">转账场馆</h4>
          <div className="flex items-center justify-end gap-2">
            <span className="text-[14px] text-[#7481A2]">自动转账</span>
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
                <div
                  className={`block h-8 w-14 rounded-full ${
                    isChecked ? "bg-[#3F76FE]" : "bg-[#E5E7EB]"
                  }`}
                ></div>
                <div
                  className={`dot absolute top-1 h-6 w-6 rounded-full bg-white ${
                    isChecked ? "right-1 " : "left-1"
                  }  `}
                ></div>
              </div>
            </label>
          </div>
        </div>
        {!isChecked && (
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center justify-between p-[10px] bg-[#F4F8FE] rounded w-[274px]">
              <h4>
                <span className="text-[14px] text-[#3F76FE] bg-[#E0EAFA] rounded-[2px] p-1">
                  转出
                </span>
                <span className="px-2 text-[14px] text-black">中心钱包</span>
              </h4>
              <Image src={imgArrowRight} alt="Arrow" />
            </div>
            <Image src={imgTransfer} alt="transfer" />
            <div className="flex items-center justify-between p-[10px] bg-[#F4F8FE] rounded w-[274px]">
              <h4>
                <span className="text-[14px] text-[#40CE6A] bg-[#DFEDEB] rounded-[2px] p-1">
                  转出
                </span>
                <span className="px-2 text-[14px] text-black">中心钱包</span>
              </h4>
              <Image src={imgArrowRight} alt="Arrow" />
            </div>
          </div>
        )}
        {!isChecked && (
          <h4 className="text-[#7481A2] text-xs py-3">场馆内钱包不支持互转</h4>
        )}
      </div>
      {!isChecked && (
        <div className="bg-white p-[15px] ">
          <h4 className="text-[#000] text-[14px]">转账金额</h4>
          <div className="max-w-[300px] py-3">
            <div className="border border-[#E4EAFF] py-[10px] px-3 text-[14px] flex items-center justify-between">
              <h4 className="text-[#999]">请输入转账金额</h4>
              <h4 className="text-blue">全部</h4>
            </div>
            <button
              className="transfer-btn w-full text-white text-base px-[14px] py-3 rounded-md mt-3"
              style={{
                background: `linear-gradient(270deg, #3D73FA 0.6%, #61B2FF 100%)`,
              }}
            >
              立即转账
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferDetails;
