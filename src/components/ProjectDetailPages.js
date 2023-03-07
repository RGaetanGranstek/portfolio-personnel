import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectDetailPage = ({
  title,
  description,description_1,description_2,description_3,description_4,description_5,description_6,description_7,description_8,description_9,description_10,
  description1,description1_1,description1_2,description1_3,description1_4,description1_5,description1_6,description1_7,description1_8,description1_9,description1_10,
  description2,description2_1,description2_2,description2_3,description2_4,description2_5,description2_6,description2_7,description2_8,description2_9,description2_10,
  description3,description3_1,description3_2,description3_3,description3_4,description3_5,description3_6,description3_7,description3_8,description3_9,description3_10,
  description4,description4_1,description4_2,description4_3,description4_4,description4_5,description4_6,description4_7,description4_8,description4_9,description4_10,
  description5,description5_1,description5_2,description5_3,description5_4,description5_5,description5_6,description5_7,description5_8,description5_9,description5_10,
  description6,description6_1,description6_2,description6_3,description6_4,description6_5,description6_6,description6_7,description6_8,description6_9,description6_10,
  imgUrl,imgUrl2,imgUrl3,imgUrl4,imgUrl5,imgUrl6,
  altImg,altImg2,altImg3,altImg4,altImg5,altImg6,
  pdfMokeup, altPdf,
  linkSite,
  linkProjectDetail,
  section,
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  resultTitle,
  resultDescription,resultDescription_1,resultDescription_2,resultDescription_3,resultDescription_4,resultDescription_5,resultDescription_6,resultDescription_7,resultDescription_8,resultDescription_9,resultDescription_10,
  resultDescription1,resultDescription1_1,resultDescription1_2,resultDescription1_3,resultDescription1_4,resultDescription1_5,resultDescription1_6,resultDescription1_7,resultDescription1_8,resultDescription1_9,resultDescription1_10,
  resultDescription2,resultDescription2_1,resultDescription2_2,resultDescription2_3,resultDescription2_4,resultDescription2_5,resultDescription2_6,resultDescription2_7,resultDescription2_8,resultDescription2_9,resultDescription2_10,
  resultDescription3,resultDescription3_1,resultDescription3_2,resultDescription3_3,resultDescription3_4,resultDescription3_5,resultDescription3_6,resultDescription3_7,resultDescription3_8,resultDescription3_9,resultDescription3_10,
  resultDescription4,resultDescription4_1,resultDescription4_2,resultDescription4_3,resultDescription4_4,resultDescription4_5,resultDescription4_6,resultDescription4_7,resultDescription4_8,resultDescription4_9,resultDescription4_10,
  resultDescription5,resultDescription5_1,resultDescription5_2,resultDescription5_3,resultDescription5_4,resultDescription5_5,resultDescription5_6,resultDescription5_7,resultDescription5_8,resultDescription5_9,resultDescription5_10,
  resultDescription6,resultDescription6_1,resultDescription6_2,resultDescription6_3,resultDescription6_4,resultDescription6_5,resultDescription6_6,resultDescription6_7,resultDescription6_8,resultDescription6_9,resultDescription6_10,
  resultSection,
  resultSection1,
  resultSection2,
  resultSection3,
  resultSection4,
  resultSection5,
  resultSection6,
  altPpoint,altPpoint1,altPpoint2,
  ppointProject,ppointProject1,ppointProject2
}) => {
  return (
    <Col size={12} sm={12} md={12}>
      {/* Affichage des détails du projet */}
      <div className="detailPages-imgbx2">
        <h3>{title}</h3>
        <br></br>
        <h4>{section}</h4>
        <br></br>
        <div>{description}</div><div>{description_1}</div><div>{description_2}</div><div>{description_3}</div><div>{description_4}</div><div>{description_5}</div><div>{description_6}</div><div>{description_7}</div><div>{description_8}</div><div>{description_9}</div><div>{description_10}</div>
        <br></br>
        <h4>{section1}</h4>
        <div>{description1}</div><div>{description1_1}</div><div>{description1_2}</div><div>{description1_3}</div><div>{description1_4}</div><div>{description1_5}</div><div>{description1_6}</div><div>{description1_7}</div><div>{description1_8}</div><div>{description1_9}</div><div>{description1_10}</div>
        <br></br>
        <h4>{section2}</h4>
        <div>{description2}</div><div>{description2_1}</div><div>{description2_2}</div><div>{description2_3}</div><div>{description2_4}</div><div>{description2_5}</div><div>{description2_6}</div><div>{description2_7}</div><div>{description2_8}</div><div>{description2_9}</div><div>{description2_10}</div>
        <br></br>
        <h4>{section3}</h4>
        <div>{description3}</div><div>{description3_1}</div><div>{description3_2}</div><div>{description3_3}</div><div>{description3_4}</div><div>{description3_5}</div><div>{description3_6}</div><div>{description3_7}</div><div>{description3_8}</div><div>{description3_9}</div><div>{description3_10}</div>
        <br></br>
        <h4>{section4}</h4>
        <div>{description4}</div><div>{description4_1}</div><div>{description4_2}</div><div>{description4_3}</div><div>{description4_4}</div><div>{description4_5}</div><div>{description4_6}</div><div>{description4_7}</div><div>{description4_8}</div><div>{description4_9}</div><div>{description4_10}</div>
        <br></br>
        <h4>{section5}</h4>
        <div>{description5}</div><div>{description5_1}</div><div>{description5_2}</div><div>{description5_3}</div><div>{description5_4}</div><div>{description5_5}</div><div>{description5_6}</div><div>{description5_7}</div><div>{description5_8}</div><div>{description5_9}</div><div>{description5_10}</div>
        <br></br>
        <h4>{section6}</h4>
        <div>{description6}</div><div>{description6_1}</div><div>{description6_2}</div><div>{description6_3}</div><div>{description6_4}</div><div>{description6_5}</div><div>{description6_6}</div><div>{description6_7}</div><div>{description6_8}</div><div>{description6_9}</div><div>{description6_10}</div>
      </div>
      {/* Affichage des détails du projet */}
      <div className="detailPages-imgbx3">
        <h3>{resultTitle}</h3>
        <br></br>
        <h4>{resultSection}</h4>
        <br></br>
        <div>{resultDescription}</div><div>{resultDescription_1}</div><div>{resultDescription_2}</div><div>{resultDescription_3}</div><div>{resultDescription_4}</div><div>{resultDescription_5}</div><div>{resultDescription_6}</div><div>{resultDescription_7}</div><div>{resultDescription_8}</div><div>{resultDescription_9}</div><div>{resultDescription_10}</div>
        <br></br>
        <h4>{resultSection1}</h4>
        <div>{resultDescription1}</div><div>{resultDescription1_1}</div><div>{resultDescription1_2}</div><div>{resultDescription1_3}</div><div>{resultDescription1_4}</div><div>{resultDescription1_5}</div><div>{resultDescription1_6}</div><div>{resultDescription1_7}</div><div>{resultDescription1_8}</div><div>{resultDescription1_9}</div><div>{resultDescription1_10}</div>
        <br></br>
        <h4>{resultSection2}</h4>
        <div>{resultDescription2}</div><div>{resultDescription2_1}</div><div>{resultDescription2_2}</div><div>{resultDescription2_3}</div><div>{resultDescription2_4}</div><div>{resultDescription2_5}</div><div>{resultDescription2_6}</div><div>{resultDescription2_7}</div><div>{resultDescription2_8}</div><div>{resultDescription2_9}</div><div>{resultDescription2_10}</div>
        <br></br>
        <h4>{resultSection3}</h4>
        <div>{resultDescription3}</div><div>{resultDescription3_1}</div><div>{resultDescription3_2}</div><div>{resultDescription3_3}</div><div>{resultDescription3_4}</div><div>{resultDescription3_5}</div><div>{resultDescription3_6}</div><div>{resultDescription3_7}</div><div>{resultDescription3_8}</div><div>{resultDescription3_9}</div><div>{resultDescription3_10}</div>
        <br></br>
        <h4>{resultSection4}</h4>
        <div>{resultDescription4}</div><div>{resultDescription4_1}</div><div>{resultDescription4_2}</div><div>{resultDescription4_3}</div><div>{resultDescription4_4}</div><div>{resultDescription4_5}</div><div>{resultDescription4_6}</div><div>{resultDescription4_7}</div><div>{resultDescription4_8}</div><div>{resultDescription4_9}</div><div>{resultDescription4_10}</div>
        <br></br>
        <h4>{resultSection5}</h4>
        <div>{resultDescription5}</div><div>{resultDescription5_1}</div><div>{resultDescription5_2}</div><div>{resultDescription5_3}</div><div>{resultDescription5_4}</div><div>{resultDescription5_5}</div><div>{resultDescription5_6}</div><div>{resultDescription5_7}</div><div>{resultDescription5_8}</div><div>{resultDescription5_9}</div><div>{resultDescription5_10}</div>
        <br></br>
        <h4>{resultSection6}</h4>
        <div>{resultDescription6}</div><div>{resultDescription6_1}</div><div>{resultDescription6_2}</div><div>{resultDescription6_3}</div><div>{resultDescription6_4}</div><div>{resultDescription6_5}</div><div>{resultDescription6_6}</div><div>{resultDescription6_7}</div><div>{resultDescription6_8}</div><div>{resultDescription6_9}</div><div>{resultDescription6_10}</div>
        <div className="docSup">
          {/* Lien pour télécharger un document complémentaire */}
          {ppointProject1 && (ppointProject1.endsWith(".xlsx") &&
          <a href={ppointProject1} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }} >1 =&gt; Téléchargement =&gt; Document complémentaire - rapport, analyse, etc</a>
          )}
          {ppointProject2 && (ppointProject2.endsWith(".xlsx") &&
          <a href={ppointProject2} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }} >2 =&gt; Téléchargement =&gt; Document complémentaire - rapport, analyse, etc</a>
          )}
        </div>
        {/* Affichage d'une présentation PowerPoint sous forme d'iframe */}
        {ppointProject && (ppointProject.endsWith(".pdf") &&
        <div>
          <a className="aPowerpoint" href={ppointProject} download={true}>Télécharger la présentation PowerPoint</a>
          <iframe className="iframePowerpoint" title={altPpoint} width="100%" height="1500px" src={ppointProject}></iframe>
        </div>
        )}
      </div>
      {/* Affichage des détails du projet avec liens vers le site ou le repo */}
      <a  className="detailPages-imgbx-a"
        href={linkSite}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="detailPages-imgbx">
          {imgUrl && (imgUrl.endsWith(".jpg") || imgUrl.endsWith(".png")) && (
            <img className="imgMokeupFirst" alt={altImg} width="100%" height="auto" src={imgUrl} />
          )}
          {imgUrl && !(imgUrl.endsWith(".jpg") || imgUrl.endsWith(".png")) && (
            <iframe
              title={altImg}
              width="100%"
              height="1200px"
              src={imgUrl}
            ></iframe>
          )}
          <Link
            to={linkProjectDetail}
            style={{ color: "inherit", textDecoration: "none" }}
          ></Link>
        </div>
      </a>
      <img className="imgMokeup" alt={altImg2} width="100%" height="auto" src={imgUrl2} />
      <img className="imgMokeup" alt={altImg3} width="100%" height="auto" src={imgUrl3} />
      <img className="imgMokeup" alt={altImg4} width="100%" height="auto" src={imgUrl4} />
      <img className="imgMokeup" alt={altImg5} width="100%" height="auto" src={imgUrl5} />
      <img className="imgMokeup" alt={altImg6} width="100%" height="auto" src={imgUrl6} />
      {/* Affichage des informations supplémentaires du projet, maquette */}
      {pdfMokeup && (pdfMokeup.endsWith(".pdf") &&
        <div>
          <a className="aPowerpoint" href={pdfMokeup} download={true}>Télécharger le document PowerPoint</a>
          <iframe className="iframePowerpoint" title={altPdf} width="100%" height="1200px" src={pdfMokeup}></iframe>
        </div>
        )}
    </Col>
  );
};
