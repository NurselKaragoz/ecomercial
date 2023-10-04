import Clients from "./Clients";
import "./Header";
import ProductDescription from "./ProductDescripciton";
function ProductList() {
  return (
    <div>
      <ProductDescription />
      <h1 className=" text-colors-blue">deneme</h1>
      <Clients />
    </div>
  );
}
export default ProductList;
