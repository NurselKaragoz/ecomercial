import "./App.css";
import { Switch, Route, useParams } from "react-router-dom";

import Header from "./companents/Header";

import Navigator from "./companents/Navigator";
import Footer from "./companents/Footer";

import ProductPage from "./companents/ProductPage";
import Home from "./companents/Home";
import ProductListPage from "./companents/ProductListPage";
import ContactPage from "./companents/ContactPage";
import AboutPage from "./companents/AboutPage";
import TeamPage from "./companents/TeamPage";
import SingUpPage from "./companents/SingUpPage";
import LoginPage from "./companents/LoginPage";
import { useEffect } from "react";
import { userAction } from "./Store/Actions/userActions";
import { useDispatch } from "react-redux";
import { fetchRoles } from "./Store/Actions/GlobalActions";
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(userAction.fetchAutoLogin());
    }
  }, []);

  useEffect(() => {
    {
      dispatch(fetchRoles());
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigator />

      <Switch>
        <Route
          path="/:category/:productId/:productName"
          component={ProductPage}
        />
        <Route path="/contact" component={ContactPage} />
        <Route path="/shopping" component={ProductListPage} />
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
