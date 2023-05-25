import Image from "next/image";
import React, { useState } from "react";

const JobsCard = (props) => {
  const [expand, setExpand] = useState(false);

  const expandCard = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className="basis-1/2 px-5">
      <div className="border-[0.5px] border-solid border-black border-opacity-70 rounded-2xl p-10 drop-shadow">
        <div className="flex">
          <div className="w-full min-h-[200px]">
            <div>
              <h3 className="font-semibold text-xl">{props.title}</h3>
              <p>{props.companyName}</p>
            </div>
            <p className="mt-10 text-base">{props.companyDescription}</p>
            <div className="flex gap-5 items-stretch mt-10">
              <p>{props.jobType}</p>
              <div className="border border-black"></div>
              <p>{props.jobLocation}</p>
            </div>
          </div>
          <div className="flex flex-col min-w-[160px] justify-between items-center">
            {/* <Image /> */}
            <div className="w-[100px] h-[100px] bg-red-600 rounded-full"></div>
            <button
              className="bg-[#434343] text-white py-4 px-6 rounded-2xl"
              onClick={expandCard}
            >
              Read More
            </button>
          </div>
        </div>
        {expand && (
          <>
            <div className="mt-14">
              <h3 className="font-semibold text-xl">Job Description</h3>
              <p className="mt-3">{props.jobDescription}</p>
            </div>
            <div className="mt-14">
              <h3 className="font-semibold text-xl">Job Responsibilites</h3>
              <ol className="list-decimal pl-5">
                {props.jobResponsibilities.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <div className="mt-14">
              <h3 className="font-semibold text-xl">Perks and Benefits</h3>
              <ul className="list-disc pl-5">
                {props.perksAndBenifits.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JobsCard;
