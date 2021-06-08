import React from 'react';
import { motion } from "framer-motion"


import { Card, Button, CardTitle, CardText} from 'reactstrap';


const HeaderCard = ({clickHandler}) => {


  
  return (

    <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 0 }}
    transition={{ duration: 0.5 }}
  >
      <Card body className="HeaderCard text-center border border-dark">
        <CardTitle tag="h2">About Me</CardTitle>
        <CardText className="HeaderCard-Text">
        sample text about the things i like to do and what makes me greatsample text about the things i like to do and what makes me great
          </CardText>
        <motion.div
        animate={{ x:0 }}
        initial={{x :- 2000}}
        onClick={clickHandler}
        >
          <Button className="HeaderCard-Button">Click Here!</Button>

        </motion.div>
      </Card>
      </motion.div>
  );
};

export default HeaderCard;