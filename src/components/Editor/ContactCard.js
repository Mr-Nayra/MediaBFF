import React from "react";
import Black_white_facebook from "./Logos/Black&white facebook";
import Black_white_twitter from "./Logos/Black&white twitter";
import Black_white_linkedin from "./Logos/Black&white linkedIn";

const ContactCard = () => {
  return (
    <div className="w-full bg-white p-10 rounded-2xl drop-shadow flex items-center flex-col">
      <div>
        <h2>Contact</h2>
        <div className="flex flex-wrap gap-4 mt-5">
          <div className="flex items-center gap-2">
            <Black_white_facebook />
            <p className="text-base">@Username123</p>
          </div>
          <div className="flex items-center gap-2">
            <Black_white_twitter />
            <p className="text-base">@Username123</p>
          </div>
          <div className="flex items-center gap-2">
            <Black_white_linkedin />
            <p className="text-base">@Username123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
