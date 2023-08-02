import React from "react";
import NavBar from "./navbar/NavBar";
import Carosel from "./carosel/Carosel";
import Card from "./card/Card";
import Footer from "./footter/Footer";

const MainComp = () => {
  return (
    <div>
      <Carosel />
      <Card />
      <Footer />
    </div>
  );
};

export default MainComp;
