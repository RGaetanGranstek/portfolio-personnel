import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/language/HTML5_logo_and_wordmark.svg";
import css from "../assets/img/language/css-3-logo-svgrepo-com.svg";
import js from "../assets/img/language/Unofficial_JavaScript_logo_2.svg";
import git from "../assets/img/language/Git-logo.svg";
import vuejs from "../assets/img/language/Vue.js_Logo_2.svg";
import react from "../assets/img/language/react.svg";
import sass from "../assets/img/language/Sass_Logo_Color.svg";
import mysql from "../assets/img/language/MySQL.svg";
import mongodb from "../assets/img/language/mongodb-ar21.svg";
import expressjs from "../assets/img/language/expressjs-ar21.svg";
import nodejs from "../assets/img/language/Node.js_logo.svg"
import php from "../assets/img/language/php-ar21.svg";

export const Skills = () => {
  // Configuration pour le composant carrousel.
  // Définit le nombre d'éléments à afficher à différentes tailles de fenêtre.
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1800 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    // Cette section affiche une liste de compétences à l'aide d'un carrousel et de barres de progression
    // Le carrousel affiche les noms de diverses technologies, et est responsive
    // Les barres de progression indiquent le niveau de compétence pour chaque technologie
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compétences</h2>
              <p>Back-End - Front-End</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {/* Afficher l'étoile et les noms des différentes technologies */}
                <div className="item">
                  <img src={html} alt="Logo html" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Logo css" />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Logo javascript" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Logo git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={vuejs} alt="Logo vueJS" />
                  <h5>Vue.js</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Logo react" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={sass} alt="Logo sass" />
                  <h5>Scss</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Logo mySQL" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Logo mongoDB" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={expressjs} alt="Logo expressJS" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Logo NodeJS" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={php} alt="Logo PHP" />
                  <h5>PHP</h5>
                </div>
              </Carousel>
            </div>
          </div>
            <div className="row row2">
              <div className="col-12">
                {/* Afficher des barres de progression pour chaque technologie */}
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress">
                      <p>&#x2605; HTML5</p>
                      <i className="val">90%</i>
                    </span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress1">
                      <p>&#x2605; CSS</p>
                      <i className="val">90%</i>
                    </span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress2">
                      <p>&#x2605; Vue3</p>
                      <i className="val">75%</i>
                    </span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress3">
                      <p>&#x2605; Git</p>
                      <i className="val">60%</i>
                    </span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress4">
                      <p>&#x2605; MYSQL</p>
                      <i className="val">60%</i>
                    </span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress5">
                      <p>&#x2605; Sass</p>
                      <i className="val">75%</i>
                    </span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress6">
                      <p>&#x2605; MongoDB</p>
                      <i className="val">50%</i>
                    </span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress7">
                      <p>&#x2605; NodeJS</p>
                      <i className="val">50%</i>
                    </span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress8">
                      <p>&#x2605; ExpressJS</p>
                      <i className="val">50%</i>
                    </span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress9">
                      <p>&#x2605; JavaScript</p>
                      <i className="val">60%</i>
                    </span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress10">
                      <p>&#x2605; PHP</p>
                      <i className="val">30%</i>
                    </span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" title="barre de progression indiquant le niveau de maitrise de la compétence" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <span className="skillProgress11">
                      <p>&#x2605; React</p>
                      <i className="val">50%</i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
