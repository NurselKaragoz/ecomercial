import introImg from "./about.png";
import introImgSec from "./aboutpic.png";

function About() {
  return (
    <div>
      <div class="flex  p-10  justify-center">
        <div class="flex  gap-2">
          <img src={introImg} />
          <img src={introImgSec} />
        </div>
        <div class="text-left pl-60 max-w-2xl ">
          <h5 class="text-colors-blue pb-3">Featured Products</h5>
          <h2 class="text-colors-lacivert">We love what we do</h2>
          <p class=" text-colors-gray pt-3">
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
