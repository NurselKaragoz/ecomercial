import { useForm, register } from "react-hook-form";
import { turkishCities } from "./TurkeysCities";
import { useState } from "react";
function AddressForm({ setShowForm }) {
  const [selectedCity, setSelectedCity] = useState(""); // Seçilen şehri tutacak state
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const { handleSubmit, register } = useForm(); // useForm hook'unu kullanarak formu kontrol et
  const handleClose = () => {
    setShowForm(false);
  };

  const onSubmit = (data) => {
    console.log(data); // form gönderildiğinde verileri konsola yazdır
  };
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value); // Seçilen şehri güncelle
    setSelectedDistrict(""); // İlçeyi sıfırla
  };

  // İlçe seçildiğinde çalışacak fonksiyon
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value); // Seçilen ilçeyi güncelle
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {" "}
      {/* formun onSubmit olayını handleSubmit ile bağla */}
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
                    <div className="md:col-span-5 flex justify-between">
                      <label htmlFor="full_name ">
                        Ad
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          {...register("full_name")} // register ile inputu kontrol et
                        />
                      </label>
                      <label htmlFor="full_name">
                        Soyad
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          {...register("last_name")} // register ile inputu kontrol et
                        />
                      </label>
                    </div>

                    <div className="md:col-span-5 flex justify-between">
                      <label htmlFor="email">
                        Email Address
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          placeholder="email@email.com"
                          {...register("email")} // register ile inputu kontrol et
                        />
                      </label>

                      <label>
                        Telefon{" "}
                        <input
                          type="phone"
                          name="phone"
                          id="phone"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          {...register("phone")} // register ile inputu kontrol et
                        />
                      </label>
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue=""
                        placeholder=""
                        {...register("address")} // register ile inputu kontrol et
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <select
                        name="city"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={selectedCity} // Seçilen şehri value olarak ata
                        onChange={handleCityChange} // Şehir değiştiğinde handleCityChange fonksiyonunu çağır
                      >
                        <option value="">Select a city</option>
                        {turkishCities.map((city) => (
                          <option key={city.plaka} value={city.il}>
                            {city.il}
                          </option>
                        ))}
                      </select>
                      {selectedCity && ( // Eğer bir şehir seçildiyse ilçe seçimini göster
                        <div className="md:col-span-2">
                          <label htmlFor="district">District</label>
                          <select
                            name="district"
                            id="district"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={selectedDistrict} // Seçilen ilçeyi value olarak ata
                            onChange={handleDistrictChange} // İlçe değiştiğinde handleDistrictChange fonksiyonunu çağır
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
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">Country / region</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="country"
                          id="country"
                          placeholder="Country"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          defaultValue=""
                          {...register("country")}
                        />
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                        <button
                          tabIndex="-1"
                          htmlFor="show_more"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="state">State / province</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="state"
                          id="state"
                          placeholder="State"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          defaultValue=""
                          {...register("state")} // register ile inputu kontrol et
                        />
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabindex="-1"
                          for="show_more"
                          class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div class="md:col-span-5">
                      <div class="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="billing_same"
                          id="billing_same"
                          class="form-checkbox"
                        />
                        <label for="billing_same" class="ml-2">
                          My billing address is different than above.
                        </label>
                      </div>
                    </div>

                    <div class="md:col-span-2"></div>

                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Submit
                        </button>
                      </div>
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
