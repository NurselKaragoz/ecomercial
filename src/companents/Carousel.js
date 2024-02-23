import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export function CarouselDefault({ product }) {
  let state = useLocation();

  console.log("state curosel", state.pathname);

  const productId = state.pathname.split("/")[2];
  console.log("ProductId:", productId);
  console.log("product crousel ", product);

  function findProductArray(product, productId) {
    for (let i = 0; i < product.length; i++) {
      if (productId == product[i].id) {
        return i;
      }
    }
    return -1;
  }

  const productIndex = findProductArray(product, productId);

  console.log("productindexx ", productIndex);

  return (
    <div className=" w-1/3">
      <div className="carousel-item active">
        <img
          src={product[productIndex].images[0].url}
          className="d-block w-100"
          alt="Wild Landscape"
          width="100"
          height="100"
        />
      </div>
    </div>
  );
}
export default CarouselDefault;
