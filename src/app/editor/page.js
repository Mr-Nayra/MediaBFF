import ArticleCard from "@/components/Editor/ArticleCard";
import ContactCard from "@/components/Editor/ContactCard";
import EditorCard from "@/components/Editor/EditorCard";
import TweetsCard from "@/components/Editor/TweetsCard";
import NavBar from "@/components/NavBar/NavBar";
import React from "react";

const index = () => {
  const articles = [
    {
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Nemo enim ipsam voluptatem quia voluptas sit.",
      people: ["Person 1", "Person 2", "Person 3"],
      time: "12 Days Ago",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi laboriosam similique illum quidem excepturi modi, molestiae accusantium ab provident aut repudiandae, fugit nihil, quod magni quos commodi animi eos itaque.",
    },
    {
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Nemo enim ipsam voluptatem quia voluptas sit.",
      people: ["Person 1", "Person 2", "Person 3X"],
      time: "12 Days Ago",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi laboriosam similique illum quidem excepturi modi, molestiae accusantium ab provident aut repudiandae, fugit nihil, quod magni quos commodi animi eos itaque.",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="h-40 bg-gradient-to-r from-[#874AA3] to-[#c92189]"></div>
      <div className="flex justify-center">
        <div className="container flex flex-col gap-x-8 lg:flex-row xl:gap-x-14">
          <div className="flex flex-col gap-y-9 -mt-20 min-w-[380px] lg:mb-20 xl:min-w-[420px]">
            <EditorCard />
            <ContactCard />
            <TweetsCard />
          </div>
          <div className="my-10">
            <h1 className="font-semibold text-2xl">Recent Articles</h1>
            {articles.map((item) => (
              <ArticleCard
                heading={item.heading}
                people={item.people}
                time={item.time}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
