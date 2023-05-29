import Carousel from "@/components/Carousel/Carousel";
import ExploreOptions from "@/components/homepage/ExploreOptions";
import Hero from "@/components/homepage/Hero";
import SearchDivision from "@/components/homepage/SearchDivision";
import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center my-24">
      <div className="flex flex-col items-center container">
        <Hero />
        <SearchDivision />
        <ExploreOptions />
        <Carousel className="mt-10"/>
      </div>
    </div>
  );
};

export default Home;
