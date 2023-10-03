import { IoPersonOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function Navigator() {
  return (
    <div className="flex items-center p-4  justify-between ">
      <div>
        <h3 className=" text-colors-lacivert font-semibold  text-xl">
          Bandage
        </h3>
      </div>
      <div className="text-colors-gray list-none flex flex-row space-x-3 items-center">
        <li>Home</li>
        <Link to="/products">
          <li>Shop</li>
        </Link>
        <RiArrowDropDownLine />
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Pages</li>
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
