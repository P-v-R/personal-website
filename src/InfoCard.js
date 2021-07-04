import React from 'react';
import "./InfoCard.css"
import { motion } from "framer-motion"



import { Card, CardTitle } from 'reactstrap';


function InfoCard({ title, textbody }) {


  return (
    <motion.div className="InfoCardDiv"
    animate={{  opacity: 1 }}
    initial={{  opacity: 0 }}
    transition={{ delay:.5, duration: 1.75 }}
    >

      <Card body className="InfoCard text-center border border-dark">
        <CardTitle tag="h2">{title}</CardTitle>
        <div className="InfoCard-Text">
          {textbody}
          </div>
      </Card>
    </motion.div>
  );
};

export default InfoCard;