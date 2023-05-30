import React from "react";
import UserImage from "../Svgs/UserImage";

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
          <button className="rounded-2xl  text-black border border-black font-semibold text-xl py-4 px-6">
            View Applications
          </button>
        </div>
        <div>
          <button className="rounded-2xl  text-black border border-black font-semibold text-xl py-4 px-6">
            View Status
          </button>
        </div>
      </div>
      <div className="flex items-center gap-x-5">
        <p>UserName</p>
        <UserImage />
      </div>
    </div>
  );
};

export default TopBar;
