import Carousel from "@/components/Carousel/Carousel";
import NavBar from "@/components/NavBar/NavBar";
import ExploreOptions from "@/components/homepage/ExploreOptions";
import Hero from "@/components/homepage/Hero";
import SearchDivision from "@/components/homepage/SearchDivision";
import React from "react";

const Home = () => {
  const data = [
    {
      title: "Lorem Ipsum Dolor",
      des: "consectetur adipiscing elit, sed do eiusmod.",
      date: "Jan 12th, 2022",
    },
    {
      title: "Lorem Ipsum Dolor",
      des: "consectetur adipiscing elit, sed do eiusmod.",
      date: "Jan 12th, 2022",
    },
    {
      title: "Lorem Ipsum Dolor",
      des: "consectetur adipiscing elit, sed do eiusmod.",
      date: "Jan 12th, 2022",
    },
    {
      title: "Lorem Ipsum Dolor",
      des: "consectetur adipiscing elit, sed do eiusmod.",
      date: "Jan 12th, 2022",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="flex justify-center my-24">
        <div className="flex flex-col items-center container">
          <Hero />
          <SearchDivision />
          <ExploreOptions />
          <Carousel className="mt-10" hasButton data={data} />
        </div>
      </div>
    </>
  );
};

export default Home;
