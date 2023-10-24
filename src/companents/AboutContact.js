import { BsTelephone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function AboutContact() {
  return (
    <div className="text-center md:text-left p-4 md:p-10">
      <h6>VISIT OUR OFFICE</h6>
      <h2 className="pb-6 md:pb-10">
        We help small businesses with
        <br /> big ideas
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4 md:gap-10">
        <div className="flex flex-col items-center text-colors-blue">
          <div className="pt-3 pb-3">
            <BsTelephone size={40} />
          </div>
          <h6 className="text-colors-lacivert">georgia.young@example.com</h6>
          <h6 className="text-colors-lacivert">georgia.young@ple.com</h6>
          <h5 className="text-colors-lacivert">Get Support</h5>
          <button className="text-xs font-medium uppercase mt-2 btn-blue">
            Submit Request
          </button>
        </div>
        <div className="bg-colors-lacivert text-colors-blue flex flex-col items-center p-4 md:p-5">
          <div className="pt-3 pb-3">
            <FaMapMarkerAlt size={40} />
          </div>
          <h6 className="text-colors-white">georgia.young@example.com</h6>
          <h6 className="text-colors-white">georgia.young@ple.com</h6>
          <h5 className="text-colors-white">Get Support</h5>
          <button className="text-xs font-medium uppercase mt-2 btn-blue">
            Submit Request
          </button>
        </div>
        <div className="flex flex-col items-center text-colors-blue">
          <div className="pt-3 pb-3">
            <TfiEmail size={40} />
          </div>
          <h6 className="text-colors-lacivert">georgia.young@example.com</h6>
          <h6 className="text-colors-lacivert">georgia.young@ple.com</h6>
          <h5 className="text-colors-lacivert">Get Support</h5>
          <button className="text-xs font-medium uppercase mt-2 btn-blue">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutContact;
