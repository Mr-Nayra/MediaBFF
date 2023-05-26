import Card from "@/components/Card/Card";
import SideBar from "@/components/SideBar/SideBar";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-5">
        <div>
          <button className="rounded-2xl bg-black text-white font-semibold text-xl py-4 px-6">
            Add Media
          </button>
        </div>
        <div>
          <button className="rounded-2xl bg-black text-white font-semibold text-xl py-4 px-6">
            View Pitches
          </button>
        </div>
        <div>
          <button className="rounded-2xl bg-black text-white font-semibold text-xl py-4 px-6">
            View Status
          </button>
        </div>
      </div>
      <div>
        <p>UserName</p>
      </div>
    </div>
  );
};

const JobsDiv = () => {
  return (
    <div className="min-w-[30vw]">
      <h2 className="font-semibold text-xl">Jobs</h2>
      <JobDesDiv />
      <JobDesDiv />
    </div>
  );
};

const JobDesDiv = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="w-20 h-20 bg-red-500 rounded-2xl"></div>
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

const UpcommingSessions = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl">Upcoming Sessions</h2>
      <div className="flex gap-5">
        <Card smallCard />
        <Card smallCard />
      </div>
    </div>
  );
};

const MainDiv = () => {
  return (
    <div className="py-10 px-28 w-full">
      <TopBar />
      <div className="flex gap-16 mt-20 justify-between">
        <div>
          <UpcommingSessions />
          <TrendingArticles />
        </div>
        <JobsDiv />
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
