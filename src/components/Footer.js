import { Container, Row, Col } from "react-bootstrap";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import curriculumVitae from "../assets/img/curriculumVitae/Gaëtan-CV-V3.pdf";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          {/* Ajout d'un lien vers le curriculum vitae */}
          <Col sm={6} className="text-center text-sm-start">
            <a
              href={curriculumVitae}
              title="Liens vers le curriculum vitae de Gaëtan Rossignol"
              className="curriculumVitae"
              target="_blank"
              rel="noopener noreferrer"
            >
              Curriculum Vitae
            </a>
          </Col>
          {/* Ajout d'icônes de médias sociaux et d'un avis de droit d'auteur */}
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://github.com/RGaetanGranstek"
                title="Liens vers la page github de Gaëtan Rossignol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="logo github" />
              </a>
              <a
                href="https://www.linkedin.com/in/gaetan-rossignol-60024a174/"
                title="Liens vers la page linkedin de Gaëtan Rossignol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="logo linkedin" />
              </a>
            </div>
            <p>Copyright 2023. All right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
