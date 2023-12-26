"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CarrouselServices({ children }: CarrouselProps) {
  return (
    <div className="w-[49%] max-md:w-full">
      <Swiper
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1.2,
        //     spaceBetween: 16,
        //   },
        //   768: {
        //     slidesPerView: 2.2,
        //     spaceBetween: 16,
        //   },
        //   1024: {
        //     slidesPerView: 3.2,
        //     spaceBetween: 16,
        //   },
        //   1444: {
        //     slidesPerView: 4,
        //     spaceBetween: 16,
        //   },
        // }}
        slidesPerView={1}
        spaceBetween={16}
        // navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className=" "
      >
        {children?.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
      {/* <style>
        {`
          .swiper-pagination-bullet-active {
            background-color: #000 !important;
          }
          `}
      </style> */}
    </div>
  );
}
