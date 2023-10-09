import blogImg from "./images/blogimg.png";
import blogImgSec from "./images/blogImgSec.png";
function Blog() {
  return (
    <div>
      <div className=" pt-24 gap-3">
        <h6 className=" text-colors-blue">Practice Advice</h6>
        <h3 className=" text-colors-lacivert">Featured Posts</h3>
      </div>
      <div className="flex justify-center pt-5 gap-2">
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
            src={blogImg}
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 text-colors-blue">
              English Department
            </h5>
            <h5 className=" text-colors-lacivert">Graphic Desing</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
            src={blogImgSec}
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 text-colors-blue">
              English Department
            </h5>
            <h5 className=" text-colors-lacivert">Graphic Desing</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
