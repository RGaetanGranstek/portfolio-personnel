// Importation des composants nécessaires pour créer la page de détail de Reservia
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectDetailPage } from "./ProjectDetailPages";

// Importation des images et du fichier PDF pour la page de détail
// import webfactory from '../assets/img/web_factory.jpg';
import modelReservia from '../assets/img/website/maquette-reservia-768x1005.png'
import modelReservia2 from '../assets/img/website/maquette-reservia-iPhone-8-1.png'
import ppointProject from '../assets/img/website/Projet-2-Reservia.pdf'

export const DetailPagesReservia = () => {

    // Définition des détails
    const detailPagesReservia = [
        [
        {
            title: `Projet 2 du parcours Développeur web d'OpenClassrooms : Transformer une maquette en site web`,
            section:'Compétences évaluées',
            description:`Présentation du code réalisé et le rendu visuel du site.`,
            section1:'Objectifs',
            description1:`Développer un site proposant le menu de 4 grands restaurants parisiens.`,
            description1_1:`Permettre la réservation en ligne et la composition de menus.`,
            section2:'Présentation de Reservia',
            description2:`Reservia est une petite entreprise qui propose à ses usagers de trouver des hébergements et des activités dans la ville de leur choix.`,
            section3:'Éléments à disposition',
            description3:`La maquette desktop et mobile du site.`,
            description3_1:`Les images du site avec différents formats.`,
            section4:'Contraintes',
            description4:`Le site doit se faire en HTML et CSS sans frameworks.`,
            description4_1:`Les icônes proviennent de Font Awesome.`,
            description4_2:`Couleurs utilisées : bleu #0065FC, bleu clair #DEEBFF et gris #F2F2F2.`,
            description4_3:`Police utilisée : Raleway`,
            description4_4:`Le code utilise les balises sémantiques et ne doit contenir aucune erreur ni alerte au validateur W3C.`,
            description4_5:`Le site doit être compatible avec les dernières versions des navigateurs Chrome et Firefox.`,
            description4_6:`Les images doivent être de taille adéquate afin qu'elles impactent le moins possible le temps de chargement de la page.`,
            description4_7:`Le code doit être versionné avec Git et doit avoir un repository distant sur Github ou Gitlab.`,
            section5:'Fonctionnalités',
            description5:`Le champ de recherche doit être un champ de saisie.`,
            description5_1:`Chaque carte d’hébergement ou d’activité est cliquable dans son intégralité.`,
            description5_2:`Les filtres, bien que non fonctionnels, changent de style au survol.`,
            description5_3:`Dans le menu, les liens “Hébergements” et “Activités” sont des ancres qui mènent aux sections de la page.`,
            imgUrl: modelReservia,
            imgUrl2: modelReservia2,
        }],
        [
        {
            resultTitle:`Remarques sur l'évaluation`,
            resultSection:`Utiliser un système de gestion de versions pour le suivi du projet et son hébergement`,
            resultDescription:`Validé`,
            resultDescription_1:`Commentaires :`,
            resultDescription_2:`✅  Le code de l’application est hébergé sur GitHub ou GitLab.`,
            resultDescription_3:`✅  Le versionning de l’application est effectué régulièrement.`,
            resultSection1:`Mettre en place son environnement Front-End           `,
            resultDescription1:`Validé`,
            resultDescription1_1:`Commentaires :`,
            resultDescription1_2:`✅ Le site est déployé grâce à Git, sans passer par un logiciel de FTP`,
            resultSection2:`Intégrer du contenu conformément à une maquette`,
            resultDescription2:`Validé`,
            resultDescription2_1:`Commentaires :`,
            resultDescription2_2:`✅ Le code CSS est dans un ou plusieurs fichiers`,
            resultDescription2_3:`✅ Les images sont dans un dossier séparé`,
            resultDescription2_4:`✅ Les codes ne contiennent ni erreur ni alerte au validateur du W3C`,
            resultDescription2_5:`✅ En plus des balises sémantiques, au moins les balises header, nav, section et footer doivent être utilisées`,
            resultSection3:`Implémenter une interface responsive`,
            resultDescription3:`Validé`,
            resultDescription3_1:`Commentaires :`,
            resultDescription3_2:`✅  La mise en page s’adapte aux différents terminaux (ordinateur, tablettes, smartphones).`,
            resultDescription3_3:`✅  Il n’y a pas de bug, ni d’erreur lors du changement de taille.`,
            resultDescription3_4:`✅  Les proportions des images sont toujours respectées, les images ne sont jamais écrasées ou étirées`,
            resultSection4:`Livrable`,
            resultDescription4:`Points forts :`,
            resultDescription4_1:`utilisation des balises sémantiques à bon escient`,
            resultDescription4_2:`code bien structuré et indenté`,
            resultDescription4_3:`100 % responsive`,
            resultDescription4_4:`compatible Chrome & Firefox`,
            resultDescription4_5:`aucune erreur W3C`,
            resultDescription4_6:`Axes d'amélioration :`,
            resultDescription4_7:`revoir l'utilité d'un merge`,
            resultSection5:`Soutenance`,
            resultDescription5:`La présentation est fluide, rythmée et le timing des 10 minutes a bien été respecté.`,
            resultDescription5_1:`Un PowerPoint de présentation a été utilisé rendant la présentation professionnelle`,
            resultDescription5_2:`Félicitations pour cet excellent travail et bonne chance pour la suite de ton parcours développeur web !`,
            ppointProject: ppointProject,
            altPpoint:`PowerPoint de présentation du Projet 2 Reservia`,
        }],
        [
        {
            imgUrl: 'https://rgaetangranstek.github.io/RossignolGaetan_2_01072021/',
            altImg: `Page d'acceuil du site Reservia`,
            linkSite: 'https://rgaetangranstek.github.io/RossignolGaetan_2_01072021/',
            linkProjectDetail: "/ProjectDetail/Reservia"
        }],
      ];

    return (
        <section className="detailPage" id="detailPages">
            <Container>
                <Row>
                    <Col>
                        {/* Création des onglets pour la page de détail de Reservia */}
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
                                detailPagesReservia[0].map((detailPageReservia, index) => {
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
                                detailPagesReservia[1].map((detailPageReservia, index) => {
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
                                detailPagesReservia[2].map((detailPageReservia, index) => {
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