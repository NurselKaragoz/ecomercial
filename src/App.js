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
import ProductListPage from "./companents/ProductListPage";
import ContactPage from "./companents/ContactPage";
import AboutPage from "./companents/AboutPage";
import TeamPage from "./companents/TeamPage";
import SingUpPage from "./companents/SingUpPage";
import LoginPage from "./companents/LoginPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />

      <Switch>
        <Route path="/products" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/productlist" component={ProductListPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/signup" component={SingUpPage} />
        <Route path="/login" component={LoginPage} />

        <Route path="/" component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
