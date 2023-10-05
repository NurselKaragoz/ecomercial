import ProductCardList from "./ProductCardList";
import ShopListCard from "./ShopListCard";
import Clients from "./Clients";

function ProductListPage() {
  const productList = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
  ];
  const shopList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <div>
      <h2 className=" text-colors-lacivert text-left pl-44 bg-colors-gray100 pt-5 mb-0">
        Shop
      </h2>
      <div className=" flex flex-row flex-wrap gap-15 justify-center pt-10 bg-colors-gray100  mt-0">
        {shopList.map((shoplist) => (
          <ShopListCard key={shoplist.id} />
        ))}
      </div>
      <div className=" flex flex-row flex-wrap gap-20 justify-center pt-10">
        {productList.map((product) => (
          <ProductCardList key={product.id} />
        ))}
      </div>
      <Clients />
    </div>
  );
}
export default ProductListPage;
