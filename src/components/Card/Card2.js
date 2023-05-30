import React from "react";
import UserImage from "../Svgs/UserImage";

const Card2 = (props) => {
  return (
    <div className="w-full max-w-[350px] bg-white rounded-2xl drop-shadow mt-5 overflow-hidden mb-1">
      {/* <Image /> */}
      <div className="h-32 bg-red-500"></div>
      <div className="p-8">
        <h3 className="font-semibold text-xl">{props.title}</h3>
        <div className="flex gap-x-1 items-center mt-6">
          <p>{props.time}</p>
          <p>:</p>
          <p>{props.date}</p>
        </div>
        <div className="flex items-center mt-6 gap-x-5">
          <div className="min-w-[34px]">
            <UserImage />
          </div>
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
