import { useForm } from "react-hook-form";
import { useState } from "react";
import { turkishCities } from "./TurkeysCities";
import { useDispatch } from "react-redux";
import { setAddress } from "../Store/Actions/shoppingCartActions";
import { editAddress } from "../Store/Actions/shoppingCartActions";

function AddressForm({ setShowForm }, { editModeData }) {
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const handleClose = () => {
    setShowForm(false);
  };

  const onSubmit = (data) => {
    console.log("editdataform", data);
    if (editModeData) {
      dispatch(editAddress(data));
    } else {
      dispatch(setAddress(data));
    }
    setShowForm(false);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
    setSelectedDistrict("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-gray-100 flex items-center justify-center text-colors-lacivert">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 flex flex-col">
                <div className="flex justify-end">
                  <button
                    onClick={handleClose}
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
                </div>
                <div className="md:col-span-5 flex justify-center">
                  <label className="flex flex-col">
                    Adres Başlığı
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="h-10 border mt-1 rounded px-4 w-full border-colors-lacivert"
                      defaultValue=""
                      {...register("title")}
                    />
                  </label>
                </div>
                <div className="md:col-span-5 flex justify-between gap-3 ">
                  <label className="flex flex-col">
                    Ad
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="h-10 border mt-1 rounded px-4 w-full border-colors-lacivert"
                      defaultValue=""
                      {...register("name")}
                    />
                  </label>
                  <label className="flex flex-col">
                    Soyad
                    <input
                      type="text"
                      name="surname"
                      id="surname"
                      className="h-10 border mt-1 rounded px-4 w-full border-colors-lacivert"
                      defaultValue=""
                      {...register("surname")}
                    />
                  </label>
                </div>
                <div className="md:col-span-5 flex justify-between gap-3">
                  <label className="flex flex-col">
                    Telefon{" "}
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="h-10 border mt-1 rounded px-4 w-full border-colors-lacivert"
                      defaultValue=""
                      {...register("phone")}
                    />
                  </label>
                  <label className="flex flex-col">
                    Şehir{" "}
                    <select
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full border-colors-lacivert"
                      value={selectedCity}
                      onChange={handleCityChange}
                      {...register("city")}
                    >
                      <option value="">Select a city</option>
                      {turkishCities.map((city) => (
                        <option key={city.plaka} value={city.il}>
                          {city.il}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="md:col-span-5 flex justify-between">
                  <label className="flex flex-col">
                    İlçe
                    <input
                      type="text"
                      name="district"
                      id="district"
                      className="h-10 border mt-1 rounded px-4 w-full border-colors-lacivert"
                      {...register("district")}
                    />
                  </label>
                  <label className="flex flex-col">
                    Mahalle
                    <input
                      type="text"
                      name="neighborhood"
                      id="neighborhood"
                      className="h-10 border mt-1 rounded px-4 w-full border-colors-lacivert"
                      defaultValue=""
                      placeholder=""
                      {...register("neighborhood")}
                    />
                  </label>
                </div>
                <div className="md:col-span-3 flex justify-center">
                  <label className="flex flex-col">
                    <textarea
                      Address
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full border-colors-lacivert"
                      placeholder=""
                      {...register("address")}
                    ></textarea>
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className=" bg-colors-lacivert text-colors-white px-5 py-2 rounded-md mt-4 mb-4"
                >
                  Adresi Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddressForm;
