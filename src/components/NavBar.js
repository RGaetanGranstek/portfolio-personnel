import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import logo from "../assets/img/Logo.jpg";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";

export const NavBar = () => {
  // Ce code importe le hook useLocation et définit des variables d’état pour le lien actif et indique si l’utilisateur a fait défiler.
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, seScrolled] = useState(false);

  // Ce hook useEffect ajoute un écouteur d’événement à l’objet window pour suivre le comportement de défilement.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  // Cette fonction met à jour la variable d’état de lien actif.
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // Détermine si la page active est la page d’accueil en vérifiant le chemin d’accès actuel par rapport à plusieurs pages de détails du projet. Le résultat de cette vérification est stocké dans la constante isHomePage, ce qui sera vrai si la page active est l’une des pages de détail du projet et false dans le cas contraire.
  const isHomePage =
    location.pathname === "/ProjectDetail/Reservia" ||
    location.pathname === "/ProjectDetail/Ohmyfood" ||
    location.pathname === "/ProjectDetail/Orinoco" ||
    location.pathname === "/ProjectDetail/Piiquante" ||
    location.pathname === "/ProjectDetail/LaChouetteAgence" ||
    location.pathname === "/ProjectDetail/Groupomania";

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* Le composant Navbar.Brand contient un lien vers la page d'accueil et affiche le logo du site Web. */}
        <Navbar.Brand href="/portfolio-personnel/">
          <img id="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        {/* Le composant Navbar.Toggle crée un bouton qui bascule l'affichage des liens de la barre de navigation sur les petits écrans. */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        {/* Le composant Navbar.Collapse contient les liens qui seront affichés lorsque la barre de navigation sera développée. */}
        <Navbar.Collapse>
          <Nav id="basic-navbar-nav" className="navbar-nav mr-auto">
            {/* les composants Nav.Link créent des liens vers la page d'accueil et d'autres sections du site Web. Le nom de classe est défini sur "lien de barre de navigation actif" lorsque le lien est actuellement sélectionné. */}
            <Nav.Link
              href="/portfolio-personnel/#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Accueil
            </Nav.Link>
          {/* Les deux composants Nav.Link suivants ne seront affichés que si la page actuelle n'est pas la page d'accueil. */}
          {!isHomePage && (
            <Nav.Link
              href="/portfolio-personnel/#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Compétences
            </Nav.Link>
          )}
          {!isHomePage && (
            <Nav.Link
              href="/portfolio-personnel/#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projets
            </Nav.Link>
          )}
          {/* Le code suivant affiche les icônes des médias sociaux dans la barre de navigation. */}
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://github.com/RGaetanGranstek"
                title="Liens vers la page github de gaëtan rossignol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="logo github" />
              </a>
              <a
                href="https://www.linkedin.com/in/gaetan-rossignol-60024a174/"
                title="Liens vers la page linkedin de gaëtan rossignol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="logo linkedin" />
              </a>
            </div>
          </span>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
