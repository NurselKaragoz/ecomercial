import frontImg from "./images/unsplash_front.png";

function ProductDescription() {
  return (
    <div>
      <div className=" text-colors-gray flex  justify-evenly pb-3 ">
        <h6>Description</h6>
        <h6>Additional Information</h6>
        <h6>
          Reviews <span className=" text-colors-green">(0)</span>
        </h6>
      </div>
      <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center ">
        <div class=" flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden pt-16  border-t border-colors-gray100  bg-blend-overlay">
          <img src={frontImg}></img>
        </div>

        <div class="border-t border-colors-gray100 p-4 flex flex-col justify-between  ">
          <div class="mb-8 flex flex-row pt-9">
            <div class=" text-colors-lacivert font-bold mb-2 max-w-sm pt-6">
              <h5 className=" text-left">the quick fox jumps over </h5>
              <h6 className=" text-colors-gray text-left ">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h6>

              <h6 className=" text-colors-gray text-left  ">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h6>
              <h6 className=" text-colors-gray text-left ">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h6>
            </div>
            <div className=" flex flex-col  pt-6">
              <ul className=" text-colors-gray list-image-[url(checkmark.svg)]">
                <h5 className=" text-colors-lacivert text-left">
                  the quick fox jumps over
                </h5>

                <li>the quick fox jumps over the lazy dog</li>
                <li>the quick fox jumps over the lazy dog</li>
                <li>the quick fox jumps over the lazy dog</li>
                <li>the quick fox jumps over the lazy dog</li>
              </ul>
              <div>
                <ul className=" text-colors-gray list-image-[url(checkmark.svg)]">
                  <h5 className=" text-colors-lacivert text-left">
                    the quick fox jumps over
                  </h5>
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