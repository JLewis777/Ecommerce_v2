import React, { Component } from "react";
import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
// import Data from "../../assets/Data/products.json";
import ProductCard from "./ProductCard";
import "./Guitars.css";

class Guitars extends Component {
  // state = {
  //   showBassGuitars: true,
  //   showElectricGuitars: true,
  //   showAcousticGuitars: true,
  //   showLowestPrice: true,
  //   showHighestPrice: true,
  // };

  // displayBassCards = event => {}

  // displayElectricCards = event => {}

  // displayAcousticCards = event => {}

  // displayHighestPrice = event => {}

  // displayLowestPrice = event => {}

  render() {
    return (
      <div className="products">
        <Navbar />

        <ProductCard />
        <Footer />
      </div>
    );
  }
}

export default Guitars;
