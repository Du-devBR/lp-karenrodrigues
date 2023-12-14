"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ReactNode } from "react";

interface CarouselProps {
  children?: ReactNode[];
}

export default function Carousel({ children }: CarouselProps) {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 16,
          },
          1444: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
        slidesPerView={1.2}
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
