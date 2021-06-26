import React from "react";
import { Card, CardImg } from 'reactstrap';
import { motion } from "framer-motion"
import "./PhotoCard.css"

/**
 * PhotCard
 * 
 * visual display card
 */
function PhotoCard({photoSrc, title}) {
  return (
    <motion.div
    animate={{  opacity: 1 }}
    initial={{  opacity: 0 }}
    transition={{ ease: "easeOut", duration: 3, delay:2 }}
      
    >
      <Card body className="PhotoCard">
        <CardImg src={photoSrc}></CardImg>
        <h2 className="PhotoCardTitle">{title}</h2>
      </Card>

    </motion.div>
  )
}

export default PhotoCard;