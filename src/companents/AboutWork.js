import workimg from "./images/workwithus.png";

function AboutWork() {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-colors-blue200">
      <div className="text-colors-white text-left flex flex-col justify-center md:w-1/2 p-6 md:pl-36">
        <h5>Work With Us</h5>
        <h2>Now Let’s grow Yours</h2>
        <p>
          The gradual accumulation of information about atomic and <br />
          small-scale behavior during the first quarter of the 20th
        </p>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border w-fit border-colors-white hover:border-transparent rounded">
          Button
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src={workimg} alt="Work With Us" className="object-cover w-full" />
      </div>
    </div>
  );
}

export default AboutWork;
