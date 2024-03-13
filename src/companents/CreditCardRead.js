import { useStore } from "react-redux";

function CreditCardRead() {
  const payment = useStore((state) => state.fetchCreditCard.data);
  console.log("payment", payment);
  return (
    <div class="mx-auto max-w-lg mt-40">
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="flex justify-between items-center">
            <span class="font-medium text-gray-600">05/24</span>
          </div>
          <div class="mt-4">
            <div class="font-bold text-gray-800 text-xl">
              **** **** **** 1234
            </div>
            <div class="flex justify-between items-center mt-2">
              <div class="text-sm text-gray-600">CARDHOLDER NAME</div>
              <img
                class="h-10 w-10"
                src="https://www.svgrepo.com/show/362011/mastercard.svg"
                alt="Mastercard logo"
              />
            </div>
          </div>
        </div>
        <div class="bg-gray-100 px-6 py-4">
          <div class="font-medium text-gray-600">CARD VERIFICATION VALUE</div>
          <div class="text-lg font-bold text-gray-800 mt-2">***</div>
        </div>
      </div>
    </div>
  );
}
export default CreditCardRead;
