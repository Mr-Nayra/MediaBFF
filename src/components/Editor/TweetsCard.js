import React from "react";
import TwitterLogo from "./Logos/TwitterLogo";
import { Content } from "next/font/google";
import { time } from "console";

const TweetsCard = () => {
  const array = [
    {
      mail: "@aadithi1234",
      time: "16h ago",
      content:
        "Sed magna turpis, pharetra nec molestie suscipit, laoreet ac orcindfv lorem ipsum",
    },
    {
      mail: "@aadithi1234",
      time: "16h ago",
      content:
        "Sed magna turpis, pharetra nec molestie suscipit, laoreet ac orcindfv lorem ipsum",
    },
  ];
  return (
    <div className="w-full bg-white p-10 rounded-2xl drop-shadow last:pb-0">
      {array.map((item) => (
        <div className="flex items-center gap-x-4 mb-4 border-b border-[#C9C9C9] pb-4">
          <TwitterLogo />
          <div className="w-full">
            <h3>
              {item.mail} {item.time}
            </h3>
            <p className="text-[#494949] text-base">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TweetsCard;
