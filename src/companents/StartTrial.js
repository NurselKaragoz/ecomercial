import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
function StartTrial() {
  return (
    <div className="p-10 ">
      <h2 className=" text-colors-lacivert">Start your 14 days free trial</h2>
      <h6 className=" text-colors-gray pt-4">
        Met minim Mollie non desert Alamo est sit cliquey dolor <br />
        do met sent. RELIT official consequent.
      </h6>
      <div className=" flex flew-row justify-center gap-5 text-colors-blue p-10">
        <BsTwitter />
        <AiFillFacebook color="#2f55a4" />
        <BsInstagram color=" black" />
        <BsLinkedin color="#0085d2" />
      </div>
    </div>
  );
}
export default StartTrial;
