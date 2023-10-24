import aboutcomppic from "./images/aboutpic.png";

function AboutCompany() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12">
      <div className="text-colors-lacivert text-center md:text-left pt-20">
        <h5 className="pb-10">ABOUT COMPANY</h5>
        <h1>ABOUT US</h1>
        <h4 className="text-colors-gray pt-10 pb-10">
          We know how large objects will act, <br />
          but things on a small scale
        </h4>
        <button className="bg-colors-blue text-white font-bold py-2 px-4 rounded">
          Get Quote Now
        </button>
      </div>
      <div className="md:ml-12">
        <img src={aboutcomppic} alt="Company Image" />
      </div>
    </div>
  );
}

export default AboutCompany;
