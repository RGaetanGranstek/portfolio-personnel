// Importation des composants nécessaires pour créer la page de détail de Ohmyfood
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectDetailPage } from "./ProjectDetailPages";

// Importation des images et des fichiers PDF pour la page de détail
// import webfactory from '../assets/img/web_factory.jpg';
import modelOhmyfood2 from '../assets/img/website/ohmyfood-Accueil.png'
import modelOhmyfood3 from '../assets/img/website/ohmyfood-Menu-La-note-enchantée.png'
import modelOhmyfood4 from '../assets/img/website/ohmyfood-Menu-La-palette-du-goût.png'
import modelOhmyfood5 from '../assets/img/website/ohmyfood-Menu-Le-délice-des-sens.png'
import modelOhmyfood6 from '../assets/img/website/ohmyfood-Menu-À-la-française.png'
import pdfMokeup from '../assets/img/website/Brief-créatif-Ohmyfood.pdf'
import ppointProject from '../assets/img/website/Projet-3-ohmyfood.pdf'

export const DetailPagesOhmyfood = () => {

    // Définition des détails
    const detailPagesOhmyfood = [
        [
        {
            title: `Projet 3 du parcours Développeur web d'OpenClassrooms : Dynamiser un site web avec des animations CSS`,
            section:'Compétences évaluées',
            description:`Mettre en œuvre des effets CSS graphiques avancés`,
            description_1:`Assurer la cohérence graphique d'un site web`,
            description_2:`Mettre en place une structure de navigation pour un site web`,
            section1:'Objectifs',
            description1:`Développer un site proposant le menu de 4 grands restaurants parisiens.`,
            description1_1:`Permettre la réservation en ligne et la composition de menus.`,
            section2:'Pages à intégrer :',
            description2:`Pages d'accueil`,
            description2_1:`Pages de menu (4 au total)`,
            section3:'Animations',
            description3:`Boutons`,
            description3_1:`Au survol, la couleur de fond des boutons principaux devra légèrement s’éclaircir. L’ombre portée devra également être plus visible.`,
            description3_2:`À terme, les visiteurs pourront sauvegarder leurs menus préférés. Pour ça, un bouton "J’aime" en forme de cœur est présent sur la maquette. Au clic, il devra se remplir progressivement. Pour cette première version, l’effet peut être apparaître au survol au lieu du clic.`,
            description3_3:`Page d'accueil`,
            description3_4:`Quand l’application aura plus de menus, un “loading spinner” sera nécessaire. Sur cette maquette, nous souhaitons en avoir un aperçu. Il devra apparaître pendant 1 à 3 secondes quand on arrive sur la page d'accueil, couvrir l'intégralité de l'écran, et utiliser les animations CSS (pas de librairie). Le design de ce loader n’est pas défini, toute proposition est donc la bienvenue tant qu’elle est cohérente avec la charte graphique du site.`,
            description3_5:`Pages de menu`,
            description3_6:`À l’arrivée sur la page, les plats devront apparaître progressivement avec un léger décalage dans le temps. Ils pourront soit apparaître un par un, soit par groupe “Entrées”, “Plats” et “Desserts”.`,
            description3_7:`Le visiteur peut ajouter les plats qu'il souhaite à sa commande en cliquant dessus. Cela fait apparaître une petite coche à droite du plat. Cette coche devra coulisser de la droite vers la gauche. Pour cette première version, l’effet peut apparaître au survol au lieu du clic. Si l’intitulé du plat est trop long, il devra être rogné avec des points de suspension.`,
            section4:'Technologies',
            description4:`Autorisées : HTML, CSS, préprocesseur CSS (ex: Sass)`,
            description4_1:`Interdites : JavaScript, inline CSS`,
            section5:'Identité graphique',
            description5:`Polices :`,
            description5_1:`Logo et titres : Shrikhand`,
            description5_2:`Texte : Roboto`,
            description5_3:`Couleurs :`,
            description5_4:`Primaire: #9356DC`,
            description5_5:`Secondaire: #FF79DA`,
            description5_6:`Tertiaire: #99E2D0`,
            section6: `Compatibilité`,
            description6: `Sur tablette et desktop, le site devra s’adapter, mais ces supports n’étant pas prioritaires, leur mise en page est libre.`,
            description6_1:`L’ensemble du site devra être responsive sur mobile, tablette et desktop.`,
            description6_2:`Les pages devront passer la validation W3C en HTML et CSS sans erreurs.`,
            description6_3:`Le site doit être parfaitement compatible avec les dernières versions desktop de Chrome et Firefox.`,
            imgUrl2: modelOhmyfood2,
            imgUrl3: modelOhmyfood3,
            imgUrl4: modelOhmyfood4,
            imgUrl5: modelOhmyfood5,
            imgUrl6: modelOhmyfood6,
            pdfMokeup: pdfMokeup,
            altPdf:`Brief créatif - Ohmyfood`,
        }],
        [
        {
            resultTitle:`Remarques sur l'évaluation`,
            resultSection:`Compétences évaluées`,
            resultDescription:`En vous basant sur les critères d’évaluation du projet, définissez le statut d’acquisition de chaque compétence et commentez.`,
            resultDescription_1:`Validé`,
            resultDescription_2:`Commentaires : ✅ Bon travail d'ensemble, bonne montée en compétence sur SAAS.`,
            resultSection1:`Mettre en place une structure de navigation pour un site web`,
            resultDescription1:`Validé`,
            resultDescription1_1:`Commentaires : ✅ La structure est cohérente.`,
            resultSection2:`Mettre en œuvre des effets CSS graphiques avancés`,
            resultDescription2:`Validé`,
            resultDescription2_1:`Commentaires : ✅ Les cinq animations sont correctement définies.`,
            resultSection3:`Assurer la cohérence graphique d'un site web`,
            resultDescription3:`Validé`,
            resultDescription3_1:`Commentaires : ✅ Bonne cohérence d'ensemble. Site conforme W3C.`,
            resultSection4:`Livrable`,
            resultDescription4:`Points forts : Bon projet d'ensemble. Travail soigné.`,
            resultSection5:`Soutenance`,
            resultDescription5:`Remarques : La soutenance est de bon niveau. Bonne synthèse.`,
            ppointProject: ppointProject,
            altPpoint:`PowerPoint de présentation du Projet 3 Ohmyfood`,
        }],
        [
        {
            imgUrl: 'https://rgaetangranstek.github.io/RossignolGaetan_3_25072021/',
            altImg: `Page d'acceuil du site Ohmyfood`,
            linkSite: 'https://rgaetangranstek.github.io/RossignolGaetan_3_25072021/',
            linkProjectDetail: "/ProjectDetail/Ohmyfood"
        }],
      ];

    return (
        <section className="detailPage" id="detailPages">
            <Container>
                <Row>
                    <Col>
                        {/* Création des onglets pour la page de détail d'Ohmyfood */}
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
                                detailPagesOhmyfood[0].map((detailPageOhmyfood, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageOhmyfood}
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
                                detailPagesOhmyfood[1].map((detailPageOhmyfood, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageOhmyfood}
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
                                detailPagesOhmyfood[2].map((detailPageOhmyfood, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageOhmyfood}
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