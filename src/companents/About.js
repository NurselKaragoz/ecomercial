import introImg from "./about.png";
import introImgSec from "./aboutpic.png";

function About() {
  return (
    <div>
      <div className="flex  p-10  justify-center">
        <div className="flex  gap-2 ">
          <img src={introImg} />
          <img src={introImgSec} />
        </div>
        <div className="text-left pl-60 max-w-2xl ">
          <h5 className="text-colors-blue pb-3">Featured Products</h5>
          <h2 className="text-colors-lacivert">We love what we do</h2>
          <p className=" text-colors-gray pt-3">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
            <br /> Problems trying to resolve the conflict between the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
