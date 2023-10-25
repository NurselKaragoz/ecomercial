import BestsellerCard from "./BestsellerCard";
import Clients from "./Clients";

import ProductDescription from "./ProductDescripciton";
import Shop from "./Shop";

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
  ];

  return (
    <div className="p-4 md:p-10">
      <Shop />
      <ProductDescription />

      <div className="pt-10 md:pt-12 pb-12">
        <h1 className="text-colors-lacivert text-left md:text-center pl-4 md:pl-40">
          BESTSELLER PRODUCT
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-20 justify-center pt-6">
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
