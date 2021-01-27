import React from "react";
// import classes from "./Homepage.module.css";
import HomeHero from "../HomeHero/HomeHero";
import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import Slideshow from "../../Slideshow/Slideshow";

const homepage = () => (
  <>
    <Navbar />
    {/* // <h1 className={classes.Homepage}>This is Working</h1> */}
    <HomeHero />
    {/* <Slideshow /> */}
    <Footer />
  </>
);

export default homepage;
