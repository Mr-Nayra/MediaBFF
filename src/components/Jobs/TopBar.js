import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center my-16">
      <div>
        <h2 className="font-semibold text-3xl">Jobs Avaliable</h2>
      </div>
      <div className="flex items-center gap-x-4">
        <button className="grey-button py-3 px-6">Govt. Jobs</button>
        <button className="grey-button-outline py-3 px-6">Private Jobs</button>
        <button className="grey-button-outline py-3 px-6">Interships</button>
        <div>
          <input
            className="bg-[#E1EEFF] px-8 py-6 rounded-l-2xl ml-6"
            placeholder="Search by company"
          />
          <button className="bg-[#E1EEFF] px-8 py-6 rounded-r-2xl">S</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
