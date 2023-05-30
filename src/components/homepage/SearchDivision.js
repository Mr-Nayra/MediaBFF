import React from "react";
import SearchIcon from "../Svgs/SearchIcon";

const SearchDivision = () => {
  return (
    <div className="mt-20 w-full sm:w-3/4 md:w-2/4 lg:mt-24 lg:w-2/5 2xl:px-10">
      <form action="" className="flex items-center">
        <button className="purple-button p-6 hover:bg-[#7C48E8] lg:p-8">
          <SearchIcon />
        </button>
        <input
          className="bg-[#E1EEFF] px-6 py-8 rounded-2xl ml-6 w-full lg:px-8 lg:py-10"
          placeholder="Search by company name..."
        />
      </form>
    </div>
  );
};

export default SearchDivision;
