import imagebg from "./images/about-bg.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import AboutContact from "./AboutContact";
import LetsTalk from "./LetsTalk";

function ContactPage() {
  return (
    <div className="p-4 md:p-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
        <div className="text-colors-lacivert text-left md:w-1/2 md:pr-6">
          <h5 className="pb-3 md:pb-5 text-2xl">CONTACT US</h5>
          <h1 className="pb-3 text-4xl md:text-5xl">
            Get in touch <br /> today!
          </h1>
          <h4 className="text-colors-gray pb-3 md:pb-4">
            We know how large objects will act, <br />
            but things on a small scale
          </h4>
          <h3>Fax: +451 215 215</h3>
          <h3>Phone: +451 215 215</h3>
          <div className="flex flex-row gap-3 pt-3 md:pt-5 text-2xl">
            <AiFillInstagram />
            <FaYoutube />
            <BsFacebook />
            <BsTwitter />
          </div>
        </div>
        <div className="md:w-1/2 pt-5 md:pt-0">
          <img src={imagebg} alt="Contact Us Background" />
        </div>
      </div>
      <AboutContact />
      <LetsTalk />
    </div>
  );
}

export default ContactPage;
