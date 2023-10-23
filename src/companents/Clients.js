import React from "react";
import img1 from "./images/col-md-2.svg";
import img2 from "./images/col-md-2-1.svg";
import img3 from "./images/col-md-2-2.svg";
import img4 from "./images/col-md-2-3.svg";
import img5 from "./images/col-md-2-4.svg";
import img6 from "./images/col-md-2-5.svg";

function Clients() {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <img
          src={img1}
          className="max-w-xs md:max-w-md mb-4 md:mb-0"
          alt="Client 1"
        />
        <img
          src={img6}
          className="max-w-xs md:max-w-md mb-4 md:mb-0"
          alt="Client 2"
        />
        <img
          src={img2}
          className="max-w-xs md:max-w-md mb-4 md:mb-0"
          alt="Client 3"
        />
        <img
          src={img3}
          className="max-w-xs md:max-w-md mb-4 md:mb-0"
          alt="Client 4"
        />
        <img
          src={img4}
          className="max-w-xs md:max-w-md mb-4 md:mb-0"
          alt="Client 5"
        />
        <img
          src={img5}
          className="max-w-xs md:max-w-md mb-4 md:mb-0"
          alt="Client 6"
        />
      </div>
    </div>
  );
}

export default Clients;
