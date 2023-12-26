import React from "react";
import NavBlueButton from "../NavBlueButton";
import Link from "next/link";
import Image from "next/image";

const DropdownCardVr = ({
  imgCard,
  imgTag,
  imgTag2,
  imgBrand,
  title,
  tagline,
  buttonTitle,
  buttonLink,
}: any) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex gap-x-2">
        {imgTag && <Image src={imgTag} alt="Tag" />}
        {imgTag2 && <Image src={imgTag2} alt="Tag" />}
      </div>
      <div className="flex pt-[10px] pb-5 items-center justify-center gap-x-2">
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

      <Image src={imgCard} alt="img" width={210} height={172} />
      {/* <NavBlueButton>
          <Link href={buttonLink}>{buttonTitle}</Link>
        </NavBlueButton> */}
    </div>
  );
};

export default DropdownCardVr;
