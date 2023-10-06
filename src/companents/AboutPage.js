import AboutCompany from "./AboutCompany";
import AboutMeet from "./AboutMeet";
import AboutNumbers from "./AboutNumbers";
import AboutProblem from "./AboutProblem";
import AboutVideoCard from "./AboutVideoCard";
import AboutWork from "./AboutWork";
import Clients from "./Clients";
import ClientsAdd from "./ClientsAdd";

function AboutPage() {
  return (
    <div>
      <AboutCompany />
      <AboutProblem />
      <AboutNumbers />
      <AboutVideoCard />
      <AboutMeet />
      <ClientsAdd />
      <Clients />
      <AboutWork />
    </div>
  );
}
export default AboutPage;
