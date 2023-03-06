import { Container, Row, Col } from "react-bootstrap";


export const Contact = () => {
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
        <h2>Me contacter</h2>
          <Col size={12} md={6} className="text-center">
            <div>
              <p>
                Pour me contacter, envoyez-moi un email à l'adresse suivante =&gt;
              </p>
            </div>
          </Col>
          <Col size={12} md={6} className="text-center">
            <div align="center">
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
