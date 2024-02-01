import { Button } from "@mui/material";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addToCart } from "../Store/Actions/shoppingCartActions";

function createUrlString(text) {
  return (
    text
      .toLowerCase()
      // .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "")
  );
}

export default function ProductCardList({ product, categories }) {
  const { gender, category, productId, productName } = useParams();
  const dispatch = useDispatch();

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ">
      <div className="card bg-colors-gray">
        <Link
          className=" no-underline"
          to={`/${String(
            categories[product.category_id].title
          )?.toLowerCase()}/${product.id}/${createUrlString(product.name)}`}
          state={{
            product,
          }}
        >
          <img
            src={product.images[0].url}
            alt="Product Cover"
            className="w-full"
          />
          <div className="flex flex-col items-center gap-2 py-4">
            <h5 className="font-bold text-xl">{product.name}</h5>
            <p className="text-colors-gray">{product.description}</p>
            <div className="flex flex-row items-center gap-3">
              <h5 className="text-colors-green font-bold">${product.price}</h5>
            </div>
            <div className="flex flex-row gap-2 pb-3 text-colors-lacivert">
              <BsCircleFill size={20} color="blue" />
              <BsCircleFill size={20} color="green" />
              <BsCircleFill size={20} color="orange" />
              <BsCircleFill size={20} color="darkblue" />
            </div>
          </div>
        </Link>
        <div className=" pb-4">
          <button
            className=" text-colors-white border-2 border-colors-blue w-32 h-10 rounded bg-colors-blue"
            onClick={() => dispatch(addToCart(product))}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
