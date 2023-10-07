import StartTrial from "./StartTrial";
import TeamCard from "./TeamCard";
import InnovationPart from "./innovationpart";

function TeamPage() {
  const teamList = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];
  return (
    <div>
      <InnovationPart />
      <div className=" text-center pt-10">
        <h1 className=" text-colors-lacivert">Meet Our Team</h1>
      </div>
      <div className=" flex flex-row flex-wrap gap-20 justify-center p-10   mt-0">
        {teamList.map((teamlist) => (
          <TeamCard key={teamlist.id} />
        ))}
      </div>
      <StartTrial />
    </div>
  );
}
export default TeamPage;
