import { BiSolidBookReader } from "react-icons/bi";
import { CgReadme } from "react-icons/cg";
import { FaArrowTrendUp } from "react-icons/fa6";
function Service() {
  return (
    <div>
      <div>
        <h2 class=" text-colors-gray pb-2">Featured Products</h2>
        <h3 class="text-colors-lacivert">THE BEST SERVICES</h3>
        <p class=" text-colors-gray">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div class=" text-colors-blue flex gap-5 justify-center pt-24">
        <div class=" max-w-xs flex flex-col ">
          <BiSolidBookReader size={70} />
          <h3 class="text-colors-lacivert">Easy Wins</h3>
          <p class="text-colors-gray">Get your best looking smile now!</p>
        </div>
        <div class="text-center max-w-xs ">
          <CgReadme size={70} />
          <h3 class="text-colors-lacivert">Concrete</h3>
          <p class="text-colors-gray">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div class=" max-w-xs ">
          <FaArrowTrendUp size={70} />

          <h3 class="text-colors-lacivert">Hack Growth</h3>
          <p class="text-colors-gray">
            Overcame any hurdle or any other problem.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Service;
