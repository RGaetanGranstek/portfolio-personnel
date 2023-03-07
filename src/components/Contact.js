import { Container, Row, Col } from "react-bootstrap";
import arrowGreen from "../assets/img/double-arrow-button.jpg";

export const Contact = () => {
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
        <h2>Me contacter</h2>
          <Col size={12} md={6} className="text-center">
            <div>
              <p>
                Pour toutes informations complémentaires, contactez-moi par email à l'adresse suivante:
              </p>
            </div>
          </Col>
          <Col size={12} md={6} className="text-center">
            <div className="mailImgContact" align="center">
              <img className="imgContact" src={arrowGreen} alt="Arrow Green Img"/>
            </div>
            <div className="mailContact" align="center">
              <a href="mailto:xynfsu-granstek@live.fr" title="Envoyer un email à Gaëtan Rossignol">
                xynfsu-granstek@live.fr
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
