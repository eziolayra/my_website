import "../App.css";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import React from "react";
import Review from "./Review";
import Contact from "./Contact";
import Footer from "./footer";

function Combined() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Combined;
