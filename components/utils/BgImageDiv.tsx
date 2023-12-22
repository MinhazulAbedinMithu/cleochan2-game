import Image, { StaticImageData } from "next/image";
import React from "react";

const BgImageDiv: React.FC<{
  image: StaticImageData;
  children?: React.ReactNode;
}> = ({ image, children }) => {
  return (
    <div className="absolute -z-10 inset-0">
      <Image
        src={image}
        alt="always add alt"
        fill
        style={{ objectFit: "cover" }}
      />
      {children}
    </div>
  );
};

export default BgImageDiv;
