import image3 from "./images/unsplash_muOHbrFGEQY.jpg";
import image2 from "./images/unsplash_MKvjc2kar7Q.jpg";
import image from "./images/unsplash_Bd7gNnWJBkU (1).jpg";

function Introduction() {
  return (
    <div class="relative bg-colors-transparent ">
      <div className="flex flex-col md:flex-row justify-center gap-3 pt-4 md:pt-20 items-center">
        <div className=" bg-white shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={image} alt="" />
          <div class="absolute bottom-0 h-40 w-80 bg-colors-blue300 opacity-75 text-left">
            <h6 className=" text-colors-white text-center">
              Top Product Of the Week
            </h6>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-colors-white ml-16">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="max-w-md bg-white shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={image2} alt="" />
            <div class="absolute top-20 h-40 w-80 bg-colors-blue300 opacity-75 text-left">
              <h6 className=" text-colors-white text-center">
                Top Product Of the Week
              </h6>
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-colors-white ml-16">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
          <div className="max-w-md bg-white shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={image3} alt="" />
            <div class="absolute bottom-2 h-40 w-80 bg-colors-blue300 opacity-75 text-left">
              <h6 className=" text-colors-white text-center">
                Top Product Of the Week
              </h6>
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-colors-white ml-16">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
