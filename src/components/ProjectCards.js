import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useRef } from 'react';


    

export const ProjectCard = ({ title, imgUrl, altImg, linkProjectDetail }) => {

  // ancrage : créer une référence au nœud DOM du composant, pour permettre le défilement vers celui-ci ultérieurement
  const myRef = useRef(null);
  // fonction pour faire défiler jusqu'au nœud DOM du composant lorsque le lien est cliqué
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 1000);

  return (
    // rendre le composant, en utilisant le titre, l'URL de l'image et le lien vers la page de détail du projet transmis comme accessoires
    <Col size={12} sm={6} md={6}>
        {/* créer un lien vers la page de détail du projet */}
        <Link to={linkProjectDetail} onClick={() => scrollToRef(myRef)} style={{ color: 'inherit', textDecoration: 'none' }} title="Plus d'informations" >
          {/* affiche l'image du projet si l'URL se termine par '.jpg' ou '.png' ou un iframe */}
          <div className="proj-imgbx" ref={myRef}>
            {imgUrl.endsWith('.jpg') || imgUrl.endsWith('.png') ? (<img alt={altImg} width="100%" height="400px" src={imgUrl} />) : (<iframe title={altImg} width="100%" height="400px" src={imgUrl}></iframe>)}
              {/* ajouter une légende avec le titre du projet */}
              <div className="proj-txtx">
                <span>- - -</span>
                <h4>{title}</h4>
                <span>- - -</span>
              </div>
          </div>
        </Link>
    </Col>
  )
}