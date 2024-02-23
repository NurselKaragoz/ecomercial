import { useState } from "react";
import AddressForm from "./AddressForm";
function OrderPage() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

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
    </div>
  );
}
export default OrderPage;
