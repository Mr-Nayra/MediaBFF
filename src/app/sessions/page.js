import Carousel from "@/components/Carousel/Carousel";
import SideBar from "@/components/Dashboard/SideBar";
import TopBar from "@/components/Dashboard/TopBar";
import React from "react";

const CompletedSessions = (props) => {
  return (
    <div className="mt-20">
      <h2 className="font-semibold text-xl">Completed Session</h2>
      <Carousel data={props.data} smallCard className="mt-5" />
    </div>
  );
};

const UpcommingSessions = (props) => {
  return (
    <div className="mt-20">
      <h2 className="font-semibold text-xl">Upcoming Sessions</h2>
      <Carousel data={props.data} smallCard className="mt-5" />
    </div>
  );
};

const MainDiv = (props) => {
  return (
    <div className="py-10 xl:px-10 2xl:px-28 w-full max-w-[80vw]">
      <TopBar />
      <UpcommingSessions data={props.data} />
      <CompletedSessions data={props.data} />
    </div>
  );
};

const page = () => {
  const data = [
    {
      title: "Lorem Ipsum Dolor",
      time: "2:30 pm",
      name: "Name Here ; Senior Manager, Women’s Health",
      date: "Jan 12th, 2022",
    },
    {
      title: "Lorem Ipsum Dolor",
      time: "2:30 pm",
      name: "Name Here ; Senior Manager, Women’s Health",
      date: "Jan 12th, 2022",
    },
    {
      title: "Lorem Ipsum Dolor",
      time: "2:30 pm",
      name: "Name Here ; Senior Manager, Women’s Health",
      date: "Jan 12th, 2022",
    },
    {
      title: "Lorem Ipsum Dolor",
      time: "2:30 pm",
      name: "Name Here ; Senior Manager, Women’s Health",
      date: "Jan 12th, 2022",
    },
    {
      title: "Lorem Ipsum Dolor",
      time: "2:30 pm",
      name: "Name Here ; Senior Manager, Women’s Health",
      date: "Jan 12th, 2022",
    },
  ];

  return (
    <div className="flex">
      <SideBar />
      <MainDiv data={data} />
    </div>
  );
};

export default page;
