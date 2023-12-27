import Image from "next/image";
import React from "react";
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
        <div className="py-6">
          <Image src={brandingImg} alt="Branding" />
        </div>
        <div className="flex items-center justify-start gap-x-3 text-primary py-3">
          <div className="text-center">
            <div className="card-box-bg flex items-center justify-center">
              <Image src={categories[0].img} alt="brand" />
            </div>
            <span className="text-[14px]">{categories[0].title}</span>
          </div>
          <div className="text-center">
            <div className="card-box-bg flex items-center justify-center">
              <Image src={categories[0].img} alt="brand" />
            </div>
            <span className="text-[14px]">{categories[0].title}</span>
          </div>
          <div className="text-center">
            <div className="card-box-bg flex items-center justify-center">
              <Image src={categories[0].img} alt="brand" />
            </div>
            <span className="text-[14px]">{categories[0].title}</span>
          </div>
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
