import "./App.css";
import Header from "./companents/Header";
import Container from "./companents/Container";
import Clients from "./companents/Clients";
import Products from "./companents/Products";
import Item from "./companents/Item";

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Clients />
      <Products />
      <Item />
    </div>
  );
}

export default App;
