import Image, { StaticImageData } from "next/image";
import React from "react";

const SectionTitle: React.FC<{
  titleImg: StaticImageData;
  tagline: string;
}> = ({ titleImg, tagline }) => {
  return (
    <div className="section-title flex flex-col items-center justify-center pt-3">
      <Image src={titleImg} alt="Top Games" />
      <p className="text-primary">您想要的皇创都有，带给您丰富的游戏体验</p>
    </div>
  );
};

export default SectionTitle;
