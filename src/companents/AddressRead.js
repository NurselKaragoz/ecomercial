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
  const { getData } = props;

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      dispatch(deleteAddress(data));
      console.log("adressid", data);
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
            <div className=" px-6">
              <div className=" px-6">
                <h2 className="text-sm font-semibold text-gray-900 tracking-wider mb-1">
                  {getData[0].title}
                </h2>
                <p className="text-sm text-gray-700">
                  {getData[0].address}, {getData[0].neighborhood}
                </p>
              </div>
              <h2 className="text-sm font-semibold text-gray-900 tracking-wider mb-1">
                {getData[0].name} {getData[0].surname}
              </h2>
              <p className="text-sm text-red-500 leading-relaxed mb-1">
                {getData[0].district}/{getData[0].city}
              </p>
              <h2 className="text-sm font-semibold text-gray-900 tracking-wider mb-1">
                Telefon
              </h2>
              <p className="text-sm leading-relaxed">
                <span className="text-right">{getData[0].phone}</span>
              </p>
            </div>
            <div className="justify-between gap-5">
              <button
                onClick={() => {
                  onSubmit(getData[0].id);
                }}
                type="submit"
                className="text-xs text-red-500 hover:text-red-700 underline mt-2 ml-auto"
              >
                Adresi Sil
              </button>
              <button
                onClick={() => {
                  setShowForm(true);
                  setEditModeData(true);
                  onSubmit(getData[0].id);
                }}
                className="text-xs text-blue-500 hover:text-blue-700 underline ml-auto"
              >
                Düzenle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressRead;
