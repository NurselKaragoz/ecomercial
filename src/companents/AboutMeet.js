import TeamCard from "./TeamCard";

function AboutMeet() {
  return (
    <div className="p-4 md:p-20">
      <h2 className="text-colors-lacivert">Meet Our Team</h2>
      <p className="text-colors-gray">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="flex flex-col md:flex-row justify-center md:gap-5">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}

export default AboutMeet;
