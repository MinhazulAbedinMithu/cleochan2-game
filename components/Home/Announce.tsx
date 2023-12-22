"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import iconAnnounce from "@/assets/icons/announce.png";
import Link from "next/link";

type TAnnounce = { title: string; endTime: string; tag: string; info: string };

const announceDemoData = [
  {
    title: "取消订单",
    endTime: "2023-01-08 17:30:00",
    tag: "【泰乙】",
    info: "",
  },
  {
    title: "取消订单",
    endTime: "2023-01-08 17:30:00",
    tag: "【泰乙】",
    info: "",
  },
  {
    title: "取消订单",
    endTime: "2023-01-08 17:30:00",
    tag: "【泰乙】",
    info: "",
  },
  {
    title: "取消订单",
    endTime: "2023-01-08 17:30:00",
    tag: "【泰乙】",
    info: "",
  },
  {
    title: "取消订单",
    endTime: "2023-01-08 17:30:00",
    tag: "【泰乙】",
    info: "",
  },
  {
    title: "取消订单",
    endTime: "2023-01-08 17:30:00",
    tag: "【泰乙】",
    info: "",
  },
];

const Announce: React.FC = () => {
  const [announceData, setAnnounceData] = useState<TAnnounce[]>([]);
  useEffect(() => {
    announceDemoData.length > 3 &&
      setAnnounceData(announceDemoData.splice(0, 3));
  }, []);
  return (
    <div className="container py-10">
      <div
        className="flex items-center justify-start gap-x-4 relative py-[10px] px-4"
        style={{
          borderRadius: "20px",
          border: "1px solid #D1D5F5",
          background: "linear-gradient(180deg, #FFF 0%, #E7F0FF 100%)",
          boxShadow:
            "0px 4px 8px 0px rgba(136, 149, 205, 0.20), 0px 0px 10px 0px rgba(255, 255, 255, 0.72) inset",
        }}
      >
        <Image src={iconAnnounce} alt="Announce" className="absolute" />
        <div className="w-full flex pl-[50px] items-center justify-between">
          {announceData.map((item, index) => (
            <div key={index}>
              <p className="text-primary text-[14px]">
                <span>{index + 1}. </span>
                <span className="font-semibold">{item.title}</span>
                <span>{item.endTime}</span>
                <span className="font-medium inline">{item.tag}</span>
              </p>
            </div>
          ))}
          {announceDemoData.length > 3 && (
            <Link
              href="/"
              className="text-blue border border-blue rounded-xl text-[14px] py-[3px] px-[10px]"
            >
              更多
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Announce;
