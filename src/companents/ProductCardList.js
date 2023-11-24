import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ProductCardList({ product }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ">
      <Link className=" no-underline" to="/shoplist">
        <div className="card bg-colors-gray">
          <img
            src={product.images[0].url}
            alt="Product Cover"
            className="w-full"
          />
          <div className="flex flex-col items-center gap-2 py-4">
            <h5 className="font-bold text-xl">{product.name}</h5>
            <p className="text-colors-gray">{product.description}</p>
            <div className="flex flex-row items-center gap-3">
              <h5 className="text-colors-gray">${product.price}</h5>
              <h5 className="text-colors-green font-bold">$6.48</h5>
            </div>
            <div className="flex flex-row gap-2 pb-3 text-colors-lacivert">
              <BsCircleFill size={20} color="blue" />
              <BsCircleFill size={20} color="green" />
              <BsCircleFill size={20} color="orange" />
              <BsCircleFill size={20} color="darkblue" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
