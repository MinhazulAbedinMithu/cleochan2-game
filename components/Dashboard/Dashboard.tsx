"use client";
import React, { useState } from "react";
import "./dashboard.css";
import imgSidebar from "@/assets/dashboard/sidebar.png";
import TopThreeCard from "./TopThreeCard";
import Image from "next/image";
import WalletDetails from "./WalletDetails";
import TransferDetails from "./TransferDetails";
import RightSider from "./RightSider/RightSider";
import Modal from "./Modal";
import imgInfo from "@/assets/dashboard/info.png";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container mx-auto p-3 bg-[#f1f6fe] flex items-start justify-between gap-5">
      <div className="max-w-[280px] w-full">
        <Image src={imgSidebar} alt="sidebar" />
      </div>
      <div className="w-full">
        <div className=" p-[15px] bg-white rounded-sm">
          <h4 className="mb-[15px] border-l-4 border-l-[#4078FB] pl-2">转账</h4>
          <div className="border-t-2 border-t-[#EEE]">
            <h4 className="py-3 text-black text-base font-medium">钱包金额</h4>
            <TopThreeCard />
          </div>
          <WalletDetails />
        </div>
        <TransferDetails />
      </div>
      <div className="max-w-[250px] w-full">
        <RightSider />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal max-w-[670px] w-full rounded-md">
          <div className="modal-head px-5 py-[15px] rounded-lg">
            <h4 className="text-[18px] text-white">帮助中心</h4>
          </div>
          <div className="p-[15px] modal-body">
            <div>
              <h4>怎么转账？</h4>
              <p>
                1.登录开云账号——点击官网首页上方会员账号——我的钱包——点击转账——转账页面
              </p>
              <p>2. 手动转账步骤：</p>
              <p>
                a.在转账页面（向右）打开“自动转账”开关（进入某游戏时，中心钱包的金额自动带入到对应的游戏钱包中）
              </p>
            </div>
            <div>
              <h4>怎么转账？</h4>
              <p>
                开启自动转账后，当您进入取款页面时，会自动回收所有游戏的余额，直接进行取款申请的操作即可，若因网络原因造成游戏的余额没有及时回收到中心钱包，点击钱包金额右方的“一键回收”按钮即可进行二次回收游戏余额。
              </p>
            </div>
            <h3>开启自动转账后怎么取款？</h3>
            <p>开启自动转账后怎么取款？</p>
          </div>
          <div className="w-full p-[15px] border-t border-[#DDD] text-[#494D62] text-[14px]">
            <Image src={imgInfo} alt="info" className="inline" />
            <span>如有其他问题，请联系</span>
            <span className="text-blue">客服</span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
