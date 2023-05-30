import React from "react";
import SearchIcon from "../Svgs/SearchIcon";

const SearchDivision = () => {
  return (
    <div className="mt-24 w-2/5 px:5 2xl:px-10">
      <form action="" className="flex items-center">
        <button className="purple-button p-8 hover:bg-[#7C48E8]">
          <SearchIcon />
        </button>
        <input
          className="bg-[#E1EEFF] px-8 py-10 rounded-2xl ml-6 w-full"
          placeholder="Search by company name..."
        />
      </form>
    </div>
  );
};

export default SearchDivision;
