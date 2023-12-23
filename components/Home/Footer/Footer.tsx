import React from "react";
import imgMgaLogo from "@/assets/footer/mga_logo.png";
import imgBriishLogo from "@/assets/footer/british.png";
import imgPagcorLogo from "@/assets/footer/pagcor.png";
import Image from "next/image";

const footerCompanyData = [
  {
    logo: imgMgaLogo,
    title: "马耳他牌照(MGA)认证",
  },
  {
    logo: imgBriishLogo,
    title: "英属维尔京群岛(BVI)认证",
  },
  {
    logo: imgPagcorLogo,
    title: "菲律宾(PAGCOR)监督牌照",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#313249] w-full py-3">
      <div className=" max-w-[1024px] w-full mx-auto text-center text-[#898998] text-[12px] py-2">
        <p>
          皇创反波胆拥有欧洲马耳他（MGA）和菲律宾政府（PAGCOR)颁发的合法执照。
        </p>
        <p>
          注册于英属维尔京群岛，是受国际行业协会认可的合法公司。进行注册并娱乐前，请确保您年满18周岁！
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          {footerCompanyData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center "
            >
              <Image src={item.logo} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <p className=" text-center ">
          版权所有 © 2023-2025 皇创反波胆保留所有权
        </p>
      </div>
    </div>
  );
};

export default Footer;
