import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Header() {
  return (
    <div className="bg-colors-lacivert text-colors-white py-3">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex mb-2 md:mb-0">
          <div className="flex items-center mr-4">
            <BsTelephone />
            <h6 className="pl-1">(225) 555-0118 </h6>
          </div>

          <div className="flex items-center">
            <TfiEmail />
            <h6 className="pl-1">michelle.rivera@example.com</h6>
          </div>
        </div>

        <div className="text-center mb-2 md:mb-0">
          <h6 className="md:text-left">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>

        <div className="flex justify-center md:justify-end">
          <h6 className="pr-2">Follow Us:</h6>
          <BsInstagram className="mr-2" />
          <FaYoutube className="mr-2" />
          <BsFacebook className="mr-2" />
          <BsTwitter />
        </div>
      </div>
    </div>
  );
}

export default Header;
