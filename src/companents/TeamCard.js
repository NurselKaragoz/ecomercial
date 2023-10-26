import teampic from "./images/team-user.jpg";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function TeamCard() {
  return (
    <div className="w-full p-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={teampic} alt="Team Member" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-colors-lacivert">
            Username
          </div>
          <p className="text-gray-700 text-base text-colors-gray">Profession</p>
        </div>
        <div className="px-6 pt-4 pb-2 text-colors-blue flex flex-row  justify-center">
          <span className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
            <BsInstagram />
          </span>
          <span className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
            <BsFacebook />
          </span>
          <span className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            <BsTwitter />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
