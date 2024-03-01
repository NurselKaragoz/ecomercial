import axiosInstance from "../Axios/axiosInstance";
import { useState } from "react";
import { toast } from "react-toastify";
import AddressForm from "./AddressForm";
function AddressRead({ getData }) {
  const [showForm, setShowForm] = useState(false);
  const handleClose = () => {
    setShowForm(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: getData.title,
    name: getData.name,
    surname: getData.surname,
    phone: getData.phone,
    neighborhood: getData.neighborhood,
    address: getData.address,
    city: getData.city,
    district: getData.district,
  });
  axiosInstance
    .put("/user/address", formData, {
      headers: {
        Authorization: ` ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log("Adres güncellendi", response.data);
      toast.success("Adresiniz başarıyla güncellendi");
    })
    .catch((error) => {
      console.error("Adres güncelleme başarısız", error);
      toast.error("Adres bilgileri güncellenirken bir hata oluştu!");
    });
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isEditing) {
    return <AddressForm setShowForm={setShowForm} />;
  }

  return (
    <div className="text-colors-lacivert no-underline">
      <p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <button className=" flex justify-end" onClick={handleEdit}>
          Düzenle
        </button>

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p> {getData.title}</p>
        </h5>
        <div>
          <div>
            <p className=" text-colors-gray text-xs">
              {getData.name} {getData.surname}
              <span className=" text-right"> {getData.phone}</span>
            </p>
            <p>
              {getData.address},{getData.neighborhood}
            </p>

            <p>
              {getData.district}/{getData.city}
            </p>
          </div>
        </div>
      </p>
    </div>
  );
}

export default AddressRead;
