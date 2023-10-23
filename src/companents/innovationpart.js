import innovationpic from "./images/innovationpic.png";
import innovationpic2 from "./images/innovationpic2.png";
import innovationpic3 from "./images/innovation3.png";
import innovationpic4 from "./images/innovationpic4.png";
import innovationpic5 from "./images/innovationpic5.png";

function InnovationPart() {
  return (
    <div>
      <div className="justify-center pb-10">
        <h5 className="text-colors-gray">WHAT WE DO</h5>
        <h2 className="text-colors-lacivert">Innovation tailored for you</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <img src={innovationpic} className="w-full md:w-1/1 object-cover" />
        <div className="flex gap-2 flex-wrap flex-row ">
          <img src={innovationpic2} />
          <img src={innovationpic3} />
          <img src={innovationpic4} />
          <img src={innovationpic5} />
        </div>
      </div>
    </div>
  );
}

export default InnovationPart;
