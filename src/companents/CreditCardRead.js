import { useDispatch } from "react-redux";
import { deleteCreditCard } from "../Store/Actions/CreditCartActions";
import { updateOrAddCreditCard } from "../Store/Actions/CreditCartActions";
import CreditCard from "./CreditCard";
import { useState } from "react";
function CreditCardRead(props) {
  const { payment } = props;
  const dispatch = useDispatch();
  const [showCard, setShowCard] = useState(false);
  const [editModeData, setEditModeData] = useState(false);

  const onDeleteSubmit = async (data) => {
    try {
      dispatch(deleteCreditCard(data));
      console.log("cardid", data);
    } catch (error) {}
  };

  const onEditSubmit = async (data) => {
    try {
      dispatch(updateOrAddCreditCard(data));
      console.log("editAdressiid", data);
    } catch (error) {}
  };

  return (
    <div class="mx-auto max-w-lg mt-40">
      {showCard && <CreditCard setShowCard={setShowCard} />}

      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="flex justify-between items-center">
            <span class="font-medium text-gray-600">
              {" "}
              {payment.expire_month}/ {payment.expire_year}
            </span>
          </div>
          <div class="mt-4">
            <div class="font-bold text-gray-800 text-xl">{payment.card_no}</div>
            <div class="flex justify-between items-center mt-2 gap-10">
              <div class="text-sm text-gray-600"> {payment.name_on_card}</div>
              <img
                class="h-10 w-10"
                src="https://www.svgrepo.com/show/362011/mastercard.svg"
                alt="Mastercard logo"
              />
            </div>
          </div>
          <div className=" flef  gap-8">
            <button
              onClick={() => {
                onDeleteSubmit(payment.id);
              }}
              type="submit"
              className=" text-red-500 hover:text-red-700  "
            >
              Kredi Kartını Sil
            </button>
            <button
              onClick={() => {
                onEditSubmit(payment.id);
                setShowCard(true);
                setEditModeData(true);
              }}
              className=" text-blue-500 hover:text-blue-700  "
            >
              Düzenle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreditCardRead;
