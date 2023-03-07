import { Container, Row, Col } from "react-bootstrap";
import meImg from "../assets/img/GaetanRossignol.jpg";

export const Presentation = () => {

    return (
        <section className="presentation" id="presentation">
            <Container>
                <Row className="presentationRow">
                <h2>Qui suis-je ?</h2>
                <Col size={12} xl={6} className="text-center">
                    <div>
                        <p>Bonjour, je suis Gaëtan Rossignol, développeur web junior et créateur de sites internet.</p>
                        <p>Autodidacte et reconverti dans le numérique en 2021, j’ai commencé à m’auto-former sur les langages HTML, CSS et JS en formation LinkedIn et youtube.</p>
                        <p>En 2021, j’ai intégré la formation développeur web (Openclassrooms) dans lequel j’ai pu consolider ces acquis et travailler sur d’autres domaines (Back-End tel que Node.JS et Express.JS, utiliser des BDD commme MongoDB et MySQL, le SEO ou encore en web design).</p>
                        <p>Passionné par les nouvelles technologies, Je suis à la recherche active d'une entreprise innovante. </p>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img className="presentationImg" src={meImg} alt="Presentation Img"/>
                </Col>
                </Row>
            </Container>
            </section>
    );
}