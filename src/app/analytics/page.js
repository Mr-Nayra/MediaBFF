import SideBar from "@/components/Dashboard/SideBar";
import TopBar from "@/components/Dashboard/TopBar";
import SearchIcon from "@/components/Svgs/SearchIcon";
import React from "react";

const InterestOverTime = () => {
  return (
    <div className="basis-2/3 flex flex-col">
      <h2 className="font-semibold text-xl">Interest over time</h2>
      <div className="drop-shadow-lg p-4 bg-white mt-4 rounded-xl flex-1"></div>
    </div>
  );
};

const PublicationDiv = () => {
  return (
    <div className="flex gap-5">
      <div className="w-10 h-10 bg-red-500 rounded-lg"></div>
      <div>
        <h3 className="text-base font-semibold">TOI- Trending</h3>
        <p>Bengaluru, IN</p>
        <p className="text-[#3c3c3c]">Newspaper</p>
      </div>
    </div>
  );
};

const TopPublications = () => {
  return (
    <div className="basis-1/3 flex flex-col">
      <h2 className="font-semibold text-xl">Top Publications</h2>
      <div className="drop-shadow-lg p-10 bg-white mt-4 rounded-xl flex-1 gap-y-10 flex flex-col">
        <PublicationDiv />
        <PublicationDiv />
      </div>
    </div>
  );
};

const TrendingArticle = () => {
  return (
    <div className="flex items-center gap-10">
      <div>
        <h3 className="text-base font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod
        </h3>
        <p>12 DAYS AGO | Person 1 Person 2</p>
      </div>
      <div className="flex">
        <p className="text-base font-semibold">120</p>
      </div>
    </div>
  );
};

const TrendingArticles = () => {
  return (
    <div className="basis-1/2 flex flex-col">
      <h2 className="font-semibold text-xl">Trending Articles</h2>
      <div className="drop-shadow-lg p-10 bg-white mt-4 rounded-xl flex-1 flex gap-y-10 flex-col">
        <TrendingArticle />
        <TrendingArticle />
      </div>
    </div>
  );
};

const JounrnalistDiv = () => {
  return (
    <div className="flex gap-5">
      <div className="w-10 h-10 bg-red-500 rounded-lg"></div>
      <div>
        <h3 className="text-base font-semibold">TOI- Trending</h3>
        <p>Bengaluru, IN</p>
        <p className="text-[#3c3c3c]">Newspaper</p>
      </div>
    </div>
  );
};

const TopJournalists = () => {
  return (
    <div className="basis-1/2 flex flex-col">
      <h2 className="font-semibold text-xl">Top Journalists</h2>
      <div className="drop-shadow-lg p-10 bg-white mt-4 rounded-xl flex-1 flex justify-between">
        <div className="flex flex-col gap-y-10">
          <JounrnalistDiv />
          <JounrnalistDiv />
        </div>
        <div className="border border-[#BEBEBE]"></div>
        <div className="flex flex-col gap-y-10">
          <JounrnalistDiv />
          <JounrnalistDiv />
        </div>
      </div>
    </div>
  );
};

const SearchDivision = () => {
  return (
    <div className="mt-10 w-full flex gap-5">
      <button className="p-4 bg-[#434343] rounded-2xl">
        <SearchIcon />
      </button>
      <input
        placeholder="Search by.."
        className=" border border-[#434343] w-full rounded-2xl px-5"
      />
    </div>
  );
};

const MainDiv = () => {
  return (
    <div className="py-10 xl:px-10 2xl:px-28 w-full max-w-[80vw]">
      <TopBar />
      <SearchDivision />
      <div className="mt-10 flex justify-between gap-x-5 items-stretch">
        <InterestOverTime />
        <TopPublications />
      </div>
      <div className="mt-10 flex justify-between gap-x-5 items-stretch">
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
