import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/virtual-g965ef8905_1920.jpg";
import softSkill1 from "../assets/img/icons8-chercher-94.png";
import softSkill2 from "../assets/img/icons8-sablier-68.png";
import softSkill3 from "../assets/img/icons8-les-gens-travaillent-ensemble-100.png";
import softSkill4 from "../assets/img/icons8-administration-64.png";
import softSkill5 from "../assets/img/icons8-salle-de-classe-100.png";
import curriculumVitae from "../assets/img/curriculumVitae/Gaëtan-CV-V2.pdf"

export const Banner = () => {
    // Variables d'état pour gérer l'animation du texte
    const [loopNum, setLoopNum] = useState(0); // Garde une trace du nombre de boucles dans le tableau de texte
    const [isDeleting, setIsDeleting] = useState(false); // Détermine si l'animation supprime ou ajoute actuellement du texte
    const [text, setText] = useState(''); // Le texte actuel affiché dans l'animation
    const [delta, setDelta] = useState(400 - Math.random() * 100); // Détermine la vitesse de l'animation
    // eslint-disable-next-line
    const [index, setIndex] = useState(1);
    // Le tableau à parcourir
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    // La durée de chaque période de l'animation
    const period = 1500;

    // Exécute l'animation de texte
    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
        // eslint-disable-next-line
    }, [text])

    // Met à jour le texte affiché dans l'animation
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(250);
        } else {
        setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col className="bienvenue" xs={12} md={6} xl={7}>
                        <span className="tagLine">Bienvenue sur mon Portfolio</span>
                        <h1>{`Bonjour, je suis Gaëtan Rossignol`}<br></br><span className="wrap">{text}</span></h1>
                        <p>Je suis passionné par le développement web et j'ai travaillé dur pour acquérir une solide compréhension des technologies et des techniques de développement. Je suis en mesure de développer des sites web dynamiques utilisant les dernières technologies. Je suis également capable de travailler avec des bases de données.</p>
                        <a href={curriculumVitae} title="Liens vers le curriculum vitae de Gaëtan Rossignol" className="curriculumVitae" target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="animImgBanner" src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
                <div className="align-items-center spacingSoftSkill">
                    <div className="row">
                        <p>Soft Skills</p>
                    </div>
                    <div className="row">
                        <div className="skill-soft wow zoomIn">
                            <div>
                                <img className="imgSoftSkill" src={softSkill1} alt="icone loupe"/>
                                {/* <a target="_blank" href="https://icons8.com/icon/3DpvjII52KW6/chercher">Chercher</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                                <h3>Résolution de problèmes et Ouverture d'esprit</h3>
                            </div>
                        </div>
                        <div className="skill-soft wow zoomIn">
                            <div>
                                <img className="imgSoftSkill" src={softSkill2} alt="icone sablier"/>
                                {/* <a target="_blank" href="https://icons8.com/icon/vI7dV2QQrzUl/sablier">Sablier</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                                <h3>Patience et Persévérance</h3>
                            </div>
                        </div>
                        <div className="skill-soft wow zoomIn">
                            <div>
                                <img className="imgSoftSkill" src={softSkill3} alt="icone travail d'équipe"/>
                                {/* <a target="_blank" href="https://icons8.com/icon/ib8fvSIANhAz/les-gens-travaillent-ensemble">Les gens travaillent ensemble</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                                <h3>Esprit d'entraide et Esprit d'équipe</h3>
                            </div>
                        </div>
                        <div className="skill-soft wow zoomIn">
                            <div>
                                <img className="imgSoftSkill" src={softSkill4} alt="icone organisation"/>
                                {/* <a target="_blank" href="https://icons8.com/icon/n9oiQ8ZnTdmr/administration">Administration</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                                <h3>Capacité d'adaptation et Organisation</h3>
                            </div>
                        </div>
                        <div className="skill-soft wow zoomIn">
                            <div>
                                <img className="imgSoftSkill" src={softSkill5} alt="icone apprentissage"/>
                                {/* <a target="_blank" href="https://icons8.com/icon/3656/salle-de-classe">Salle de classe</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                                <h3>Curiosité et Soif d'apprendre</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}