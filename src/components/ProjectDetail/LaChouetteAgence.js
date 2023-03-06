import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../NavBar';
import { DetailPagesLaChouetteAgence } from '../DetailPagesLaChouetteAgence';
import { Footer } from '../Footer';
import React from "react";
import ScrollToTopButton from "../scroll-to-top";

const LaChouetteAgence = () => {
  return (
    <div  className="App">
      <NavBar />
      <DetailPagesLaChouetteAgence />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default LaChouetteAgence;