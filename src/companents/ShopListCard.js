import shoplistimg from "./images/shoplist1.jpg";
function ShopListCard() {
  return (
    <div>
      <div class=" flex pl-10  dark:bg-neutral-700 pb-5">
        <img src={shoplistimg} />
        <div class="absolute pt-36 pl-20">
          <h5 class="mb-2 text-xl font-medium leading-tight  text-colors-white ">
            Cloths
          </h5>
          <p class="mb-4 text-base text-colors-white">5 Items</p>
        </div>
      </div>
    </div>
  );
}
export default ShopListCard;
