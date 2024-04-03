import { useState } from "react";
import AddressForm from "./AddressForm";
import {
  deleteAddress,
  editAddress,
} from "../Store/Actions/shoppingCartActions";
import { useDispatch } from "react-redux";

function AddressRead(props) {
  const [showForm, setShowForm] = useState(false);
  const [editModeData, setEditModeData] = useState(false);
  const getData = props;
  console.log("AddressRead =>", getData);

  const dispatch = useDispatch();

  const onDeleteSubmit = async (data) => {
    try {
      dispatch(deleteAddress(data));
      console.log("adressid", data);
    } catch (error) {}
  };

  const onEditSubmit = async (data) => {
    try {
      dispatch(editAddress(data));
      console.log("editAdressiid", data);
    } catch (error) {}
  };

  return (
    <div className="text-colors-lacivert no-underline">
      {showForm && (
        <AddressForm setShowForm={setShowForm} editModeData={editModeData} />
      )}
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className=" px-12">
              <div className=" px-12">
                <h2 className="text-sm font-semibold text-gray-900 tracking-wider mb-1">
                  {getData.getData.title}
                </h2>
                <p className="text-sm text-gray-700">
                  {getData.getData.address}, {getData.getData.neighborhood}
                </p>
              </div>
              <h2 className="text-sm font-semibold text-gray-900 tracking-wider mb-1">
                {getData.getData.name} {getData.getData.surname}
              </h2>
              <p className="text-sm text-red-500 leading-relaxed mb-1">
                {getData.getData.district}/{getData.getData.city}
              </p>
              <h2 className="text-sm font-semibold text-gray-900 tracking-wider mb-1">
                Telefon
              </h2>
              <p className="text-sm leading-relaxed">
                <span className="text-right">{getData.getData.phone}</span>
              </p>
              <div className=" flef  gap-8">
                <button
                  onClick={() => {
                    onDeleteSubmit(getData.getData.id);
                  }}
                  type="submit"
                  className=" text-red-500 hover:text-red-700  "
                >
                  Adresi Sil
                </button>
                <button
                  onClick={() => {
                    setShowForm(true);
                    setEditModeData(true);
                    onEditSubmit(getData.getData.id, getData);
                  }}
                  className=" text-blue-500 hover:text-blue-700  "
                >
                  Düzenle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressRead;
