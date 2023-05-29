"use client";
import React, { useRef } from "react";
import Card from "../Card/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Card2 from "../Card/Card2";

const Carousel = (props) => {
  const swiperRef = useRef();
  
  return (
    <div className={`${props.className} w-full flex gap-x-10 justify-stretch`}>
      <button onClick={() => swiperRef.current.slidePrev()}>
        <LeftArrow />
      </button>
      <Swiper
        slidesPerView={3}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {props.data.map((item) => (
          <SwiperSlide>
            {props.smallCard ? (
              <Card2
                title={item.title}
                time={item.time}
                date={item.date}
                name={item.name}
              />
            ) : (
              <Card
                title={item.title}
                des={item.des}
                date={item.date}
                hasButton={props.hasButton}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={() => swiperRef.current.slideNext()}>
        <RightArrow />
      </button>
    </div>
  );
};

export default Carousel;
