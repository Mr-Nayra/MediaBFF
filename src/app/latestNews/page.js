import SideBar from "@/components/Dashboard/SideBar";
import TopBar from "@/components/Dashboard/TopBar";
import React from "react";

const NewsDiv = () => {
  return (
    <div className="flex gap-4 items-center mt-5">
      <div className="h-32 w-32 bg-red-500 rounded-2xl"></div>
      <div>
        <h2 className="font-semibold text-base">Title</h2>
        <p className="mt-2">
          consectetur adipiscing elit, sed do eiusmod. consectetur adipiscing
          elit, sed do
        </p>
        <p className="mt-4">21st Jan 2022 #user234</p>
      </div>
    </div>
  );
};

const MainDiv = () => {
  return (
    <div className="py-10 px-28 w-full max-w-[80vw]">
      <TopBar />
      <div className="mt-20">
        <h2 className="font-semibold text-xl">Today’s Top News</h2>
        <NewsDiv />
        <NewsDiv />
        <NewsDiv />
        <NewsDiv />
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainDiv />
    </div>
  );
};

export default page;
