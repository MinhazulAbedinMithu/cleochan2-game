"use client";
import React, { useState } from "react";
import "./wallet.css";
import { TWalletItem, walletData } from "./walletData";

const WalletDetails = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-6">
        <h4 className="text-[#000] text-[14px]">钱包明细</h4>
        <div className="flex items-center justify-end gap-2">
          <span className="text-[14px] text-[#7481A2]">隐藏无余额场馆</span>
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
        <div className="flex items-center justify-between flex-wrap gap-x-2 gap-y-3">
          {walletData.map((wallet: TWalletItem, index: number) => (
            <div key={index} className="wallet-card-small">
              <h4 className="text-[#7481A2] text-[14px]">{wallet.title}</h4>
              <p className="text-[#9FA4BD] flex items-center gap-1">
                <span className="text-xs">¥</span>
                <span className="text-[17px]">{wallet.amount}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WalletDetails;
