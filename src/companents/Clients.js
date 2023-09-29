import img1 from "./col-md-2.png";
import img2 from "./col-md-2-1.png";
import img3 from "./col-md-2-2.png";
import img4 from "./col-md-2-3.png";
import img5 from "./col-md-2-4.png";
import img6 from "./col-md-2-5.png";

function Clients() {
  return (
    <div>
      <div class=" flex flex-row justify-around mt-3">
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        <img src={img4}></img>
        <img src={img5}></img>
        <img src={img6}></img>
      </div>
    </div>
  );
}
export default Clients;
