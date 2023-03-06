import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../NavBar';
import { DetailPagesOhmyfood } from '../DetailPagesOhmyfood';
import { Footer } from '../Footer';
import React from "react";
import ScrollToTopButton from "../scroll-to-top";

const Ohmyfood = () => {
  return (
    <div  className="App">
      <NavBar />
      <DetailPagesOhmyfood />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Ohmyfood;