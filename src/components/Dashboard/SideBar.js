"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="min-w-[20vw] py-10 bg-[#FCFCFC] drop-shadow h-screen sticky top-0">
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
          <p
            className={`${
              pathname === "/overview" ? "text-[#7C48E8]" : "text-[#656565]"
            } text-xl font-semibold mt-[6vh]`}
          >
            OVERVIEW
          </p>
        </Link>
        <Link href="/sessions">
          <p
            className={`${
              pathname === "/sessions" ? "text-[#7C48E8]" : "text-[#656565]"
            } text-xl font-semibold mt-[6vh]`}
          >
            SESSIONS
          </p>
        </Link>
        <Link href="/latestNews">
          <p
            className={`${
              pathname === "/latestNews" ? "text-[#7C48E8]" : "text-[#656565]"
            } text-xl font-semibold mt-[6vh]`}
          >
            LATEST NEWS
          </p>
        </Link>
        <Link href="/analytics">
          <p
            className={`${
              pathname === "/analytics" ? "text-[#7C48E8]" : "text-[#656565]"
            } text-xl font-semibold mt-[6vh]`}
          >
            ANALYTICS
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
