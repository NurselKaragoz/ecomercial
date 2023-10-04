import couch from "./images/carousel.png";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
function Shop() {
  return (
    <div className="bg-colors-gray100 pt-14 pb-14">
      <div className=" flex flex-row  items-center text-colors-gray pl-80 pb-10">
        <h5 className=" text-colors-lacivert ">Home</h5>
        <GrFormNext size={30} />
        <h5>Shop</h5>
      </div>

      <div className=" flex flex-row justify-center gap-10  ">
        <div className="">
          <img src={couch} />
        </div>

        <div className=" text-colors-gray flex flex-col  max-w-lg text-left gap-2">
          <h4 className=" text-colors-lacivert">Floating Phone</h4>
          <div className=" text-colors-yellow flex flex-row items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <span className=" text-colors-gray">10 Reviews</span>
          </div>
          <h5 className=" text-colors-lacivert">$1,139.33</h5>
          <h6>
            Availability:<span className=" text-colors-blue">In Stock</span>
          </h6>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <div className=" flex flex-row  gap-2 pb-5 text-colors-lacivert">
            <BsCircleFill size={30} color=" blue" />
            <BsCircleFill size={30} color=" green" />
            <BsCircleFill size={30} color="orange" />
            <BsCircleFill size={30} color=" dark blue" />
          </div>
          <button class=" bg-colors-blue text-colors-white font-bold py-2 px-4 rounded max-w-fit p-2">
            Select Options
          </button>
        </div>
      </div>
    </div>
  );
}
export default Shop;
