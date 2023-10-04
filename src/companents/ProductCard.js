import React from "react";
import productcover1 from "./images/product-cover.png";

export default function Productcard() {
  return (
    <>
      <div className="card p-10 bg-colors-gray">
        <img src={productcover1} className=""></img>
        <div className=" flex flex-auto flex-col items-center gap-2 py-6">
          <h5 className="font-bold">Graphic Design</h5>
          <p>English Department</p>
          <div className=" flex flex-row gap-3">
            <h5 className=" text-colors-gray">$16.48</h5>
            <h5 className=" text-colors-green font-bold">$6.48</h5>
          </div>
        </div>
      </div>
    </>
  );
}
