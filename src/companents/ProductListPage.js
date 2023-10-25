import ProductCardList from "./ProductCardList";
import ShopListCard from "./ShopListCard";
import Clients from "./Clients";
import { HiViewGrid } from "react-icons/hi";
import { BsListCheck } from "react-icons/bs";

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
  const shopList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <div className="p-4 md:p-10">
      <h2 className="text-colors-lacivert text-left md:text-center md:w-1/7 bg-colors-gray100 pt-5 mb-0">
        Shop
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-15 justify-center bg-colors-gray100 mt-0 pt-6">
        {shopList.map((shoplist) => (
          <ShopListCard key={shoplist.id} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center pt-4">
        <div className="text-colors-gray md:text-left">
          <h6>Showing all 12 results</h6>
        </div>
        <div className="flex flex-row items-center gap-2">
          <h6 className="text-colors-gray">Views:</h6>
          <div className="text-colors-lacivert flex flex-row items-center bg-colors-white p-1 border rounded-sm">
            <HiViewGrid />
          </div>
          <div className="text-colors-gray bg-colors-white p-1 border rounded-sm">
            <BsListCheck />
          </div>
        </div>
        <button className="btn-blue md:mt-0">Filter</button>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-20 justify-center pt-10">
        {productList.map((product) => (
          <ProductCardList key={product.id} />
        ))}
      </div>

      <Clients />
    </div>
  );
}

export default ProductListPage;
