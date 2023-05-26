import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div
      className={`${
        props.smallCard ? "w-72" : "w-96"
      } bg-white rounded-2xl drop-shadow mt-5 overflow-hidden`}
    >
      {/* <Image /> */}
      <div className={`${props.smallCard ? "h-32" : "h-48"} bg-red-500 `}></div>
      <div className="p-8">
        <h3 className="font-semibold text-xl">Lorem ipsum dolor:</h3>
        <p className="mt-3">consectetur adipiscing elit, sed do eiusmod.</p>
        <div className="flex justify-between mt-3">
          <p>Jan 12th, 2022</p>
          {props.hasButton && (
            <button className="purple-button w-14 h-14 rounded-full">-</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
