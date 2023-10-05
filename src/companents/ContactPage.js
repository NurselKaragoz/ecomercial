import imagebg from "./images/about-bg.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import AboutContact from "./AboutContact";
import LetsTalk from "./LetsTalk";
function ContactPage() {
  return (
    <div>
      <div className=" flex flex-row justify-center">
        <div className=" text-colors-lacivert text-left">
          <h5 className=" pb-5">CONTACT US</h5>
          <h1 className=" pb-3">
            Get in touch <br /> today!
          </h1>
          <h4 className=" text-colors-gray">
            We know how large objects will act, <br />
            but things on a small scale
          </h4>
          <h3>Fax : +451 215 215</h3>
          <h3>Phone ; +451 215 215 </h3>
          <div className=" flex flex-row gap-3 pt-5">
            <AiFillInstagram />
            <FaYoutube />
            <BsFacebook />
            <BsTwitter />
          </div>
        </div>
        <div>
          <img src={imagebg} />
        </div>
      </div>
      <AboutContact />
      <LetsTalk />
    </div>
  );
}
export default ContactPage;
