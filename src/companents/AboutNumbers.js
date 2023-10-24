function AboutNumbers() {
  return (
    <div className="flex flex-col md:flex-row justify-around pb-10 pt-10">
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-colors-lacivert">15K</h1>
        <h5 className="text-colors-gray">Happy Customers</h5>
      </div>
      <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-colors-lacivert">150K</h1>
        <h5 className="text-colors-gray">Monthly Visitors</h5>
      </div>
      <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-colors-lacivert">15</h1>
        <h5 className="text-colors-gray">Countries Worldwide</h5>
      </div>
      <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-colors-lacivert">100+</h1>
        <h5 className="text-colors-gray">Top Partners</h5>
      </div>
    </div>
  );
}

export default AboutNumbers;
