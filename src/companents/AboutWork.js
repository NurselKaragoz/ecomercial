import workimg from "./images/workwithus.png";
function AboutWork() {
  return (
    <div className=" flex flex-row bg-colors-blue200 justify-between">
      <div className=" text-colors-white text-left  flex flex-col justify-center pl-36">
        <h5>Work With Us</h5>
        <h2>Now Let’s grow Yours</h2>
        <p>
          The gradual accumulation of information about atomic and <br />
          small-scale behavior during the first quarter of the 20th
        </p>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border  border-colors-white hover:border-transparent rounded">
          Button
        </button>
      </div>
      <div className=" flex justify-end">
        <img src={workimg} />
      </div>
    </div>
  );
}
export default AboutWork;
