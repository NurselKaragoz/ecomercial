function ShopListCard({ category }) {
  return (
    <div>
      <div className=" flex pl-10  dark:bg-neutral-700 pb-5">
        <img src={category.img} width={200} height={200} />
        <div className="absolute pt-36 pl-20">
          <h5 className="mb-2 text-xl font-medium leading-tight  text-colors-white ">
            {category.title}
          </h5>
          <p className="mb-4 text-base text-colors-white">5 Items</p>
        </div>
      </div>
    </div>
  );
}
export default ShopListCard;
