// Importation des composants nécessaires pour créer la page de détail d'Orinoco
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectDetailPage } from "./ProjectDetailPages";

// Importation des images et des fichiers PDF pour la page de détail ainsi que le rapport
import webfactory from '../assets/img/web_factory.jpg';
import pdfMokeup from '../assets/img/website/P5_Spécifications+fonctionnelles+Orinoco.pdf'
import ppointProject from '../assets/img/website/Projet-5-orinoco.pdf'
import ppointProject1 from '../assets/img/website/P5_02_plantests_version avant 29-09-21.xlsx'

export const DetailPagesOrinoco = () => {

    // Définition des détails
    const detailPagesOrinoco = [
        [
        {
            title: `Projet 5 du parcours Développeur web d'OpenClassrooms : Construire un site e-commerce`,
            section:'',
            description:`Il s'agit d'un MVP (Produit Minimum Viable) d'une application thématique ne vendant qu'un seul type de produits (ici des appareils photos) ; la partie back-end est fournie et l'objectif est de créer la partie front-end par la consommation d'une API fournie. Aucune maquette n'est fournie, et aucune gestion réelle de transactions n'est effectuée.`,
            section1:'Compétences évaluées',
            description1:`Interagir avec un web service avec JavaScript`,
            description1_1:`Créer un plan de test pour une application`,
            description1_2:`Valider des données issues de sources externes`,
            description1_3:`Gérer des événements JavaScript`,
            section2:'Spécificités techniques',
            description2:`L'application web doit être composée de 4 pages :`,
            description2_1:`une page de vue sous forme de liste, montrant tous les articles disponibles à la vente`,
            description2_2:`une page “produit”, qui affiche de manière dynamique l'élément sélectionné par l'utilisateur et lui permet de personnaliser le produit et de l'ajouter à son panier`,
            description2_3:`une page “panier” contenant un résumé des produits dans le panier, le prix total et un formulaire permettant de passer une commande. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end. Par exemple, pas de texte dans les champs date ;`,
            description2_4:`une page de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant le prix total et l'identifiant de commande envoyé par le serveur`,
            imgUrl: "",
            pdfMokeup: pdfMokeup,
            altPdf:`Spécification + Fonctionnelles`,
        }],
        [
        {
            resultTitle:`Remarques sur l'évaluation`,
            resultSection:`Gérer des événements JavaScript`,
            resultDescription:`✔️ Validé`,
            resultDescription_1:`Commentaires :`,
            resultDescription_2:`✔️ le formulaire de contact est traité et utilise la validation pour tous les champs`,
            resultDescription_3:`✔️ tous les événements utilisateurs nécessaires (ajout d’un article au panier, passation d’une commande) sont saisis et mis en œuvre.`,
            resultSection1:`Créer un plan de test pour une application`,
            resultDescription1:`✔️ Validé`,
            resultDescription1_1:`Commentaires :`,
            resultDescription1_2:`✔️ le plan de tests explique les tests à écrire`,
            resultSection2:`Interagir avec un web service avec JavaScript`,
            resultDescription2:`✔️ Validé`,
            resultDescription2_1:`Commentaires :`,
            resultDescription2_2:`✔️ un lien vers un dépôt GitHub public contenant le code source de l’application est présent`,
            resultDescription2_3:`✔️ tous les appels API répertoriés dans la description du projet peuvent être effectués et gérés correctement`,
            resultDescription2_4:`✔️ les Promises sont utilisées pour éviter callback hell.`,
            resultDescription2_5:`✔️ le code source est indenté  commenté et il utilise des fonctions et évite de répéter du code.`,
            resultSection3:`Livrable`,
            resultDescription3:`Points forts :`,
            resultDescription3_1:`Utilisation de classes,  implémentations de fonctions complémentaires (print, incrémentations...). Un support de présentation a permis de bien cadré le déroulé de la soutenance.`,
            resultDescription3_2:`Axes d'amélioration :`,
            resultDescription3_3:`Personnalisation des validations du formulaire en fonction des champs. `,
            resultSection4:`Soutenance`,
            resultDescription4:`Remarques :`,
            resultDescription4_1:`Malgré que la présentation soit un peu courte, elle était de bonne qualité. Le sujet a été bien maitrisé, les réponses à mes questions étaient pertinentes.`,
            resultDescription4_2:`Félicitations !`,
            resultDescription4_3:`Bon courage pour la suite.  `,
            ppointProject: ppointProject,
            altPpoint:`PowerPoint de présentation du Projet 5 Orinoco`,
            ppointProject1: ppointProject1,
            altPpoint1:`Plan de test du Projet 5 Orinoco`,
        }],
        [
        {
            imgUrl: webfactory,
            altImg: `Page d'acceuil du site Orinoco`,
            linkSite: 'https://github.com/RGaetanGranstek/RossignolGaetan_5_19092021',
            linkProjectDetail: "/ProjectDetail/Orinoco"
        }],
      ];

    return (
        <section className="detailPage" id="detailPages">
            <Container>
                <Row>
                    <Col>
                        {/* Création des onglets pour la page de détail d'Orinoco */}
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
                                detailPagesOrinoco[0].map((detailPageOrinoco, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageOrinoco}
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
                                detailPagesOrinoco[1].map((detailPageOrinoco, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageOrinoco}
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
                                detailPagesOrinoco[2].map((detailPageOrinoco, index) => {
                                    return (
                                    <ProjectDetailPage
                                        key={index}
                                        {...detailPageOrinoco}
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