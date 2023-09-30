import { IoPersonOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
function Navigator() {
  return (
    <div class="flex items-center p-4  justify-between ">
      <div>
        <h3 class=" text-colors-lacivert font-semibold  text-xl">Bandage</h3>
      </div>
      <div class="text-colors-gray list-none flex flex-row space-x-3">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Pages</li>
      </div>
      <div class="text-colors-blue flex items-center space-x-2 ">
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
