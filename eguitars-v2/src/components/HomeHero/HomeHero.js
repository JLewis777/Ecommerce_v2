import React from "react";
import "./HomeHero.css";
// import logo from "img/Ericzanderlogo3.jpeg";
import Slideshow from "../../Slideshow/Slideshow";

const homehero = () => (
  <main>
    <div className="container">
      <div className="hero">
        <h1>
          Welcome to <br /> Ericzander Guitars
        </h1>

        <p>
          The best source for professional high end guitars, basses, and
          acoustics from top brands such as PRS, Ibanez, Gibson, etc. Our
          inventory is always growing so we can meet your needs when it comes to
          finding exactly what fits your taste in an instrument.
        </p>
        {/* <!-- I could replace this with the slider --> */}
        {/* <img src={logo} alt="Ericzander Logo 3" /> */}
        <Slideshow />
      </div>
    </div>
  </main>
);

export default homehero;
