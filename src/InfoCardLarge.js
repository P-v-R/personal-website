import React from "react";
import "./InfoCardLarge.css"
import { Card, CardTitle, CardText } from 'reactstrap';
import { motion } from "framer-motion"


function InfoCardLarge(){

  return (
    
    <div className="InfoCardLargeDiv">
      <Card body className="InfoCardLarge text-center border border-dark">
        <CardTitle tag="h2">Skills</CardTitle>
        <CardText className="InfoCardLarge-Text">
          <motion.div className="InfoCardLoadingBar"> </motion.div>
          </CardText>
      </Card>
    </div>
  );
}
export default InfoCardLarge;
