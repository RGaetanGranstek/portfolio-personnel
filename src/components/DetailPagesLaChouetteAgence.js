// Importation des composants nécessaires pour créer la page de détail de La chouette agence
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectDetailPage } from "./ProjectDetailPages";

// Importation de l'image et du fichier PDF pour la page de détail ainsi que les rapports
// import webfactory from '../assets/img/web_factory.jpg';
import ppointProject from '../assets/img/website/Projet-4-La-Chouette-Agence.pdf'
import ppointProject1 from '../assets/img/website/P4_01_analyse.xlsx'
import ppointProject2 from '../assets/img/website/P4_03_rapport_optimisation.xlsx'

export const DetailPagesLaChouetteAgence = () => {

    // Définition des détails
    const detailPagesLaChouetteAgence = [
        [
        {
            title: `Projet 4 - Optimisez le site web existant "La Chouette Agence"`,
            section:'Compétences évaluées',
            description:`Réaliser une recherche des bonnes pratiques en développement web`,
            description_1:`Assurer l'accessibilité d'un site web`,
            description_2:`Écrire un code HTML et CSS maintenable`,
            description_3:`Optimiser la taille et la vitesse d’un site web`,
            description_4:`Optimiser le référencement d'un site web`,
            section1:'Objectifs',
            description1:`Analyse de l’état actuel de SEO du site fourni.`,
            description1_1:`10 recommandations pour améliorer le SEO du site.`,
            description1_2:`Amélioration du SEO du site.`,
            description1_3:`Accessibilité du site web.`,
            description1_4:`Comparaison des résultats.`,
            imgUrl: "",
        }],
        [
        {
            resultTitle:`Remarques sur l'évaluation`,
            resultSection:`Assurer l'accessibilité d'un site web`,
            resultDescription:`Validé ✅`,
            resultSection1:`Écrire un code HTML et CSS maintenable`,
            resultDescription1:`Validé ✅`,
            resultSection2:`Optimiser le référencement d'un site web`,
            resultDescription2:`Validé ✅`,
            resultSection3:`Réaliser une recherche des bonnes pratiques en développement web`,
            resultDescription3:`Validé ✅`,
            resultSection4:`Optimiser la taille et la vitesse d’un site web`,
            resultDescription4:`Validé ✅`,
            resultSection5:`Livrable`,
            resultDescription5:`Points forts :`,
            resultDescription5_1:`Des livrables au complet et de qualité`,
            resultDescription5_2:`Une intégration qui permet à la fois de corriger les problèmes tout en conservant les grands principes du design initial`,
            resultDescription5_3:`Axes d'amélioration : Aucun`,
            resultSection6:`Soutenance`,
            resultDescription6:`Une très bonne présentation, bien maîtrisée avec un timing respecté`,
            ppointProject: ppointProject,
            altPpoint:`PowerPoint de présentation du Projet 4 La Chouette Agence`,
            ppointProject1: ppointProject1,
            altPpoint1:`Analyse du Projet 4 La Chouette Agence`,
            ppointProject2: ppointProject2,
            altPpoint2:`Rapport d'optimisation du Projet 4 La Chouette Agence`,
        }],
        [
        {
            imgUrl: 'https://rgaetangranstek.github.io/RossignolGaetan_4_23082021/',
            altImg: `Page d'acceuil du site La Chouette Agence`,
            linkSite: 'https://rgaetangranstek.github.io/RossignolGaetan_4_23082021/',
            linkProjectDetail: "/ProjectDetail/LaChouetteAgence"
        }],
      ];

    return (
        <section className="detailPage" id="detailPages">
            <Container>
                <Row>
                    <Col>
                        {/* Création des onglets pour la page de détail de La chouette agence */}
                        <Tab.Container id="detailPages-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Information</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Evaluation</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Aperçu</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        {/* Contenu des onglets */}
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Row className="firstDiv">
                                {/* Affichage des détails de la première section */}
                                {
                                detailPagesLaChouetteAgence[0].map((detailPageLaChouetteAgence, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageLaChouetteAgence}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row className="secondDiv">
                                {/* Affichage des détails de la deuxième section */}
                                {
                                detailPagesLaChouetteAgence[1].map((detailPageLaChouetteAgence, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageLaChouetteAgence}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row className="thirdDiv">
                                {/* Affichage des détails de la troisième section */}
                                {
                                detailPagesLaChouetteAgence[2].map((detailPageLaChouetteAgence, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageLaChouetteAgence}
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