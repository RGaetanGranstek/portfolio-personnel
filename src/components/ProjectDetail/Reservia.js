import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../NavBar';
import { DetailPagesReservia } from '../DetailPagesReservia';
import { Footer } from '../Footer';
import React from "react";
import ScrollToTopButton from "../scroll-to-top";

const Reservia = () => {
  return (
    <div className="App">
      <NavBar />
      <DetailPagesReservia />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Reservia;