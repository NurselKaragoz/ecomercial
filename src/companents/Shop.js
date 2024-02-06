import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import CarouselDefault from "./Carousel";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
function Shop() {
  const { products } = useSelector((s) => s.product.product);

  let state = useLocation();

  console.log("state curosel", state.pathname);

  const productId = state.pathname.split("/")[2];
  console.log("ProductId shop:", productId);

  return (
    <div className="bg-colors-gray100 pt-14 pb-14">
      <div className=" flex flex-row  items-center text-colors-gray pl-80 pb-10">
        <h5 className=" text-colors-lacivert ">Home</h5>
        <GrFormNext size={30} />
        <h5>Shop</h5>
      </div>
      <div className=" flex md:flex-row justify-center gap-10 md:justify-center flex-col items-center ">
        <CarouselDefault product={products} />

        <div className=" text-colors-gray flex flex-col  max-w-lg text-left gap-2">
          <h4 className=" text-colors-lacivert">
            {/* {products[productId - 2].name} */}
          </h4>
          <div className=" text-colors-yellow flex flex-row items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <span className=" text-colors-gray">10 Reviews</span>
          </div>
          <h5 className=" text-colors-lacivert">
            {/* {products[productId - 2].price}$ */}
          </h5>
          <h6>
            Availability:<span className=" text-colors-blue">In Stock</span>
          </h6>
          {/* <p>{products[productId - 2].description}</p> */}
          <div className=" flex flex-row  gap-2 pb-5 text-colors-lacivert">
            <BsCircleFill size={30} color=" blue" />
            <BsCircleFill size={30} color=" green" />
            <BsCircleFill size={30} color="orange" />
            <BsCircleFill size={30} color=" dark blue" />
          </div>
          <button className=" bg-colors-blue text-colors-white font-bold py-2 px-4 rounded max-w-fit p-2">
            Select Options
          </button>
        </div>
      </div>
    </div>
  );
}
export default Shop;
