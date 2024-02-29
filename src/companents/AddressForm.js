import { useForm, register } from "react-hook-form";
import { turkishCities } from "./TurkeysCities";
import { useState } from "react";
import axiosInstance from "../Axios/axiosInstance";
import { toast } from "react-toastify";

function AddressForm({ setShowForm }) {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const { handleSubmit, register } = useForm();
  const handleClose = () => {
    setShowForm(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    const postData = {
      title: data.title,
      name: data.name,
      surname: data.surname,
      city: data.city,
      district: data.district,
      phone: data.phone,
      neighborhood: data.neighborhood,
      address: data.address,
    };
    axiosInstance
      .post("/user/address", postData, {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Adres", response.data);
        toast.success("Adresiniz başarıyla eklendi");
      })
      .catch((error) => {
        console.error("Adres formu başarısız", error);
        toast.error("Adresinizi kaydetmek için giriş yapmalısınız!");
      });
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedDistrict("");
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className=" flex justify-end">
                <button
                  onClick={handleClose}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
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
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5 flex justify-center">
                      <label>
                        Adres Başlığı
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          {...register("title")}
                        />
                      </label>
                    </div>
                    <div className="md:col-span-5 flex justify-evenly">
                      <label>
                        Ad
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          {...register("name")}
                        />
                      </label>
                      <label>
                        Soyad
                        <input
                          type="text"
                          name="surname"
                          id="surname"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          {...register("surname")}
                        />
                      </label>
                    </div>
                    <div className="md:col-span-5 flex justify-evenly">
                      <label>
                        Telefon{" "}
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          {...register("phone")}
                        />
                      </label>
                      <label>
                        City
                        <select
                          name="city"
                          id="city"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={selectedCity}
                          onChange={handleCityChange}
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

                    <div className="md:col-span-5 flex justify-evenly">
                      <label>
                        District
                        <select
                          name="district"
                          id="district"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={selectedDistrict}
                          onChange={handleDistrictChange}
                        >
                          <option value="">Select a district</option>
                          {turkishCities
                            .find((city) => city.il === selectedCity)
                            ?.ilceleri.map((district) => (
                              <option key={district} value={district}>
                                {district}
                              </option>
                            ))}
                        </select>
                      </label>
                      <label>
                        Mahalle
                        <input
                          type="text"
                          name="neighborhood"
                          id="neighborhood"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          placeholder=""
                          {...register("neighborhood")}
                        />
                      </label>
                    </div>
                    <div className="md:col-span-3 flex justify-center">
                      <label>
                        Address
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          {...register("address")}
                        />
                      </label>
                    </div>

                    <div className=" flex justify-center">
                      <button className=" bg-colors-lacivert px-5 py-2 text-colors-white rounded-md mt-4 mb-4">
                        Adresi Kaydet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default AddressForm;
