import { data } from "./Data";
function Item() {
  return (
    <div>
      <div>
        <h3 className=" text-colors-gray">Featured Products</h3>
        <h2>BESTSELLER PRODUCT</h2>
        <p>Problems trying to resolve the conflict between </p>
        <div>{data.img}</div>
      </div>
    </div>
  );
}
export default Item;
