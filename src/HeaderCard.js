import React from 'react';
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Card, CardTitle, CardText } from 'reactstrap';
import "./HeaderCard.css"


const HeaderCard = ({ clickHandler, textbody }) => {



  return (
    <motion.div
    animate={{ x: 0 }}
    initial={{ x: 2000 }}
      drag
      dragConstraints={{
        top: -1,
        left: -1,
        right: 1,
        bottom: 1,
      }}
    >

      <Card body className="HeaderCard text-center border border-dark">
        <CardTitle tag="h1">Howdy!</CardTitle>
        <CardText className="HeaderCard-Text">
          {textbody}
          </CardText>
        <motion.div
          animate={{ x: 0, opacity:1 }}
          initial={{ x: - 2000, opacity: 0 }}
          transition={{ delay: 1 }}
          onClick={clickHandler}
        >
          <Link className="btn HeaderCard-Button" to="/aboutme">→ Click Here! ←</Link>
        </motion.div>
      </Card>

    </motion.div>
  );
};


export default HeaderCard;