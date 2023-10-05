import AboutCompany from "./AboutCompany";
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
      <ClientsAdd />
      <Clients />
      <AboutWork />
    </div>
  );
}
export default AboutPage;
