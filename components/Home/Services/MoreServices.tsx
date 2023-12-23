import React from "react";
import imgServ1 from "@/assets/moreServices/1.png";
import imgServ2 from "@/assets/moreServices/2.png";
import imgServ3 from "@/assets/moreServices/3.png";
import imgServ4 from "@/assets/moreServices/4.png";
import Image from "next/image";
import "./service.css";
const servicesData = [
  {
    icon: imgServ1,
    title: "极速存取转款",
    description:
      "最新技术自主研发的财务处理系统真正做到极速存、取、转独家网络优化技术，为您提供一流的游戏体验，最大优化网络延迟。",
  },
  {
    icon: imgServ2,
    title: "海量赛事种类",
    description:
      "每天为您提供近千场精彩体育赛事，更有真人、彩票、电子游戏等多种娱乐方式选择，让您拥有完美游戏体验。",
  },
  {
    icon: imgServ3,
    title: "加密安全管理",
    description:
      "独家开发，采用128位加密技术和严格的安全管理体系，客户资金得到最完善的保障，让您全情尽享娱乐、赛事投注、无后顾之忧！",
  },
  {
    icon: imgServ4,
    title: "移动端电脑端任您选择",
    description:
      "让您畅享Web，H5，随时随地下单随心所欲！7x24小时在线客服提供最贴心，最优质的服务。",
  },
];
const MoreServices = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-10 gap-y-6 py-14 px-2">
      {servicesData.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-start px-6 py-5 gap-x-5 item-background"
        >
          <div>
            <Image src={item.icon} alt={item.title} height={88} width={88} />
          </div>
          <div>
            <h4 className="text-[#303442] text-[18px]">{item.title}</h4>
            <p className="text-[#6C7BA8] text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreServices;
