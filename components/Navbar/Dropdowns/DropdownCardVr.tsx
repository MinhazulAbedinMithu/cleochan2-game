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
  imgWidth = 210,
  imgHeight = 172,
  buttonTitle,
  buttonLink,
}: any) => {
  return (
    <div className="flex flex-col items-center justify-end">
      <div className="flex gap-x-2">
        {imgTag && <Image src={imgTag} alt="Tag" />}
        {imgTag2 && <Image src={imgTag2} alt="Tag" />}
      </div>
      <div className="flex pt-[10px] pb-5 items-start justify-center gap-x-2">
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

      <Image src={imgCard} alt="img" />
      {/* <Image src={imgCard} alt="img" width={imgWidth} height={imgHeight}/> */}
      {/* <NavBlueButton>
          <Link href={buttonLink}>{buttonTitle}</Link>
        </NavBlueButton> */}
    </div>
  );
};

export default DropdownCardVr;
