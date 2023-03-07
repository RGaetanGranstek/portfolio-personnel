import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Footer } from './Footer';
import { Contact } from './Contact';
// import { Presentation } from './Presentation';
import React from "react";
import ScrollToTopButton from "./scroll-to-top";

const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Presentation /> */}
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;