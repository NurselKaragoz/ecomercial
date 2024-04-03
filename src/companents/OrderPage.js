import { useState, useEffect } from "react";
import AddressForm from "./AddressForm";
import AddressRead from "./AddressRead";
import CreditCard from "./CreditCard";
import CreditCardRead from "./CreditCardRead";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress } from "../Store/Actions/shoppingCartActions";
import { fetchCreditCard } from "../Store/Actions/CreditCartActions";

function OrderPage() {
  const [showForm, setShowForm] = useState(false);
  const getData = useSelector((state) => state.shoppingCart?.address);
  const payment = useSelector((state) => state.paymentInfo.payment);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("tab1");
  console.log("getdata", getData);
  console.log("paymenttt=>", payment);

  useEffect(() => {
    dispatch(fetchAddress());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCreditCard());
  }, [dispatch]);

  const handleClick = () => {
    setShowForm(true);
  };

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="text-colors-lacivert flex justify-start flex-col items-center gap-10">
      <div className="flex justify-center">
        <div className="w-full mx-auto">
          <div className="flex border-b border-gray-300">
            <button
              className={`w-1/2 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-tl-lg focus:outline-none ${
                activeTab === "tab1" ? "active:bg-gray-200" : ""
              }`}
              onClick={() => openTab("tab1")}
            >
              Adres Bilgileri{" "}
            </button>
            <button
              className={`w-1/2 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-tr-lg focus:outline-none ${
                activeTab === "tab2" ? "active:bg-gray-200" : ""
              }`}
              onClick={() => openTab("tab2")}
            >
              Ödeme Bilgileri{" "}
            </button>
          </div>
          <div
            id="tab1"
            className={`tabcontent p-4 ${activeTab !== "tab1" ? "hidden" : ""}`}
          >
            <div className="justify-start">
              {showForm && <AddressForm setShowForm={setShowForm} />}
            </div>
            <div className="flex flex-col gap-5 justify-around">
              {getData.map((item) => (
                <AddressRead getData={item} key={item.id} />
              ))}
            </div>
            <button onClick={handleClick}>
              <div className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md max-w-fit p-5">
                <div className="text-colors-blue text-xl font-bold">+</div>
                Yeni Adres Ekle
              </div>
            </button>
          </div>
          <div
            id="tab2"
            className={`tabcontent p-4 ${activeTab !== "tab2" ? "hidden" : ""}`}
          >
            <div>
              <CreditCard />
              <div className="flex gap-5 justify-around">
                {payment.map((item) => (
                  <CreditCardRead payment={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
