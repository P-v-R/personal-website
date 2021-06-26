import React from 'react';
import "./InfoCard.css"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { Card, CardTitle, CardLink} from 'reactstrap';
import {Link} from "react-router-dom";


function ProjectCard({ title, description, link, ghLink }) {

  console.log("link ==>",)
  return (
    <motion.div className="InfoCardDiv"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 2000, opacity: 0 }}
      transition={{ delay: 1, duration: 2 }}
    >

      <Card body className="InfoCard text-center border border-dark">
        <CardTitle tag="h2">{title}</CardTitle>
        <div className="InfoCard-Text">
          <CardLink href={link}>
          {description}
          </CardLink>
        </div>
        <CardLink href={ghLink}>
          <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="2x"/>
        </CardLink>
      </Card>

    </motion.div>
  );
};

export default ProjectCard;