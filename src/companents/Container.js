import image from "./images/hero-cover-1.png";
function Container() {
  return (
    <div className=" flex flex-row bg-gradient-to-br from-colors-blue100 to-colors-green100  rounded-xl  m-10">
      <div className=" text-left flex flex-col justify-center pl-24">
        <h5 className=" text-colors-blue200 pb-12">SUMMER 2020</h5>
        <h1 className=" text-colors-lacivert font-bold pb-4  text-6xl">
          NEW COLLECTION
        </h1>
        <p className=" text-colors-gray max-w-xs">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className=" bg-colors-blue text-colors-white  py-2 px-4  rounded font-semibold  w-fit">
          SHOP NOW
        </button>
      </div>
      <div className=" flex pl-96">
        <img src={image} />
      </div>
    </div>
  );
}
export default Container;
