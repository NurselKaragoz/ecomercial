import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./companents/Header";
import Container from "./companents/Container";
import Clients from "./companents/Clients";
import Introduction from "./companents/Intoduction";
import Item from "./companents/Item";
import Navigator from "./companents/Navigator";
import Footer from "./companents/Footer";
import About from "./companents/About";
import Service from "./companents/Service";
import Blog from "./companents/Blog";
import ProductList from "./companents/ProductList";
import Home from "./companents/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />

      <Switch>
        <Route path="/products" component={ProductList} />
        <Route path="/" component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
