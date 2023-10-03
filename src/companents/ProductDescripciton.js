import frontImg from "./images/unsplash_front.png";
import { AiOutlineCheck } from "react-icons/ai";

function ProductDescription() {
  return (
    <div>
      <div className=" text-colors-gray flex  justify-evenly ">
        <h6>Description</h6>
        <h6>Additional Information</h6>
        <h6>
          Reviews <span className=" text-colors-green">(0)</span>
        </h6>
      </div>
      <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden ">
          <img src={frontImg}></img>
        </div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8 flex flex-row">
            <div class=" text-colors-lacivert font-bold text-xl mb-2">
              <h5>the quick fox jumps over </h5>
              <h6 className=" text-colors-gray max-w-2xl ">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met. Met minim Mollie
                non desert Alamo est sit cliquey dolor do met sent. RELIT
                official consequent door ENIM RELIT Mollie. Excitation venial
                consequent sent nostrum met. Met minim Mollie non desert Alamo
                est sit cliquey dolor do met sent. RELIT official consequent
                door ENIM RELIT Mollie. Excitation venial consequent sent
                nostrum met.
              </h6>
            </div>
            <div className=" flex flex-col ">
              <ul className=" text-colors-gray list-image-[url(checkmark.svg)]">
                <h5 className=" text-colors-lacivert">
                  the quick fox jumps over
                </h5>

                <li>the quick fox jumps over the lazy dog</li>
                <li>the quick fox jumps over the lazy dog</li>
                <li>the quick fox jumps over the lazy dog</li>
                <li>the quick fox jumps over the lazy dog</li>
              </ul>
              <div>
                <ul className=" text-colors-gray list-image-[url(checkmark.svg)]">
                  <h5 className=" text-colors-lacivert">
                    the quick fox jumps over
                  </h5>
                  <li>the quick fox jumps over the lazy dog</li>
                  <li>the quick fox jumps over the lazy dog</li>
                  <li>the quick fox jumps over the lazy dog</li>
                  <li>the quick fox jumps over the lazy dog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDescription;
