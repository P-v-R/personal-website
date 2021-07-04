import React from 'react';
import "./Resume.css"
import res from "./assets/res.pdf"
import res2 from "./assets/res.svg"




const Resume = () => {

  return (
    <div className="ResumeBody ">
      <a className="ResumeDownload" href={res} download>  <h3> download Resume </h3> </a>
 
      <img
        src={res2}
        className="img-fluid"
        alt="my resume"
      />

    </div>
  );
};

export default Resume