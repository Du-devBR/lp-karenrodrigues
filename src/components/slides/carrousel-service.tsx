"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        className=" mySwiper"
      >
        {children?.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
