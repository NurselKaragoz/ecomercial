import ProductCardList from "./ProductCardList";
import ShopListCard from "./ShopListCard";
import Clients from "./Clients";
import { HiViewGrid } from "react-icons/hi";
import { BsListCheck } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Store/Actions/GlobalActions";

function ProductListPage() {
  const categories = useSelector((state) => state.global?.categories);

  const shopList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="p-4 md:p-10">
      <h2 className="text-colors-lacivert md:text-left bg-colors-gray100 pt-5 mb-0">
        Shop
      </h2>
      <div className="flex flex-col  flex-wrap gap-6  md:gap-15 md:flex-row md:justify-center items-center bg-colors-gray100 mx-auto pt-6 ">
        {categories.map((category) => (
          <ShopListCard key={category.id} category={category} />
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
      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-20 justify-center items-center pt-10">
        {productList.map((product) => (
          <ProductCardList key={product.id} />
        ))}
      </div>
      <Clients />
    </div>
  );
}

export default ProductListPage;
