import image3 from "./unsplash_muOHbrFGEQY.jpg";
import image2 from "./unsplash_MKvjc2kar7Q.jpg";
import image from "./unsplash_Bd7gNnWJBkU.jpg";
function Products() {
  return (
    <div class=" flex flex-row justify-center">
      <div class="max-w-sm bg-white shadow dark:bg-gray-800 dark:border-gray-700">
        <a>
          <img class="rounded-t-lg" src={image} alt="" />
        </a>
      </div>
      <div class=" flex flex-col">
        <div class="max-w-sm bg-white shadow dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img class="rounded-t-lg" src={image2} alt="" />
          </a>
        </div>
        <div class="max-w-sm bg-white shadow dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img class="rounded-t-lg" src={image3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Products;
