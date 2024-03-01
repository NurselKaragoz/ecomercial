import { useState, useEffect } from "react";
import AddressForm from "./AddressForm";
import AddressRead from "./AddressRead";
import axiosInstance from "../Axios/axiosInstance";

function OrderPage() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/user/address", {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Adres", response.data);
        setGetData(response.data);
      })
      .catch((error) => {
        console.error("Adres formu başarısız", error);
      });
  }, []);

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
      <div className=" flex flex-row gap-5 justify-around">
        {getData.map((getData) => (
          <AddressRead getData={getData} key={getData.id} />
        ))}
      </div>
    </div>
  );
}
export default OrderPage;
