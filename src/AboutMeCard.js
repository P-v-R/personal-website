import React from 'react';
import { motion } from "framer-motion"
import "./AboutMeCard.css"


import { Card, CardTitle } from 'reactstrap';


function AboutMeCard(){

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
        <CardTitle tag="h2">About Me</CardTitle>
        <div className="AboutMeCard-Text">
        sample text about the things i like tod what makes me great sample text abouand what makes me great
        sample text about the things i hat makes me great sample text about the things i like to do and what makes me great
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