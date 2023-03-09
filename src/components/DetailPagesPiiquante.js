// Importation des composants nécessaires pour créer la page de détail de Piiquante
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectDetailPage } from "./ProjectDetailPages";

// Importation de l'image et du fichier PDF pour la page de détail
import webfactory from '../assets/img/web_factory.jpg';
import ppointProject from '../assets/img/website/Projet-6-piiquante.pdf'

export const DetailPagesPiiquante = () => {

    // Définition des détails
    const detailPagesPiiquante = [
        [
        {
            title: `Projet 6 - Construisez une API sécurisée pour une application d'avis gastronomiques "PIIQUANTE"`,
            section:'Compétences évaluées',
            description:`Implémenter un modèle logique de données conformément à la réglementation`,
            description_1:`Mettre en œuvre des opérations CRUD de manière sécurisée`,
            description_2:`Stocker des données de manière sécurisée`,
            description_3:`Interagir avec un web service avec JavaScript`,
            description_4:`Respecter les spécifications fonctionnelles et techniques`,
            section1:'Développement Backend en JavaScript',
            description1:`Serveur Node.js`,
            description1_1:`Framework Express`,
            description1_2:`Base de données MongoDB`,
            description1_3:`Hébergement sur MongoDB Atlas`,
            description1_4:`Opérations relatives à la BDD réalisées avec mongoose`,
            description1_5:`API REST`,
            description1_6:`Sécurité OWASP et RGPD`,
            section2:`Test de l'application`,
            description2:`Cloner le frontend de l'application.`,
            description2_1:`Installer les dépendances : npm install`,
            description2_2:`Lancer : npm start`,
            description2_3:`Cloner le backend de l'application.`,
            description2_4:`Pour le projet, le fichier .env est ignoré dans gitignore`,
            description2_5:`installer les dépendances : npm install`,
            description2_6:`lancer : nodemon server`,
            imgUrl: "",
        }],
        [
        {
            resultTitle:`Remarques sur l'évaluation`,
            resultSection:`Compétences évaluées`,
            resultDescription:`En vous basant sur les critères d’évaluation du projet, définissez le statut d’acquisition de chaque compétence et commentez à l'aide de ces instructions :`,
            resultDescription_1:`Validé - Commentez si besoin`,
            resultDescription_2:`Non validé - Listez les critères non remplis`,
            resultSection1:`Implémenter un modèle logique de données conformément à la réglementation`,
            resultDescription1:`Validé`,
            resultDescription1_1:`Commentaires :`,
            resultDescription1_2:`❒ L’application exécute toutes les opérations de la base de données et impose des schémas de données stricts ✅`,
            resultDescription1_3:`❒ L'application fonctionne correctement ✅`,
            resultDescription1_4:`❒ Le projet utilise le framework Express ✅`,
            resultDescription1_5:`❒ Le projet est hébergé par un serveur Node.JS ✅`,
            resultDescription1_6:`❒ Le projet utilise une base de données MongoDB (sur MongoDB Atlas ou un service similaire) ✅`,
            resultDescription1_7:`❒ La configuration de la sécurité dans la base de données MongoDB est telle que le validateur peut exécuter l'application avec succès sur son propre ordinateur ✅`,
            resultDescription1_8:`❒ Seuls deux types d’administrateurs peuvent effectuer des changements dans la base de donnés. Les comptes administrateurs par défaut sont supprimés ✅`,
            resultDescription1_9:`❒ L'application utilise un plug-in Mongoose approprié pour garantir que toutes les erreurs de la base de données sont signalées (y compris en essayant d'utiliser le même courrier électronique plusieurs fois) ✅`,
            resultDescription1_10:`❒ Les versions les plus récentes de Mongoose et de Node.js sont utilisées avec des patchs de sécurité à jour ✅`,
            resultSection2:`Stocker des données de manière sécurisée`,
            resultDescription2:`Validé`,
            resultDescription2_1:`Commentaires :`,
            resultDescription2_2:`❒ Le mot de passe des utilisateurs est stocké dans la base de données de manière chiffrée ✅`,
            resultDescription2_3:`❒ Toutes les données personnelles de la base de données sont stockées avec une méthode de masquage ✅`,
            resultDescription2_4:`❒ L'application applique strictement l'authentification sur tous les routes ✅`,
            resultDescription2_5:`❒ L'application stocke les adresses électroniques dans la base de données comme uniques ✅`,
            resultDescription2_6:`❒ Il n'y a pas de régression dans l’application frontend ✅`,
            resultSection3:`Mettre en œuvre des opérations CRUD de manière sécurisée`,
            resultDescription3:`Validé ✅`,
            resultSection4:`Livrable`,
            resultDescription4:`Points forts :`,
            resultDescription4_1:`il y avait suffisamment d'applications de l'OWASP dans l'application de l'étudiant`,
            resultDescription4_2:`utilisation de Helmet`,
            resultDescription4_3:`-utilisation de xss-cleaner`,
            resultDescription4_4:`-utilisation de maskdata`,
            resultDescription4_5:`-utilisation de password-validator`,
            resultDescription4_6:`Axes d'amélioration : Aucun`,
            resultSection5:`Soutenance`,
            resultDescription5:`Remarques :très bonne présentation les explications étaient claires respect du temps imparti ,félicitation`,
            ppointProject: ppointProject,
            altPpoint:`PowerPoint de présentation du Projet 6 Piiquante`,
        }],
        [
        {
            imgUrl: webfactory,
            altImg: `Page d'acceuil du site Piiquante`,
            linkSite: 'https://github.com/RGaetanGranstek/RossignolGaetan_6_21102021',
            linkProjectDetail: "/portfolio-personnel/ProjectDetail/Piiquante"
        }],
      ];

    return (
        <section className="detailPage" id="detailPages">
            <Container>
                <Row>
                    <Col>
                        {/* Création des onglets pour la page de détail de Piiquante */}
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
                                detailPagesPiiquante[0].map((detailPagePiiquante, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPagePiiquante}
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
                                detailPagesPiiquante[1].map((detailPagePiiquante, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPagePiiquante}
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
                                detailPagesPiiquante[2].map((detailPagePiiquante, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPagePiiquante}
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