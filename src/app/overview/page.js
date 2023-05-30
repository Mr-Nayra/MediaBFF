import Card from "@/components/Card/Card";
import SideBar from "@/components/Dashboard/SideBar";
import TopBar from "@/components/Dashboard/TopBar";
import React from "react";

const JobsDiv = () => {
  return (
    <div className="2xl:min-w-[30vw]">
      <h2 className="font-semibold text-xl">Jobs</h2>
      <JobDesDiv />
      <JobDesDiv />
    </div>
  );
};

const JobDesDiv = () => {
  return (
    <div className="flex gap-5 mt-5 items-start">
      <div className="min-w-[80px] min-h-[80px] bg-red-500 rounded-2xl"></div>
      <div>
        <h3 className="font-semibold text-base">Job Title</h3>
        <p>HP</p>
        <p>Bengaluru, Karnataka, India</p>
      </div>
    </div>
  );
};

const ArticleDiv = () => {
  return (
    <div className="flex mt-5 gap-5 items-center">
      <div className="w-20 h-20 bg-red-500 rounded-xl"></div>
      <div>
        <h3 className="font-semibold text-base">Title</h3>
        <p>consectetur adipiscing elit, sed do eiusmod.</p>
        <p> consectetur adipiscing elit, sed do</p>
        <p className="mt-4">21st Jan 2022 #user234</p>
      </div>
    </div>
  );
};

const TrendingArticles = () => {
  return (
    <div className="mt-20">
      <h2 className="font-semibold text-xl">Trending Articles</h2>
      <ArticleDiv />
      <ArticleDiv />
    </div>
  );
};

const UpcommingSessions = (props) => {
  return (
    <div>
      <h2 className="font-semibold text-xl">Upcoming Sessions</h2>
      <div className="flex gap-5">
        <Card
          smallCard
          title={props.data[0].title}
          date={props.data[0].date}
          des={props.data[0].des}
        />
        <Card
          smallCard
          title={props.data[1].title}
          date={props.data[1].date}
          des={props.data[1].des}
        />
      </div>
    </div>
  );
};

const MainDiv = (props) => {
  return (
    <div className="py-10 xl:px-10 2xl:px-28 w-full max-w-[80vw]">
      <TopBar />
      <div className="flex gap-16 mt-20 justify-between">
        <div>
          <UpcommingSessions data={props.data} />
          <TrendingArticles />
        </div>
        <JobsDiv />
      </div>
    </div>
  );
};

const page = () => {
  const data = [
    {
      title: "Lorem Ipsum Dolor",
      des: "consectetur adipiscing elit, sed do eiusmod.",
      date: "Jan 12th, 2022",
    },
    {
      title: "Lorem Ipsum Dolor",
      des: "consectetur adipiscing elit, sed do eiusmod.",
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
