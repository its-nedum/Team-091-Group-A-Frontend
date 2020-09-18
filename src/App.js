import React from "react";
import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./components/pages/home";
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import Signin from "./components/auth/signin"
import Signup from "./components/auth/signup"
import Hotels from "./components/pages/hotels";
import Flights from "./components/pages/flights";
import Trains from "./components/pages/trains";
import Cars from "./components/pages/cars";
import Tours from "./components/pages/tours";
import Attractions from "./components/pages/attractions";
import Dashboard from "./components/users/dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={Signin} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/flights" component={Flights} />
          <Route path="/trains" component={Trains} />
          <Route path="/cars" component={Cars} />
          <Route path="/tours" component={Tours} />
          <Route path="/attractions" component={Attractions} />
          <Route path="/users/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
