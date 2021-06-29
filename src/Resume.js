import React from 'react';
import "./Resume.css"
import resume from "./assets/demoRes.svg"


const Resume = () => {
  return (
    <div className="ResumeBody ">
      <a className="ResumeDownload" href={resume} download>  <h3> download Resume </h3> </a>

  
      <img
        src={resume}
        className="img-fluid"
        alt="my resume"
      />


    </div>
  );
};

export default Resume