"use client";
import JobsCard from "@/components/Jobs/JobsCard";
import TopBar from "@/components/Jobs/TopBar";
import React from "react";

const page = () => {
  const jobs = [
    {
      title: "Social Media Manager",
      companyName: "company 1",
      jobType: "Full-time",
      jobLocation: "Bangalore, India",
      companyDescription:
        "Sed magna turpis, pharetra nec molestie suscipit, laoreet ac orci.tempus elit eget lectus tempor, sed molestie suscipit, .",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio faucibus accumsan turpis nulla tellus purus ut cursus lorem in pellentesque risus turpis eget quam eu nunc sed diam.",
      jobResponsibilities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
      perksAndBenifits: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
    },
    {
      title: "Social Media Manager",
      companyName: "company 1",
      jobType: "Full-time",
      jobLocation: "Bangalore, India",
      companyDescription:
        "Sed magna turpis, pharetra nec molestie suscipit, laoreet ac orci.tempus elit eget lectus tempor, sed molestie suscipit, .",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio faucibus accumsan turpis nulla tellus purus ut cursus lorem in pellentesque risus turpis eget quam eu nunc sed diam.",
      jobResponsibilities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
      perksAndBenifits: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
    },
    {
      title: "Social Media Manager",
      companyName: "company 1",
      jobType: "Full-time",
      jobLocation: "Bangalore, India",
      companyDescription:
        "Sed magna turpis, pharetra nec molestie suscipit, laoreet ac orci.tempus elit eget lectus tempor, sed molestie suscipit, .",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio faucibus accumsan turpis nulla tellus purus ut cursus lorem in pellentesque risus turpis eget quam eu nunc sed diam.",
      jobResponsibilities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
      perksAndBenifits: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
    },
    {
      title: "Social Media Manager",
      companyName: "company 1",
      jobType: "Full-time",
      jobLocation: "Bangalore, India",
      companyDescription:
        "Sed magna turpis, pharetra nec molestie suscipit, laoreet ac orci.tempus elit eget lectus tempor, sed molestie suscipit, .",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio faucibus accumsan turpis nulla tellus purus ut cursus lorem in pellentesque risus turpis eget quam eu nunc sed diam.",
      jobResponsibilities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
      perksAndBenifits: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
    },
    {
      title: "Social Media Manager",
      companyName: "company 1",
      jobType: "Full-time",
      jobLocation: "Bangalore, India",
      companyDescription:
        "Sed magna turpis, pharetra nec molestie suscipit, laoreet ac orci.tempus elit eget lectus tempor, sed molestie suscipit, .",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio faucibus accumsan turpis nulla tellus purus ut cursus lorem in pellentesque risus turpis eget quam eu nunc sed diam.",
      jobResponsibilities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
      perksAndBenifits: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
    },
    {
      title: "Social Media Manager",
      companyName: "company 1",
      jobType: "Full-time",
      jobLocation: "Bangalore, India",
      companyDescription:
        "Sed magna turpis, pharetra nec molestie suscipit, laoreet ac orci.tempus elit eget lectus tempor, sed molestie suscipit, .",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio faucibus accumsan turpis nulla tellus purus ut cursus lorem in pellentesque risus turpis eget quam eu nunc sed diam.",
      jobResponsibilities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
      perksAndBenifits: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
    },
    {
      title: "Social Media Manager",
      companyName: "company 1",
      jobType: "Full-time",
      jobLocation: "Bangalore, India",
      companyDescription:
        "Sed magna turpis, pharetra nec molestie suscipit, laoreet ac orci.tempus elit eget lectus tempor, sed molestie suscipit, .",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio faucibus accumsan turpis nulla tellus purus ut cursus lorem in pellentesque risus turpis eget quam eu nunc sed diam.",
      jobResponsibilities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
      perksAndBenifits: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Netus vestibulum dignissim scelerisque vitae.",
        "Porttitor nibh est vulputate vitae sem vitae.",
        "Amet tellus nisl risus lorem vulputate velit eget.",
      ],
    },
  ];

  const middleIndex = Math.ceil(jobs.length / 2);

  return (
    <div className="flex justify-center">
      <div className="container">
        <TopBar />
        <div className="grid grid-cols-2 grid-flow-dense">
          <div className="flex flex-col gap-y-10">
            {jobs.slice(0, middleIndex).map((item) => (
              <JobsCard
                title={item.title}
                companyName={item.companyName}
                companyDescription={item.companyDescription}
                jobType={item.jobType}
                jobLocation={item.jobLocation}
                jobDescription={item.jobDescription}
                jobResponsibilities={item.jobResponsibilities}
                perksAndBenifits={item.perksAndBenifits}
              />
            ))}
          </div>
          <div className="flex flex-col gap-y-10">
            {jobs.slice(middleIndex, jobs.length).map((item) => (
              <JobsCard
                title={item.title}
                companyName={item.companyName}
                companyDescription={item.companyDescription}
                jobType={item.jobType}
                jobLocation={item.jobLocation}
                jobDescription={item.jobDescription}
                jobResponsibilities={item.jobResponsibilities}
                perksAndBenifits={item.perksAndBenifits}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
