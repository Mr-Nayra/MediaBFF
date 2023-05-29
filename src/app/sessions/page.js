import Card from "@/components/Card/Card";
import Carousel from "@/components/Carousel/Carousel";
import SideBar from "@/components/Dashboard/SideBar";
import React from "react";

const CompletedSessions = () => {
  return (
    <div className="mt-20">
      <h2 className="font-semibold text-xl">CompletedSession</h2>
      <Carousel />
    </div>
  );
};

const UpcommingSessions = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl">Upcoming Sessions</h2>
      <Carousel />
    </div>
  );
};

const MainDiv = () => {
  return (
    <div className="py-10 px-28 w-full max-w-[80vw]">
      <UpcommingSessions />
      <CompletedSessions />
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
