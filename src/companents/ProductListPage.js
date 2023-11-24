import ProductCardList from "./ProductCardList";
import ShopListCard from "./ShopListCard";
import Clients from "./Clients";
import { HiViewGrid } from "react-icons/hi";
import { BsListCheck } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Store/Actions/GlobalActions";
import { Link } from "react-router-dom";
import { fetchProduct } from "../Store/Actions/productActions";

function ProductListPage() {
  const categories = useSelector((state) => state.global?.categories);
  console.log("cattt;", categories);

  const { products } = useSelector((s) => s.product.product);

  const [search, setSearch] = useState();

  console.log("Search:", search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    {
      dispatch(fetchProduct());
    }
  }, []);

  let rateArray = categories;
  const sortedCategories = rateArray.sort((a, b) => b.rating - a.rating);
  const top5Categories = sortedCategories.slice(0, 5);

  console.log("Indices of the largest five elements:", top5Categories);

  return (
    <div className="p-4 md:p-10">
      <h2 className="text-colors-lacivert md:text-left bg-colors-gray100 pt-5 mb-0">
        Shop
      </h2>
      <div className="flex flex-col  flex-wrap gap-6  md:gap-15 md:flex-row md:justify-center items-center bg-colors-gray100 mx-auto pt-6 ">
        {top5Categories.map((category) => (
          <Link
            to={`/shopping/${
              category.gender == "e" ? "erkek" : "kadın"
            }/${String(category.title).toLowerCase()}`}
          >
            <ShopListCard key={category.id} category={category} />
          </Link>
        ))}
      </div>
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center pt-4">
        <div className="text-colors-gray md:text-left">
          <h6>Showing all 12 results </h6>
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

        <div className="mb-3 xl:w-96 flex justify-center items-center ">
          <div className="mb-4 flex w-full flex-wrap items-stretch justify-center mt-4">
            <input
              type="search"
              className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary items-center"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-20 justify-center items-center pt-10">
        {products ? (
          products
            .filter((product) => {
              const searchLowerCase = search ? search.toLowerCase() : "";
              return searchLowerCase === ""
                ? product
                : product.description.toLowerCase().includes(searchLowerCase);
            })
            .map((product) => (
              <ProductCardList key={product.id} product={product} />
            ))
        ) : (
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-colors-blue300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </div>
      <Clients />
    </div>
  );
}

export default ProductListPage;
