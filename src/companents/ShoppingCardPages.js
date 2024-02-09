import { Dropdown } from "flowbite-react";
import { useSelector } from "react-redux";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
import Productcard from "./ProductCard";
import Bascetcard from "./BasketCard";
function ShoppingCardPages() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  console.log("sepet", cart);
  return (
    <div>
      {cart.map((item) => (
        <Bascetcard key={item.product.id} cartItem={item}></Bascetcard>
      ))}
    </div>
  );
}
export default ShoppingCardPages;
