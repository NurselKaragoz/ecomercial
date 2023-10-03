import Container from "./Container";
import Clients from "./Clients";
import Introduction from "./Intoduction";
import Item from "./Item";
import About from "./About";
import Service from "./Service";
import Blog from "./Blog";

function Home() {
  return (
    <div>
      <Container />
      <Clients />
      <Introduction />
      <Item />
      <About />
      <Service />
      <Blog />
    </div>
  );
}

export default Home;
