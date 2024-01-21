"use client";
import Image from "next/image";
import "./modal.css";
import React, { useEffect } from "react";
import imgInfo from "@/assets/modalInfo.png";
import imgBox from "@/assets/popBox.png";

const PopupModal: React.FC<any> = ({
  isOpen,
  onClose,
  children,
  isFullScreen,
}) => {
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (isOpen && e.target.classList.contains("modal-overlay")) {
        // onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const modalClasses = isFullScreen
    ? "fixed inset-0 z-50 overflow-y-auto modal-overlay bg-black bg-opacity-50"
    : "fixed inset-0 z-50 flex items-center justify-center modal-overlay bg-black bg-opacity-50";

  const modalContentClasses = isFullScreen
    ? "bg-white p-6  max-w-[550px] w-full max-w-screen-xl mx-auto mt-[100px] rounded-md relative"
    : "bg-white p-6 rounded shadow-lg";
  return (
    <>
      {isOpen && (
        <div className={modalClasses}>
          <div className={`${modalContentClasses}  text-slate-600`}>
            <div className="flex items-start justify-between">
              <div className="flex items-center justify-start gap-2">
                <Image src={imgInfo} alt="icon" className="inline" />
                <span>规则</span>
              </div>
              <div>
                <span>转账</span>
              </div>
              <button
                // className="absolute top-4 right-4 text-gray-600"
                onClick={onClose}
              >
                Close
              </button>
            </div>
            <div className="modal-top flex flex-col justify-between pt-[20px] px-6 relative">
              <div className="text-slate-300">
                <Image src={imgBox} alt="icon" className="inline" />{" "}
                <span className="pl-1">余额 | 一键回收余额 </span>
                <h4>27658.42</h4>
              </div>

              <div className="w-full flex items-center justify-between pb-3 text-[14px] text-slate-200">
                <span>中心钱包： 0元</span>
                <span>锁定钱包： 0元</span>
                <span>福利中心： 0元</span>
              </div>
              <div className="absolute top-[8px] right-[24px] text-xs">
                交易记录
              </div>
            </div>
            <h4 className="px-6 py-4">转账到</h4>
            <h4 className="text-[#999] py-2 px-2 mx-6 bg-slate-200 rounded-md text-sm">
              请输入游戏金额，最低1元
            </h4>
            <div className="flex items-center justify-between mx-6 py-2  border-b border-slate-300">
              <h4 className="text-sm text-slate-500">充值帐户可用余额0</h4>
              <button className="border border-blue text-blue px-2 py-[3px] rounded-md">
                去充值
              </button>
            </div>
            <div className="py-8 px-6 w-full flex items-end justify-center flex-col">
              <input type="range" name="range" id="range" className="w-full" />
              <span className="text-right">0元</span>
            </div>
            <div className="px-6 py-4">
              拖动使用优惠金，优惠金需完成3倍投注额
            </div>
            <div className="px-6 py-4">
              <p>剩余未完成投注额：0</p>
              <p>本次转账需完成投注额：0</p>
            </div>
            <div className="w-full flex justify-center py-4">
              <button className="max-w-[340px] mx-auto w-full text-blue border border-blue bg-[#E8F1FF] rounded-md px-4 py-2">
                确认转入
              </button>
            </div>
            <div className="w-full bg-[#E8F1FF] flex justify-center py-4">
              <button className="max-w-[340px] mx-auto w-full text-white border border-blue bbtn-blue px-4 py-2">
                确认转入
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
