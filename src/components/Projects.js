import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import webfactory from '../assets/img/web_factory.jpg';


export const Projects = () => {

    // Création d'un tableau regroupant les informations de chaque projet
    const projects = [
        [
        {
          title: "Reservia",
          description: "Transformez une maquette en site web avec HTML & CSS",
          imgUrl: 'https://rgaetangranstek.github.io/RossignolGaetan_2_01072021/',
          altImg: `Page d'acceuil du site Reservia`,
          linkSite: 'https://rgaetangranstek.github.io/RossignolGaetan_2_01072021/',
          linkProjectDetail: "/portfolio-personnel/ProjectDetail/Reservia"
        },
        {
          title: "Ohmyfood",
          description: "Dynamisez une page web avec des animations CSS",
          imgUrl: 'https://rgaetangranstek.github.io/RossignolGaetan_3_25072021/',
          altImg: `Page d'acceuil du site Ohmyfood`,
          linkSite: 'https://rgaetangranstek.github.io/RossignolGaetan_3_25072021/',
          linkProjectDetail: "/portfolio-personnel/ProjectDetail/Ohmyfood"
        }],
        [{
          title: "La chouette agence",
          description: "Optimisez un site web existant",
          imgUrl: 'https://rgaetangranstek.github.io/RossignolGaetan_4_23082021/',
          altImg: `Page d'acceuil du site La chouette agence`,
          linkSite: 'https://rgaetangranstek.github.io/RossignolGaetan_4_23082021/',
          linkProjectDetail: "/portfolio-personnel/ProjectDetail/LaChouetteAgence"
        },
        {
          title: "Orinoco",
          description: "Construisez un site e-commerce en JavaScript",
          imgUrl: webfactory,
          altImg: `Page d'acceuil du site Orinoco`,
          linkSite: `https://github.com/RGaetanGranstek/RossignolGaetan_5_19092021`,
          linkProjectDetail: "/portfolio-personnel/ProjectDetail/Orinoco"
        }],
        [{
          title: "Piiquante",
          description: "Construisez une API sécurisée pour une application d'avis gastronomiques",
          imgUrl: webfactory,
          altImg: `Page d'acceuil du site Piiquante`,
          linkSite: `https://github.com/RGaetanGranstek/RossignolGaetan_6_21102021`,
          linkProjectDetail: "/portfolio-personnel/ProjectDetail/Piiquante"
        },
        {
          title: "Groupomania",
          description: "Créer un réseau social d'entreprise",
          imgUrl: webfactory,
          altImg: `Page d'acceuil du site Groupomania`,
          linkSite: `https://github.com/RGaetanGranstek/RossignolGaetan_7_23022022`,
          linkProjectDetail: "/portfolio-personnel/ProjectDetail/Groupomania"
        }],
      ];
      
    return (
        // Section qui affiche les projets réalisés
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projets d'étude</h2>
                        <p>Quelques projets réalisés</p>
                        {/* Conteneur pour les onglets de projets */}
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                {/* Onglet pour le premier groupe de projets */}
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Projet 2 & 3</Nav.Link>
                                </Nav.Item>
                                {/* Onglet pour le deuxième groupe de projets */}
                                <Nav.Item >
                                    <Nav.Link eventKey="second">Projet 4 & 5</Nav.Link>
                                </Nav.Item>
                                {/* Onglet pour le troisième groupe de projets */}
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Projet 6 & 7</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        {/* Contenu des onglets */}
                        <Tab.Content xs={12} md={6} xl={7}>
                            {/* Contenu pour le premier groupe de projets */}
                            <Tab.Pane eventKey="first">
                            {/* Description des projets */}
                            <p>• (Reservia) Transformer une maquette en site web : travaillé avec HTML et SCSS pour transformer une maquette en site web fonctionnel. <br></br> • (Ohmyfood) Dynamiser un site web avec des animations CSS : utilisé HTML et SCSS pour ajouter des animations CSS et améliorer l'interaction utilisateur.</p>
                            {/* Cartes des projets */}
                            <Row>
                                {
                                projects[0].map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            {/* Contenu pour le deuxième groupe de projets */}
                            <Tab.Pane eventKey="second">
                            {/* Description des projets */}
                            <p>• (La chouette agence) Optimiser un site web existant : travaillé pour améliorer le référencement naturel (SEO) d'un site web existant. <br></br> • (Orinoco) Construire un site e-commerce en JavaScript : développé la partie frontend d'un site e-commerce en utilisant JavaScript. Le back-end a été fourni.</p>
                            {/* Cartes des projets */}
                            <Row>
                                {
                                projects[1].map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            {/* Contenu pour le troisième groupe de projets */}
                            <Tab.Pane eventKey="third">
                            {/* Description des projets */}
                            <p>• (Piiquante) Construire une API sécurisée pour une application d'avis gastronomiques : développé la partie back-end sécurisée pour une application d'avis gastronomiques. La partie front-end a été fournie. <br></br> • (Groupomania) Créer un réseau social d'entreprise : développé à la fois le back-end et le front-end d'un réseau social d'entreprise en utilisant Vue.js.</p>
                            {/* Cartes des projets */}
                            <Row>
                                {
                                projects[2].map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}