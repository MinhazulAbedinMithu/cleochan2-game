import React from "react";
import { TGameCard } from "./tabInfo";
import Image from "next/image";

const GameCard: React.FC<{ info: TGameCard }> = ({ info }) => {
  const { title, image, description } = info;

  return (
    <div className="flex flex-col px-2 md:flex-row items-center justify-between relative white-background">
      <div className="w-full md:w-[750px] relative  flex items-center justify-center">
        <div className="blue-background relative flex items-center justify-center px-4">
          <Image src={image} alt="game" className="" />
        </div>
      </div>
      <div className="w-full sm:text-center md:w-2/5">
        <Image src={title} alt="title" />
        <p className="text-primary text-base leading-6 py-3 text-left">
          {description}
        </p>
        <div className="flex items-center justify-start gap-x-3 text-primary py-3">
          <div className="text-center">
            <div className="card-box-bg flex items-center justify-center">
              {/* 00 */}
            </div>
            <span className="text-[14px]">XXXX</span>
          </div>
          <div className="text-center">
            <div className="card-box-bg flex items-center justify-center">
              {/* 00 */}
            </div>
            <span className="text-[14px]">XXXX</span>
          </div>
          <div className="text-center">
            <div className="card-box-bg flex items-center justify-center">
              {/* 00 */}
            </div>
            <span className="text-[14px]">XXXX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
