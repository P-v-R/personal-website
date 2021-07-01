import React from 'react';
import "./ProjectCard.css"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { Card, CardTitle, CardLink} from 'reactstrap';


function ProjectCard({ title, description, link, ghLink }) {

  console.log("link ==>",)
  return (
    <motion.div className="ProjectCardDiv"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 2000, opacity: 0 }}
      transition={{ delay: 1, duration: 2 }}
    >

      <Card body className="ProjectCard text-center border border-dark">
        <CardTitle tag="h2">{title}</CardTitle>
        <div className="ProjectCard-Text">
          <CardLink href={link} target="_blank">
          {description}
          </CardLink>
        </div>
        <CardLink href={ghLink} target="_blank">
          <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="2x"/>
        </CardLink>
      </Card>

    </motion.div>
  );
};

export default ProjectCard;