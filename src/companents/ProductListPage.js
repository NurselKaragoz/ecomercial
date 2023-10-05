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
    <div>
      <div className=" ">
        <h2 className=" text-colors-lacivert text-left pl-44 bg-colors-gray100 pt-5 mb-0">
          Shop
        </h2>
      </div>
      <div className=" flex flex-row flex-wrap gap-15 justify-center pt-10 bg-colors-gray100  mt-0">
        {shopList.map((shoplist) => (
          <ShopListCard key={shoplist.id} />
        ))}
      </div>

      <div className="flex flex-row justify-around pt-4">
        <div className=" text-colors-gray">
          <h6>Showing all 12 results</h6>
        </div>
        <div className=" flex flex-row items-center gap-2">
          <h6 className=" text-colors-gray">Views:</h6>
          <div className=" text-colors-lacivert flex flex-row items-center bg-colors-white p-1 border rounded-sm ">
            <HiViewGrid />
          </div>
          <div className=" text-colors-gray bg-colors-white p-1 border rounded-sm">
            <BsListCheck />
          </div>
        </div>
        <button
          type="button"
          className=" flex rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Filter
        </button>
      </div>

      <div className=" flex flex-row flex-wrap gap-20 justify-center pt-10">
        {productList.map((product) => (
          <ProductCardList key={product.id} />
        ))}
      </div>
      <Clients />
    </div>
  );
}
export default ProductListPage;
