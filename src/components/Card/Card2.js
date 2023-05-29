import React from "react";
import UserImage from "../Svgs/UserImage";

const Card2 = (props) => {
  return (
    <div className="w-[350px] bg-white rounded-2xl drop-shadow mt-5 overflow-hidden mb-1">
      {/* <Image /> */}
      <div className="h-32 bg-red-500"></div>
      <div className="p-8">
        <h3 className="font-semibold text-xl">{props.title}</h3>
        <div className="flex w-[80%] justify-between items-center mt-6">
          <p>{props.time}</p>
          <p>:</p>
          <p>{props.date}</p>
        </div>
        <div className="flex items-center mt-6 gap-x-5">
          <UserImage />
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
