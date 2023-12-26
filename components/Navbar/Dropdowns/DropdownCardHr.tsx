import Image from "next/image";
import React from "react";
import NavBlueButton from "../NavBlueButton";
import Link from "next/link";

const DropdownCardHr = ({
  imgCard,
  imgTag,
  imgBrand,
  title,
  tagline,
  buttonTitle,
  buttonLink,
}: any) => {
  return (
    <div className="flex items-center justify-between">
      <Image src={imgCard} alt="img" width={210} height={210} />
      <div>
        {imgTag && <Image src={imgTag} alt="Tag" />}
        <div className="flex pt-[10px] pb-5 items-start justify-start gap-x-2">
          <Image
            src={imgBrand}
            alt="Brand"
            className="h-[44px] w-[44px] bg-white rounded-lg shadow-lg"
          />
          <div className="text-[#6C7BA8]">
            <h4 className="text-[18px]">{title}</h4>
            <p className="text-xs">{tagline}</p>
          </div>
        </div>
        <NavBlueButton>
          <Link href={buttonLink}>{buttonTitle}</Link>
        </NavBlueButton>
      </div>
    </div>
  );
};

export default DropdownCardHr;
