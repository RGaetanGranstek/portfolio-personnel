import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../NavBar';
import { DetailPagesOrinoco } from '../DetailPagesOrinoco';
import { Footer } from '../Footer';
import React from "react";
import ScrollToTopButton from "../scroll-to-top";

const Orinoco = () => {
  return (
    <div  className="App">
      <NavBar />
      <DetailPagesOrinoco />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Orinoco;