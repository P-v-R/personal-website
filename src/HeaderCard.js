import React from 'react';
import { motion } from "framer-motion"


import { Card, Button, CardTitle, CardText, Container } from 'reactstrap';
import "./HeaderCard.css"

const HeaderCard = ({clickHandler}) => {


  
  return (
    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0.2 }}
      drag
      dragConstraints={{
        top: -1,
        left: -1,
        right: 1,
        bottom: 1,
      }}
    >
      
      <Card body className="HeaderCard text-center border border-dark">
        <CardTitle tag="h1">Welcome to my Website!</CardTitle>
        <CardText className="HeaderCard-Text">
          I'm Perry, a Web Developer, Photographer, and Graphic
          Designer based out of Los Angeles, California.
          </CardText>
        <motion.div
        animate={{ x:0 }}
        initial={{x :- 2000}}
        onClick={clickHandler}
        >
          <Button  onClick={clickHandler}className="HeaderCard-Button">Click Here!</Button>
        </motion.div>
      </Card>

    </motion.div>
  );
};

export default HeaderCard;