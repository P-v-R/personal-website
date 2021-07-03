import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Moment from 'react-moment';
import { Card, CardTitle, CardText } from 'reactstrap';
import "./HeaderCard.css"

/** HeaderCard
 *  landing page hello card to set the mood and take user to the 
 *  more verbose about me page.
 */
const HeaderCard = ({ clickHandler, textbody, greeting = "Howdy!" }) => {
  // const dateToFormat = "2021-05-18T19:31:55Z"


  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: 2000 }}
    >

      <Card body className="HeaderCard text-center border border-dark">
        <CardTitle className="HeaderCard-Title">{greeting}</CardTitle>
        <CardText className="HeaderCard-Text">
          {textbody}
        </CardText>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: - 2000, opacity: 0 }}
          transition={{ delay: 1 }}
          onClick={clickHandler}
        >
          <motion.div
            whileTap={{ scale: .8 }}>
            <Link className="btn HeaderCard-Button" to="/aboutme">→ check it out! ←</Link>
          </motion.div>
        </motion.div>
      </Card>

    </motion.div>
  );
};


export default HeaderCard;