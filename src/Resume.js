import React from 'react';
import "./Resume.css"
import resPDF from "./assets/resPDF.pdf"
import resSVG from "./assets/resSVG.svg"
// import res2 from "./assets/res.svg"




const Resume = () => {

  return (
    <div className="ResumeBody ">
      <a className="ResumeDownload" href={resPDF} download>  <h3> download Resume </h3> </a>
 
      <img
        src={resSVG}
        className="img-fluid"
        alt="my resume"
      />

    </div>
  );
};

export default Resume