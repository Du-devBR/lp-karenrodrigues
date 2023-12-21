"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CarrouselLocation({ children }: CarrouselProps) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className=" mySwiper"
      >
        {children?.map((child, index) => (
          <SwiperSlide key={index}>
            <div className="w-full min-h-[372px] max-md:min-h-[255px]">
              {child}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
