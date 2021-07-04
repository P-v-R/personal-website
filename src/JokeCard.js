import React, { useState, useEffect } from 'react';
import "./JokeCard.css"

import JokeApi from './api';

import { motion } from "framer-motion"



import { Card, CardTitle} from 'reactstrap';


/** JokeCard 
 *    STATE: 
 *      joke - contains joke and tagline(answer) in array
 *      newJokeCount - increases everytime a new joke is requested 
 *                     to trigger useEffect and future metric tracking
 * 
 *    useEffect - calls jokeAPI to get a new joke 
*/
function JokeCard() {
  const [joke, setJoke] = useState([]);
  const [newJokeCount, setNewJokeCount] = useState(0);

  useEffect(function getJokeOnRender() {
    async function newJoke() {
      let jokeRes = await JokeApi.getJoke();
      setJoke(jokeRes);
      // setJoke(['why did chicken cross road?', 'cause he wanted to sukka'])
      // console.log("got joke from api -->", jokeRes);
    }
    newJoke();
  }, [newJokeCount])

  function resetJoke(evt) {
    setNewJokeCount(() => newJokeCount + 1)
  }

  return (
    <div className="JokeContainer">
      <motion.div className="JokeCardDiv"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
        drag
        dragConstraints={{
          top: -.5,
          left: -.5,
          right: .5,
          bottom: .5,
        }}>

        <Card body className="JokeCard text-center border border-dark">
          <motion.p
            whileHover={{ scale: 1.2,
                          x: 10 }}
            whileTap={{ scale: 0.8 }}
            onClick={resetJoke} 
            className="jokeReset">
            👉</motion.p>
          <CardTitle tag="h2">{joke[0]}</CardTitle>
          <div className="TaglineDiv">
            <p>{joke[1]}</p>
            <h4>click & hold for answer</h4>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default JokeCard;