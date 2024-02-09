import React from "react";
import { Button } from "reactstrap";

export default function Bascetcard({ cartItem }) {
  console.log("basket <<<", cartItem.product.id);
  return (
    <div className="flex flex-row overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md items-center justify-around">
      <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white">
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="peer absolute top-0 right-0 h-full w-full object-cover"
            src={cartItem.product.images[0].url}
            alt="product image"
          />
        </a>
      </div>
      <div className="mt-4 px-5 pb-5 flex flex-row content-center gap-5">
        <a href="#" className="no-underline flex flex-col flex-wrap">
          <h5 className="text-xl tracking-tight text-slate-900">
            {cartItem.product.name}
          </h5>
          <h5 className="text-l tracking-tight text-slate-900">
            {cartItem.product.description}
          </h5>
        </a>
        <div className="counter-btn">
          <div className="btn-box flex flex-row">
            <Button className="buton" color="warning">
              -
            </Button>
            <Button outline color="warning">
              {" "}
              {cartItem.count}
            </Button>
            <Button className="buton" color="warning">
              +
            </Button>
          </div>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between text-colors-lacivert">
          <p>
            <span className="text-3xl font-bold text-colors-lacivert">
              $ {cartItem.product.price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
