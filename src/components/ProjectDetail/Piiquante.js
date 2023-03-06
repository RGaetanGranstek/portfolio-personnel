import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../NavBar';
import { DetailPagesPiiquante } from '../DetailPagesPiiquante';
import { Footer } from '../Footer';
import React from "react";
import ScrollToTopButton from "../scroll-to-top";

const Piiquante = () => {
  return (
    <div  className="App">
      <NavBar />
      <DetailPagesPiiquante />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Piiquante;