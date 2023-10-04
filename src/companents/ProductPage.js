import BestsellerCard from "./BestsellerCard";
import Clients from "./Clients";
import "./Header";
import Navigator from "./Navigator";
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
    <div>
      <Shop />

      <ProductDescription />
      <div className=" pt-12 pb-12">
        <h1 className=" text-colors-lacivert text-left pl-40">
          BESTSELLER PRODUCT
        </h1>
        <div className=" flex flex-row flex-wrap gap-20 justify-center pt-10">
          {productList.map((product) => (
            <BestsellerCard key={product.id} />
          ))}
        </div>
      </div>
      <div className=" p-10">
        <Clients />
      </div>
    </div>
  );
}
export default ProductList;
