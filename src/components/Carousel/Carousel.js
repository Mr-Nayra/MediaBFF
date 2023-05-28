"use client";
import React, { useRef } from "react";
import Card from "../Card/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const Swipe = () => {
  const swiperRef = useRef();

  return (
    <>
      <button onClick={() => swiperRef.current.slideNext()}>
        Go to Next Slide
      </button>
      <Swiper
        slidesPerView={3}
        onSwiper={(swiper) => {
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
      <button onClick={() => swiperRef.current.slidePrev()}>
        Go to Prev Slide
      </button>
    </>
  );
};

const Carousel = () => {
  return (
    <div className="container">
      <Swipe />
    </div>
  );
};

export default Carousel;
