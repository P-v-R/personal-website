import React from 'react';
import { motion } from "framer-motion"

import "./AboutMeCard.css"


import { Card, CardTitle } from 'reactstrap';

/** AboutMeCards 
 *    main component header in the about me page greeting user to 
 *    several smaller cards underneath it. fades in on render
 */
function AboutMeCard({ title, textbody }) {

  return (

    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: - 2000, opacity: 0 }}
    >

      <Card body className="AboutMeCard text-center border border-dark">
        <CardTitle tag="h2">{title}</CardTitle>
        <div className="AboutMeCard-Text">
          {textbody}
        </div>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: - 2000 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default AboutMeCard;