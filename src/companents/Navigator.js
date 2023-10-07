import { IoPersonOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <div className="flex items-center p-4  justify-between ">
      <div>
        <h3 className=" text-colors-lacivert font-semibold  text-xl">
          Bandage
        </h3>
      </div>
      <div className="text-colors-gray list-none flex flex-row space-x-3 items-center ">
        <Link className=" text-colors-gray no-underline" to="/">
          <li>Home</li>
        </Link>
        <Link className=" text-colors-gray no-underline" to="/products">
          <li>Shop</li>
        </Link>
        <RiArrowDropDownLine />
        <Link className=" text-colors-gray no-underline" to="/about">
          <li>About</li>
        </Link>
        <Link className=" text-colors-gray no-underline" to="/contact">
          <li>Contact</li>
        </Link>
        <Link className=" text-colors-gray no-underline" to="/team">
          <li>Team</li>
        </Link>
      </div>
      <div className="text-colors-blue flex items-center space-x-2 ">
        <IoPersonOutline />
        Login / Register
        <BiSearch />
        <LiaShoppingCartSolid />1
        <AiOutlineHeart />1
      </div>
    </div>
  );
}
export default Navigator;
