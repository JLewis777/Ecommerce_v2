import React from "react";
import "./Slideshow.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";

const slideImages = [slide1, slide2, slide3];

const slideShow = () => {
  return (
    <>
      <div className="whole">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              <span>In-depth variety</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <span>Professional setups</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <span>Pedals coming soon!</span>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default slideShow;
