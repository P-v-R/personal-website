import React from "react";
import { Card, CardImg } from 'reactstrap';
import { motion } from "framer-motion"
import "./PhotoCard.css"
import skyPhoto from "./assets/sky.png"

/**
 * PhotCard
 * 
 * visual display card
 */
function PhotoCard() {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: 2000 }}
      
    >
      <Card body className="PhotoCard">
        <CardImg src={skyPhoto}></CardImg>
        <h2 className="PhotoCardTitle">Projects</h2>
      </Card>

    </motion.div>
  )
}

export default PhotoCard;