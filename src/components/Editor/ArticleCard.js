import React from "react";

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
    </div>
  );
};

export default ArticleCard;
