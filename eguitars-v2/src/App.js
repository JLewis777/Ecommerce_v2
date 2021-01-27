import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import Guitars from "./components/Guitars/Guitars";
import guitars from "./components/Guitars/Guitars";

// A filter including highest to lowest price and product type.
// Only show electric guitars, acoustic guitars, or electric basses

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/Guitars" component={Guitars} />
            <Route path="/Contact" component={Contact} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
