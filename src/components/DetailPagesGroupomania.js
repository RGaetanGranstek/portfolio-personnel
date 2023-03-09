// Importation des composants nécessaires pour créer la page de détail de Groupomania
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectDetailPage } from "./ProjectDetailPages";

// Importation de l'image et du fichier PDF pour la page de détail
import webfactory from '../assets/img/web_factory.jpg';
import ppointProject from '../assets/img/website/Projet-7-Groupomania.pdf'

export const DetailPagesGroupomania = () => {

    // Définition des détails
    const detailPagesGroupomania = [
        [{
            title: `Projet 7 - Créez un réseau social d’entreprise "GROUPOMANIA"`,
            section:'Compétences évaluées',
            description:`Authentifier un utilisateur et maintenir sa session`,
            description_1:`Personnaliser le contenu envoyé à un client web`,
            description_2:`Gérer un stockage de données à l'aide de SQL`,
            description_3:`Implémenter un stockage de données sécurisé en utilisant SQL`,
            description_4:`Respecter les spécifications fonctionnelles et techniques`,
            imgUrl: "",
        }],
        [{
            resultTitle:`Remarques sur l'évaluation`,
            resultSection:`Compétences évaluées`,
            resultDescription:`En vous basant sur les critères d’évaluation du projet, définissez le statut d’acquisition de chaque compétence et commentez à l'aide de ces instructions :`,
            resultDescription_1:`Validé - Commentez si besoin`,
            resultDescription_2:`Non validé - Listez les critères non remplis`,
            resultSection1:`Authentifier un utilisateur et maintenir sa session`,
            resultDescription1:`Validé ✅`,
            resultSection2:`Personnaliser le contenu envoyé à un client web`,
            resultDescription2:`Validé ✅`,
            resultSection3:`Gérer un stockage de données à l'aide de SQL`,
            resultDescription3:`Validé ✅`,
            resultSection4:`Implémenter un stockage de données sécurisé en utilisant SQL`,
            resultDescription4:`Validé ✅`,
            resultSection5:`Livrable`,
            resultDescription5:`Points forts :`,
            resultDescription5_1:`L'étudiant a effectué une bonne présentation et s'est notamment attardée sur les détails entourant ses choix techniques.`,
            resultDescription5_2:`L'étudiant a su expliquer ses choix techniques notamment ceux entourant la résolution des bogues.`,
            resultDescription5_3:`Les compétences liées à la modélisation  avec une base de données relationnelles sont acquises.`,
            resultDescription5_4:`Axes d'amélioration :`,
            resultDescription5_5:`Effectuer un nettoyage du code commenté cela contribuerait à une meilleure lisibilité du code source.`,
            resultSection6:`Soutenance`,
            resultDescription6:`Remarques : L'ensemble des requis fonctionnels sont implémentés et l' étudiant s'est montré à l'aise et convaincant lors de la revue de code. Le travail réalisé par l' étudiant est satisfaisant`,
            ppointProject: ppointProject,
            altPpoint:`PowerPoint de présentation du Projet 7 Groupomania`,
        }],
        [{
            imgUrl: webfactory,
            altImg: `Page d'acceuil du site Groupomania`,
            linkSite: 'https://github.com/RGaetanGranstek/RossignolGaetan_7_23022022',
            linkProjectDetail: "/portfolio-personnel/ProjectDetail/Groupomania"
        }],
      ];

    return (
        <section className="detailPage" id="detailPages">
            <Container>
                <Row>
                    <Col>
                        {/* Création des onglets pour la page de détail de Groupomania */}
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
                                detailPagesGroupomania[0].map((detailPageReservia, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageReservia}
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
                                detailPagesGroupomania[1].map((detailPageReservia, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageReservia}
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
                                detailPagesGroupomania[2].map((detailPageReservia, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageReservia}
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