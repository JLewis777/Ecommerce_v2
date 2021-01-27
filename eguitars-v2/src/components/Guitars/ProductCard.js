import { logDOM, render } from "@testing-library/react";
import React, { Component } from "react";
import Data from "../../assets/data/products.json";
import "./ProductCard.css";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.changeTypeHandler = this.changeTypeHandler.bind(this);

    this.state = {
      products: Data,
    };
  }

  changeTypeHandler = (event) => {
    let value = event.target.value;
    // let newGuitars = [...this.state.products];
    // let newArr = [];
    if (value === "Electric") {
      let newProducts = Data.filter((product) => product.type === "Electric");
      this.setState({ products: newProducts });
    } else if (value === "Bass") {
      let newProducts = Data.filter((product) => product.type === "Bass");
      this.setState({ products: newProducts });
    } else if (value === "Acoustic") {
      let newProducts = Data.filter((product) => product.type === "Acoustic");
      this.setState({ products: newProducts });
    } else if (value === "Default") {
      this.setState({ products: Data });
    }
  };

  changePriceHandler = (event) => {
    let value = event.target.value;
    if (value === "High") {
      let newPrices = Data.filter((product) => product.range === "High");
      this.setState({ products: newPrices });
    } else if (value === "Low") {
      let newPrices = Data.filter((product) => product.range === "Low");
      this.setState({ products: newPrices });
    } else if (value === "Default") {
      this.setState({ products: Data });
    }
  };

  render() {
    return (
      <>
        <div className="filter">
          <p className="text1">Type: </p>
          <select id="Guitar Type" onChange={this.changeTypeHandler}>
            <option value="Default">Default</option>
            <option value="Electric">Electric Guitars</option>
            <option value="Bass">Bass Guitars</option>
            <option value="Acoustic">Acoustic Guitars</option>
          </select>

          <p className="text2">Price: </p>
          <select name="Price Range" onChange={this.changePriceHandler}>
            <option value="Default">Default</option>
            <option value="High">Highest Price</option>
            <option value="Low">Lowest Price</option>
          </select>
        </div>
        <div className="all-cards">
          {/* <h2>{Data[0].title}</h2>
          <p>{Data[0].price}</p>
          <p>{Data[0].features}</p> */}

          {this.state.products.map((gt, i) => (
            /* {const IMG = (imgName) => {
            return require(`../../assets/img/${imgName}`)
            }} */

            <div key={i} className="card">
              <h2>{gt.title}</h2>
              <p className="prices">{gt.price}</p>
              <img className="images" src={gt.image} />
              <p>{gt.description}</p>
              <ul>
                {gt.features.map((ft, j) => (
                  <li key={j}>{ft}</li>
                ))}
              </ul>
              <button className="btns">Purchase</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ProductCard;
