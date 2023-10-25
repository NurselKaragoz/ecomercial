import introImg from "./images/about.png";
import introImgSec from "./images/aboutpic.png";

function About() {
  return (
    <div className="flex flex-col md:flex-row p-10 justify-center">
      <div className="md:w-1/2 flex gap-2">
        <img src={introImg} alt="Image 1" className="w-full" />
        <img src={introImgSec} alt="Image 2" className="w-full" />
      </div>
      <div className="text-left max-w-2xl pt-5 md:pl-10">
        <h5 className="text-colors-blue pb-3">Featured Products</h5>
        <h2 className="text-colors-lacivert">We love what we do</h2>
        <p className="text-colors-gray pt-3">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
          <br /> Problems trying to resolve the conflict between the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
  );
}
export default About;
