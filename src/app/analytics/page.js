import SideBar from "@/components/Dashboard/SideBar";
import TopBar from "@/components/Dashboard/TopBar";
import React from "react";

const MainDiv = () => {
  return (
    <div className="py-10 px-28 w-full">
      <TopBar />
      <div className="flex gap-16 mt-20 justify-between"></div>
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
