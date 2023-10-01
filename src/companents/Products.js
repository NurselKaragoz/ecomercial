import image3 from "./unsplash_muOHbrFGEQY.jpg";
import image2 from "./unsplash_MKvjc2kar7Q.jpg";
import image from "./unsplash_Bd7gNnWJBkU (1).jpg";
function Products() {
  return (
    <div class=" flex flex-row justify-center gap-3 pt-20  ">
      <div class="max-w-sm bg-white shadow dark:bg-gray-800 dark:border-gray-700">
        <a>
          <img class="rounded-t-lg" src={image} alt="" />
        </a>
      </div>
      <div class=" flex flex-col gap-3">
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
      <div class=" box-border"></div>
    </div>
  );
}
export default Products;
