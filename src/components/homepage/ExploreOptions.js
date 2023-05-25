import Image from "next/image";
import React from "react";

const ExploreDivision = () => {
  return (
    <div className="flex flex-col justify-center items-center w-60">
      <Image src="/homepage-1.png" width={300} height={300} />
      <h2 className="text-3xl font-semibold text-center">
        Lorem ipsum dolor sit amet
      </h2>
      <p className="text-base mt-8 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
      <button className="purple-button py-4 px-8 text-white text-xl mt-8">
        Explore Now
      </button>
    </div>
  );
};

const ExploreOptions = () => {
  return (
    <div className="mt-28 flex gap-x-20">
      <ExploreDivision />
      <ExploreDivision />
    </div>
  );
};

export default ExploreOptions;
