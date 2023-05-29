import React from "react";
import Facebook from "./Logos/Facebook";
import LinkedIn from "./Logos/LinkedIn";
import Twitter from "./Logos/Twitter";

const ArticleCard = (props) => {
  return (
    <div className="bg-white p-10 rounded-2xl drop-shadow mt-5">
      <h2 className="text-[#494949] text-base font-semibold">
        {props.heading}
      </h2>
      <h3 className="text-base mt-6">
        By: <span>{props.people.map((item) => item + " ")}</span> | 12 DAYS AGO
      </h3>
      <p className="mt-4 text-[#494949]">{props.content}</p>
      <div className="flex gap-4 items-center mt-6">
        <Facebook />
        <div className="bg-black h-4 w-[2px]" />
        <LinkedIn />
        <div className="bg-black h-4 w-[2px]" />
        <Twitter />
      </div>
    </div>
  );
};

export default ArticleCard;
