import TeamCard from "./TeamCard";

function AboutMeet() {
  return (
    <div className="p-4 md:p-20 ">
      <h2 className="text-colors-lacivert">Meet Our Team</h2>
      <p className="text-colors-gray">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="flex md:flex-row md:gap-5 items-center flex-col md:justify-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}

export default AboutMeet;
