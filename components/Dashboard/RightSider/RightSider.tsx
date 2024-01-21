import Image from "next/image";
import React from "react";
import imgRightIcon from "@/assets/dashboard/arrow-right.png";

const RightSider = () => {
  return (
    <div>
      <div className="p-[15px] bg-white min-h-[360px] rounded-sm">
        <h4 className="text-black text-base pb-[15px]">转账记录</h4>
        <div className="text-[#7481A2] text-[14px] py-3 border-t-2 border-t-[#EEE]">
          <h4>暂时没有新的转账记录</h4>
          <div className="pt-[15px] ">
            <span>查看更多</span>
            <Image src={imgRightIcon} alt="icon" className="inline ml-1" />
          </div>
        </div>
      </div>
      <div className="p-[15px] mt-[15px] bg-white min-h-[360px] rounded-sm">
        <h4 className="text-black text-base pb-[15px]">帮助中心</h4>
        <div className="text-[#7481A2] text-[14px] py-3 border-t-2 border-t-[#EEE]">
          <h4 className="text-[#494D62] text-[14px] pb-8">怎么转账？</h4>
          <h4 className="text-[#494D62] text-[14px] pb-8">
            开启自动转账后怎么取款？
          </h4>
          <h4 className="text-[#494D62] text-[14px] pb-8">
            转账到游戏，金额变少？
          </h4>
          <h4 className="text-[#494D62] text-[14px] pb-8">
            转账没有成功，但是钱却没了怎…
          </h4>
          <h4 className="text-[#494D62] text-[14px] pb-8">
            中心钱包，转游戏钱包失败？
          </h4>

          <div className="">
            <span>查看更多</span>
            <Image src={imgRightIcon} alt="icon" className="inline ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSider;
