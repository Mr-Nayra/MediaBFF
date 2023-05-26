import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="w-[25vw] py-10 bg-[#FCFCFC] drop-shadow h-screen sticky top-0">
      <div className="flex items-center justify-around">
        <p className="px-6 py-3 font-semibold">logo</p>
        <Link href="/">
          <button className="purple-button-outline px-6 py-3 font-semibold">
            Go To Home
          </button>
        </Link>
      </div>
      <div className="mt-[10vh] flex items-center flex-col">
        <Link href="/overview">
          <p className="text-xl text-[#7C48E8] font-semibold mt-[6vh]">
            OVERVIEW
          </p>
        </Link>
        <Link href="/sessions">
          <p className="text-xl text-[#7C48E8] font-semibold mt-[6vh]">
            SESSIONS
          </p>
        </Link>
        <Link href="/latestNews">
          <p className="text-xl text-[#7C48E8] font-semibold mt-[6vh]">
            LATEST NEWS
          </p>
        </Link>
        <Link href="/analytics">
          <p className="text-xl text-[#7C48E8] font-semibold mt-[6vh]">
            ANALYTICS
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
