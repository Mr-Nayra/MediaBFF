import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-center px-10">
      <div className="h-20 flex items-center justify-between max-w-[1440px] w-full">
        <Link href="/">
          <p className="w-[200px]">logo</p>
        </Link>
        <div className="flex gap-x-4">
          <Link href="/blogs">Blogs</Link>
          <Link href="/tea-talks">Tea-Talks</Link>
          <Link href="/jobs">Jobs</Link>
        </div>
        <div className="flex gap-x-4">
          <button className="purple-button-outline px-5 py-3">Login</button>
          <button className="purple-button px-5 py-3">Sign-Up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
