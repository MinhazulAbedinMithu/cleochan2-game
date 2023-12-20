"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import imgSlider1 from "@/assets/banner/slide_1.png";
const bannerSliderData = [
  {
    img: imgSlider1,
  },
  {
    img: imgSlider1,
  },
  {
    img: imgSlider1,
  },
  {
    img: imgSlider1,
  },
  {
    img: imgSlider1,
  },
];

const BannerSlider: React.FC = () => {
  return (
    <div className="w-full bg-[#]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full"
      >
        {bannerSliderData.map((slider, index) => (
          <SwiperSlide className="w-full" key={index}>
            <Image src={slider.img} alt="Slider" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
