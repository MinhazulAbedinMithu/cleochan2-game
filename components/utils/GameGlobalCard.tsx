"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavBlueButton from "../Navbar/NavBlueButton";
import Link from "next/link";

const GameGlobalCard = ({
  cardImg,
  title,
  description,
  brandingImg,
  categories,
  btnTitle,
  btnLink,
}: any) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <div className="flex flex-col px-2 md:flex-row items-center justify-between relative">
      <div className="w-full md:w-[750px] relative  flex items-center justify-center">
        <div className="relative flex items-center justify-center px-4">
          <Image src={cardImg} alt="game" className="" />
        </div>
      </div>
      <div className="w-full sm:text-center md:w-2/5">
        <Image src={title} alt="title" />
        <p className="text-primary text-base leading-6 py-3 text-left">
          {description}
        </p>
        {brandingImg && (
          <div className="py-6">
            <Image src={brandingImg} alt="Branding" />
          </div>
        )}
        <div className="flex items-center justify-start gap-x-3 text-primary py-3">
          {categories.map((item: any, index: any) => (
            <div className="text-center" key={index}>
              <div
                className={`flex items-center justify-center  hover:bg-sky-500 rounded-2xl ${
                  index === selectedCategory ? "bg-sky-500" : "bg-white/50"
                }`}
                onClick={() => setSelectedCategory(index)}
              >
                <Image src={item.img} alt="brand" />
              </div>
              <span className="text-[14px]">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-start py-4">
          <NavBlueButton>
            <Link href={btnLink}>{btnTitle}</Link>
          </NavBlueButton>
        </div>
      </div>
    </div>
  );
};

export default GameGlobalCard;
