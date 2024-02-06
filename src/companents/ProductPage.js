import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import BestsellerCard from "./BestsellerCard";
import Clients from "./Clients";

import ProductDescription from "./ProductDescripciton";
import Shop from "./Shop";
import ProductCardList from "./ProductCardList";

function ProductList() {
  const productList = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  let state = useLocation();
  console.log("state::", state);
  return (
    <div className="p-4 md:p-10">
      <Shop />

      <ProductDescription />

      <div className="pt-10 md:pt-12 pb-12">
        <h1 className="text-colors-lacivert  md:text-left pl-4 md:pl-40 text-center">
          BESTSELLER PRODUCT
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-20  pt-6 items-center md:justify-center">
          {productList.map((product) => (
            <BestsellerCard key={product.id} />
          ))}
        </div>
      </div>

      <div className="p-4 md:p-10">
        <Clients />
      </div>
    </div>
  );
}

export default ProductList;
