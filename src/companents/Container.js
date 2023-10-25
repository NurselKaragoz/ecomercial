import image from "./images/hero-cover-1.png";

function Container() {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-colors-blue100 to-colors-green100 rounded-xl m-4 md:m-10">
      <div className="text-center flex flex-col justify-center px-6 md:pl-24">
        <h5 className="text-colors-blue200 pb-2 md:pb-12">SUMMER 2020</h5>
        <h1 className="text-colors-lacivert font-bold text-3xl md:text-6xl pb-4">
          NEW COLLECTION
        </h1>
        <p className="text-colors-gray max-w-xs md:max-w-full text-center">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-colors-blue text-colors-white py-2 px-4 rounded font-semibold w-fit mt-2 justify-center">
          SHOP NOW
        </button>
      </div>
      <div className="flex justify-center">
        <img src={image} alt="New Collection" />
      </div>
    </div>
  );
}

export default Container;
