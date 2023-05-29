"use client";
import React, { useRef } from "react";
import Card from "../Card/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const Carousel = () => {
  const swiperRef = useRef();

  return (
    <div className="w-full flex mt-24 gap-x-10">
      <button onClick={() => swiperRef.current.slidePrev()}>
        <LeftArrow />
      </button>
      <Swiper
        slidesPerView={3}
        onSwiper={(swiper) => {
          console.log(swiper);
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
      <button onClick={() => swiperRef.current.slideNext()}>
        <RightArrow />
      </button>
    </div>
  );
};

export default Carousel;
