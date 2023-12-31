"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function CarrouselServices({ children }: CarrouselProps) {
  return (
    <div className="w-full max-lg:w-full rounded-lg overflow-hidden">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={1}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {children?.map((child, index) => (
          <SwiperSlide key={index} className="z-0">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
