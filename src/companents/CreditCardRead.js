import { useSelector } from "react-redux";
import axiosInstance from "../Axios/axiosInstance";
function CreditCardRead(props) {
  const { payment } = props;

  return (
    <div class="mx-auto max-w-lg mt-40">
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="flex justify-between items-center">
            <span class="font-medium text-gray-600">
              {" "}
              {payment[0].expire_month}/ {payment[0].expire_year}
            </span>
          </div>
          <div class="mt-4">
            <div class="font-bold text-gray-800 text-xl">
              {payment[0].card_no}
            </div>
            <div class="flex justify-between items-center mt-2 gap-10">
              <div class="text-sm text-gray-600">
                {" "}
                {payment[0].name_on_card}
              </div>
              <img
                class="h-10 w-10"
                src="https://www.svgrepo.com/show/362011/mastercard.svg"
                alt="Mastercard logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreditCardRead;
