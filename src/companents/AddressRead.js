import { useState } from "react";
import AddressForm from "./AddressForm";
import { editAddress } from "../Store/Actions/shoppingCartActions";
import { useDispatch } from "react-redux";

function AddressRead(props) {
  const [showForm, setShowForm] = useState(false);
  const [editModeData, setEditModeData] = useState(false);

  const { getData } = props;
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      dispatch(editAddress(data));

      const queryParams = new URLSearchParams({
        addressId: data,
      });
      window.history.replaceState({}, "", `?${queryParams.toString()}`);
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
            <button
              onClick={() => {
                setShowForm(true);
                setEditModeData(true);
                onSubmit(getData[0].id);
              }}
              className="flex justify-end"
            >
              Düzenle
            </button>
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                <p> {getData[0].title}</p>
              </h2>
              <p className="mt-1">
                {getData[0].address},{getData[0].neighborhood}
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                {getData[0].name} {getData[0].surname}
              </h2>
              <h2
                href="mailto:example@email.com"
                className="text-red-500 leading-relaxed"
              >
                {getData[0].district}/{getData[0].city}
              </h2>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Telefon{" "}
              </h2>
              <p className="leading-relaxed">
                {" "}
                <span className="text-right"> {getData[0].phone}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressRead;
