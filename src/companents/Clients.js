import img1 from "./col-md-2.svg";
import img2 from "./col-md-2-1.svg";
import img3 from "./col-md-2-2.svg";
import img4 from "./col-md-2-3.svg";
import img5 from "./col-md-2-4.svg";
import img6 from "./col-md-2-5.svg";

function Clients() {
  return (
    <div>
      <div class=" flex flex-row justify-around mt-3 items-center">
        <img src={img1}></img>
        <img src={img6}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        <img src={img4}></img>
        <img src={img5}></img>
      </div>
    </div>
  );
}
export default Clients;
