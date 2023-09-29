import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div>
      <div class="  flex bg-colors-lacivert  justify-around flex-row">
        <div class=" flex text-colors-white ">
          <h6>(225) 555-0118 </h6>

          <div class=" flex">
            <h6>Follow Us and get a chance to win 80% off</h6>
          </div>
          <div class=" flex">
            <h6>Follow Us:</h6>
            <FontAwesomeIcon icon />
            <FontAwesomeIcon icon={faCoffee} />
          </div>
        </div>
      </div>
      <div>
        <h2>Bandage</h2>
      </div>
    </div>
  );
}
export default Header;
