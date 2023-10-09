import image3 from "./images/unsplash_muOHbrFGEQY.jpg";
import image2 from "./images/unsplash_MKvjc2kar7Q.jpg";
import image from "./images/unsplash_Bd7gNnWJBkU (1).jpg";
function Introduction() {
  return (
    <div className=" flex flex-row justify-center gap-3 pt-20  ">
      <div className="max-w-sm bg-white shadow dark:bg-gray-800 dark:border-gray-700">
        <a>
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
      </div>
      <div className=" flex flex-col gap-3">
        <div className="max-w-sm bg-white shadow dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img className="rounded-t-lg" src={image2} alt="" />
          </a>
        </div>
        <div className="max-w-sm bg-white shadow dark:bg-gray-800 dark:border-gray-700">
          <a>
            <img className="rounded-t-lg" src={image3} alt="" />
          </a>
        </div>
      </div>
      <div className=" box-border"></div>
    </div>
  );
}
export default Introduction;
