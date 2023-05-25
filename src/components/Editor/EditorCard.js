import Image from "next/image";
import React from "react";

const EditorCard = () => {
  return (
    <div className="w-full bg-white justify-center items-center flex flex-col p-10 rounded-2xl drop-shadow">
      <div className="h-[100px] w-[100px] rounded-full bg-cyan-500"></div>
      <h2 className="font-semibold text-xl mt-5">Aadithi Karnam</h2>
      <p className="text mt-2">Senior Commerce Editor</p>
      <p className="mt-1">Bangalore, India</p>
      <button className="purple-button-outline py-3 px-5 rounded-2xl my-10">
        is this you?
      </button>
      <div className="flex flex-wrap gap-2 justify-center">
        <div className="bg-[#E1EEFF] rounded-2xl flex items-center justify-center px-4 py-2">
          <p className="text-base">Beauty</p>
        </div>
        <div className="bg-[#E1EEFF] rounded-2xl flex items-center justify-center px-4 py-2">
          <p className="text-base">Beauty</p>
        </div>
        <div className="bg-[#E1EEFF] rounded-2xl flex items-center justify-center px-4 py-2">
          <p className="text-base">Beauty</p>
        </div>
        <div className="bg-[#E1EEFF] rounded-2xl flex items-center justify-center px-4 py-2">
          <p className="text-base">Beauty</p>
        </div>
        <div className="bg-[#E1EEFF] rounded-2xl flex items-center justify-center px-4 py-2">
          <p className="text-base">Beauty</p>
        </div>
      </div>
    </div>
  );
};

export default EditorCard;
