import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../NavBar';
import { DetailPagesGroupomania } from '../DetailPagesGroupomania';
import { Footer } from '../Footer';
import React from "react";
import ScrollToTopButton from "../scroll-to-top";

const Groupomania = () => {
  return (
    <div  className="App">
      <NavBar />
      <DetailPagesGroupomania />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Groupomania;