import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCreditCart } from "../Store/Actions/CreditCartActions";

function CreditCard() {
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
    dispatch(addCreditCart(data));
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-medium mb-6">Kart Bilgileri</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Kart Numarası{" "}
              </label>
              <input
                type="text"
                name="card_no"
                id="card-number"
                placeholder="0000 0000 0000 0000"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                {...register("cart_no")}
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
