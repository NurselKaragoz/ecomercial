import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateOrAddCreditCard } from "../Store/Actions/CreditCartActions";

function CreditCard({ setShowCard }) {
  const [formData, setFormData] = useState({
    card_no: "",
    expirationMonth: "",
    expirationYear: "",
    cardHolderName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log("cartbilgileri", data);
    dispatch(updateOrAddCreditCard(data));
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <button
          onClick={() => {
            setShowCard(true);
          }}
          type="button"
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-lg font-medium mb-6">Kart Bilgileri</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kart Numarası{" "}
              </label>
              <input
                type="text"
                name="card_no"
                id="card-number"
                placeholder="0000 0000 0000 0000"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                {...register("card_no")}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="expiration-month"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Son Kullanma Tarihi Ay{" "}
              </label>
              <input
                type="text"
                name="expirationMonth"
                id="expiration-month"
                placeholder="MM"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                {...register("expire_month")}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="expiration-year"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Son Kullanma Tarihi Yıl{" "}
              </label>
              <input
                type="text"
                name="expirationYear"
                id="expiration-year"
                placeholder="YY"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                {...register("expire_year")}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="card-holder"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Kart Üzerindeki İsim{" "}
              </label>
              <input
                type="text"
                name="cardHolderName"
                id="card-holder"
                placeholder="Full Name"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                {...register("name_on_card")}
              />
            </div>
          </div>
          <div className="mt-8">
            <button type="submit" className=" w-full border-colors-blue200">
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreditCard;
