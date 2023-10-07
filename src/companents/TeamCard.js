import teampic from "./images/team-user.jpg";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
function TeamCard() {
  return (
    <div className=" flex justify-center pt-10">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={teampic} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-colors-lacivert">
            Username
          </div>
          <p class="text-gray-700 text-base text-colors-gray">Proffesion</p>
        </div>
        <div class="px-6 pt-4 pb-2 text-colors-blue">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <BsInstagram />
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <BsFacebook />
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <BsTwitter />
          </span>
        </div>
      </div>
    </div>
  );
}
export default TeamCard;
