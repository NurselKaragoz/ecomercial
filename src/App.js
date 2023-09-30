import "./App.css";
import Header from "./companents/Header";
import Container from "./companents/Container";
import Clients from "./companents/Clients";
import Products from "./companents/Products";
import Item from "./companents/Item";
import Navigator from "./companents/Navigator";
import Footer from "./companents/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <Container />
      <Clients />
      <Products />
      <Item />
      <Footer />
    </div>
  );
}

export default App;
