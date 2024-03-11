import { useState } from "react";
import AddressForm from "./AddressForm";
import AddressRead from "./AddressRead";
import { useDispatch, useSelector } from "react-redux";

function OrderPage() {
  const [showForm, setShowForm] = useState(false);
  const getData = useSelector((state) => state.shoppingCart.address);
  console.log("adresread", getData);

  const handleClick = () => {
    setShowForm(true);
  };

  const dispatch = useDispatch();

  return (
    <div className=" text-colors-lacivert flex justify-start flex-col items-center gap-10">
      <button onClick={handleClick}>
        <div className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md max-w-fit p-5">
          <div className=" text-colors-blue text-xl font-bold">+</div>
          Yeni Adres Ekle
        </div>
      </button>
      <div className=" justify-start">
        {showForm && <AddressForm setShowForm={setShowForm} />}
      </div>
      <div className=" flex flex-col gap-5 justify-around">
        {getData.map((item) => (
          <AddressRead getData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
export default OrderPage;
