import React from 'react';
import { motion } from "framer-motion"

import "./AboutMeCard.css"


import { Card, CardTitle } from 'reactstrap';


function AboutMeCard({title, textbody}){

  return (

    <motion.div
      animate={{ x: 0 , opacity: 1}}
      initial={{ x: - 2000, opacity:0 }}
      drag
      dragConstraints={{
        top: -1,
        left: -1,
        right: 1,
        bottom: 1,
      }}
    >
      <Card body className="AboutMeCard text-center border border-dark">
        <CardTitle tag="h2">{title}</CardTitle>
        <div className="AboutMeCard-Text">
          {textbody}
          </div>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: - 2000 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default AboutMeCard;