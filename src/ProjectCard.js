import React from 'react';
import "./ProjectCard.css"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'


import { Card, CardTitle, CardLink} from 'reactstrap';


function ProjectCard({ title, description, link, ghLink, isPublic = false }) {

  function generateCodeLink() {
    if (isPublic === true) {
      return(
        <CardLink href={link} target="_blank">
          <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="2x"/>
        </CardLink>
      )
    } else {
      return (
        <CardLink href={link} target="_blank">
          <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
        </CardLink>
      )
    }
  }

  return (
    <motion.div className="ProjectCardDiv"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 2000, opacity: 0 }}
      transition={{ delay: 1, duration: 1.5 }}
    >

      <Card body className="ProjectCard text-center border border-dark">
        <CardTitle tag="h2">{title}</CardTitle>
        <div className="ProjectCard-Text">
          <CardLink href={link} target="_blank">
          {description}
          </CardLink>
        </div>
        {generateCodeLink()}
      </Card>

    </motion.div>
  );
};

export default ProjectCard;