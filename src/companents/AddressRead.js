import { useState } from "react";

function AddressRead(props) {
  const [showForm, setShowForm] = useState(false);
  const { getData } = props;
  console.log("getdata", getData);
  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className="text-colors-lacivert no-underline">
      {/* {isEditing}!
      <AddressForm setShowForm={setShowForm} />; */}
      <p className="block min-w-sm  min-h-max p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <button className=" flex justify-end">Düzenle</button>

        <h5 className="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
          <p> {getData[0].title}</p>
        </h5>
        <div>
          <div>
            <p className=" text-colors-gray text-xs">
              {getData[0].name} {getData[0].surname}
              <span className=" text-right"> {getData[0].phone}</span>
            </p>
            <p>
              {getData[0].address},{getData[0].neighborhood}
            </p>

            <p>
              {getData[0].district}/{getData[0].city}
            </p>
          </div>
        </div>
      </p>
    </div>
  );
}

export default AddressRead;
