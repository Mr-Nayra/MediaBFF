import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="w-96 bg-white p-10 rounded-2xl drop-shadow mt-5">
      <Image />
      <h3>Lorem ipsum dolor</h3>
      <p>consectetur adipiscing elit, sed do eiusmod.</p>
      <div className="flex justify-between">
        <p>Jan 12th, 2022</p>
        <button className="purple-button w-14 h-14 rounded-full">-</button>
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Carousel;
