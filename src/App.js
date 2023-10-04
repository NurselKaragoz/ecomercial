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
import ProductPage from "./companents/ProductPage";
import Home from "./companents/Home";
import AboutPage from "./companents/AbuotPage";
import ProductListPage from "./companents/ProductListPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />

      <Switch>
        <Route path="/products" component={ProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/productlist" component={ProductListPage} />

        <Route path="/" component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
