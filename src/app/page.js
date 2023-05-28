import Carousel from "@/components/Carousel/Carousel";
import ExploreOptions from "@/components/homepage/ExploreOptions";
import Hero from "@/components/homepage/Hero";
import SearchDivision from "@/components/homepage/SearchDivision";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <SearchDivision />
      <ExploreOptions />
      <Carousel />
    </div>
  );
};

export default Home;
