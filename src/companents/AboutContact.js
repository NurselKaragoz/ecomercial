import { BsTelephone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function AboutContact() {
  return (
    <div className=" justify-center">
      <h6>VISIT OUR OFFICE</h6>
      <h2 className="pb-10">
        We help small businesses with
        <br /> big ideas
      </h2>
      <div className=" flex flex-row justify-center gap-10">
        <div className="flex flex-col text-colors-blue justify-center ">
          <div className="pt-3 pl-20 pb-3">
            <BsTelephone size={40} />
          </div>
          <h6 className=" text-colors-lacivert">georgia.young@example.com</h6>
          <h6 className=" text-colors-lacivert">georgia.young@ple.com</h6>
          <h5 className=" text-colors-lacivert">Get Support</h5>
          <button
            type="button"
            className="inline-block rounded-full border-2 border-colors-blue px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-colors-blue transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Submit Request
          </button>
        </div>
        <div className=" bg-colors-lacivert text-colors-blue justify-center flex flex-col  p-5">
          <div className="pt-3 pl-20 pb-3">
            <FaMapMarkerAlt size={40} />
          </div>

          <h6 className=" text-colors-white">georgia.young@example.com</h6>
          <h6 className=" text-colors-white">georgia.young@ple.com</h6>
          <h5 className=" text-colors-white">Get Support</h5>
          <button
            type="button"
            className="inline-block rounded-full border-2 border-colors-blue px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-colors-blue transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Submit Request
          </button>
        </div>
        <div className="flex flex-col text-colors-blue justify-center">
          <div className="pt-3 pl-20 pb-3">
            <TfiEmail size={40} />
          </div>

          <h6 className=" text-colors-lacivert">georgia.young@example.com</h6>
          <h6 className=" text-colors-lacivert">georgia.young@ple.com</h6>
          <h5 className=" text-colors-lacivert">Get Support</h5>
          <button
            type="button"
            className="inline-block rounded-full border-2 border-colors-blue px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-colors-blue transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
export default AboutContact;
