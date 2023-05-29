import SideBar from "@/components/Dashboard/SideBar";
import TopBar from "@/components/Dashboard/TopBar";
import React from "react";

const InterestOverTime = () => {
  return (
    <div>
      <h2>Interest over time</h2>
      <div></div>
    </div>
  );
};

const TopPublications = () => {
  return (
    <div>
      <h2>Top Publications</h2>
      <div></div>
    </div>
  );
};

const TrendingArticles = () => {
  return (
    <div>
      <h2>Trending Articles</h2>
      <div></div>
    </div>
  );
};

const TopJournalists = () => {
  return (
    <div>
      <h2>Top Journalists</h2>
      <div></div>
    </div>
  );
};

const MainDiv = () => {
  return (
    <div className="py-10 px-28 w-full max-w-[80vw]">
      <TopBar />
      <div>
        <button></button>
        <input />
      </div>
      <div>
        <InterestOverTime />
        <TopPublications />
      </div>
      <div>
        <TrendingArticles />
        <TopJournalists />
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
