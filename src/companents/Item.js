import { data } from "./Data";
import Productcard from "./ProductCard";
import image1 from "./blogimg.png";
function Item() {
  const products = [
    { id: 1, img: image1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <div>
      <div className=" pt-24">
        <h3 className=" text-colors-gray">Featured Products</h3>
        <h2 className=" text-colors-lacivert">BESTSELLER PRODUCT</h2>
        <p className=" text-colors-gray">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className=" flex flex-row flex-wrap gap-20 justify-center pt-10">
        {products.map((product) => (
          <Productcard key={product.id} />
        ))}
      </div>
      <button class="bg-transparent text-colors-blue  font-bold border rounded-lg border-colors-blue p-6 m-3">
        LOAD MORE PRODUCT
      </button>
    </div>
  );
}
export default Item;
