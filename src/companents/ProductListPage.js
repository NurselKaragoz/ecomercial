import Productcard from "./ProductCard";
import { BsCircleFill } from "react-icons/bs";

function ProductListPage() {
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
    { id: 10 },
    { id: 11 },
    { id: 12 },
  ];
  return (
    <div>
      <div className=" flex flex-row flex-wrap gap-20 justify-center pt-10">
        {productList.map((product) => (
          <Productcard key={product.id} />
        ))}
        <div className=" flex flex-row  gap-2 pb-5 text-colors-lacivert">
          <BsCircleFill size={30} color=" blue" />
          <BsCircleFill size={30} color=" green" />
          <BsCircleFill size={30} color="orange" />
          <BsCircleFill size={30} color=" dark blue" />
        </div>
      </div>
    </div>
  );
}
export default ProductListPage;
