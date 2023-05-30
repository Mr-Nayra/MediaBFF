import Image from "next/image";
import React, { useState } from "react";
import MapPin from "../Svgs/MapPin";

const JobsCard = (props) => {
  const [expand, setExpand] = useState(false);

  const expandCard = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div>
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
              <p className="flex">
                <MapPin /> {props.jobLocation}
              </p>
            </div>
          </div>
          <div className="flex flex-col min-w-[160px] justify-between items-center">
            {/* <Image /> */}
            <div className="w-[100px] h-[100px] bg-red-600 rounded-full"></div>
            <button
              className={`${
                expand ? "grey-button-outline" : "grey-button"
              } py-4 px-6 rounded-2xl`}
              onClick={expandCard}
            >
              {expand ? "Show Less" : "Read More"}
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
              <button
                className={"grey-button py-4 px-6 rounded-2xl mt-14"}
                onClick={expandCard}
              >
                Apply Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JobsCard;
