import React from "react";
import Link from "next/link";
import ArrowRight from "./ArrowRight";

const Card = (props) => {
  return (
    <div
      className={`${
        props.smallCard ? "w-72" : "w-96"
      } bg-white rounded-2xl drop-shadow mt-5 overflow-hidden mb-1`}
    >
      {/* <Image /> */}
      <div className={`${props.smallCard ? "h-32" : "h-48"} bg-red-500 `}></div>
      <div className="p-8">
        <h3 className="font-semibold text-xl">{props.title}:</h3>
        <p className="mt-3">{props.des}</p>
        <div className="flex justify-between mt-3 items-center">
          <p>{props.date}</p>
          {props.hasButton && (
            <Link href="/">
              <button className="purple-button w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#7C48E8]">
                <ArrowRight />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
