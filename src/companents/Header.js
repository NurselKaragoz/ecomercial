import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Header() {
  return (
    <div>
      <div className="  flex bg-colors-lacivert  text-colors-white place-content-around p-3">
        <div className=" flex ">
          <div className="flex  items-center">
            <BsTelephone />
            <h6 className="pl-1">(225) 555-0118 </h6>
          </div>

          <div className="flex items-center pl-4">
            <TfiEmail />
            <h6 className="pl-1">michelle.rivera@example.com</h6>
          </div>
        </div>

        <div className=" flex items-center">
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>

        <div className=" flex items-center space-x-2">
          <h6 className="pr-2">Follow Us:</h6>
          <BsInstagram />
          <FaYoutube />
          <BsFacebook />
          <BsTwitter />
        </div>
      </div>
    </div>
  );
}
export default Header;
