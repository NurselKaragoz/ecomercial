import { useSelector } from "react-redux";
import Bascetcard from "./BasketCard";
import OrderSummary from "./OrderSummary";
function ShoppingCardPages() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  console.log("sepet", cart);

  let toplamFiyat = 0;
  if (cart.length > 0) {
    cart.reduce((total, item) => {
      return (toplamFiyat = total + item.count * item.product.price);
    }, 0);
  }
  return (
    <div className=" flex flex-row gap-2">
      <div className=" flex">
        <div>
          {cart.map((item) => (
            <Bascetcard key={item.product.id} cartItem={item}></Bascetcard>
          ))}
        </div>
      </div>
      <div className=" text-right  fixed top-25 right-5 h-full">
        <OrderSummary toplamFiyat={toplamFiyat}></OrderSummary>
      </div>
    </div>
  );
}
export default ShoppingCardPages;
