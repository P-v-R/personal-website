import React from 'react';
import "./InfoCard.css"
import { motion } from "framer-motion"



import { Card, CardTitle } from 'reactstrap';


function InfoCard({ title }) {


  return (
    <motion.div className="InfoCardDiv"
    animate={{ y: 0 , opacity: 1}}
    initial={{ y: 2000, opacity:0 }}
    transition={{ delay: 1 , duration: 2 }}
    drag
      dragConstraints={{
        top: -.5,
        left: -.5,
        right: .5,
        bottom: .5,
      }}>

      <Card body className="InfoCard text-center border border-dark">
        <CardTitle tag="h2">{title}</CardTitle>
        <div className="InfoCard-Text">
          sample text about the things i like to do and what makes me great sample text about the things i like to do and what makes me great
          sample text about the things i like to do and what makes me great sample text about the things i like to do and what makes me great
          </div>
      </Card>
    </motion.div>
  );
};

export default InfoCard;