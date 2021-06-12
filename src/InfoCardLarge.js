import React from "react";
import "./InfoCardLarge.css"
import { Card, CardTitle } from 'reactstrap';
import { motion } from "framer-motion"
import ProgressBar from "./ProgressBar";
import ProgressBarSpecial from "./ProgressBarSpecial";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function InfoCardLarge() {

  return (

    <motion.div className="InfoCardLargeDiv"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 2000, opacity: 0 }}
      transition={{ delay: 1, duration: 3 }}
      drag
      dragConstraints={{
        top: -1,
        left: -1,
        right: 1,
        bottom: 1,
      }}>
      <Card body className="InfoCardLarge text-center border border-dark">
        <CardTitle tag="h2">Skills</CardTitle>
        <div className="InfoCardLarge-Text">
          <motion.div className="InfoCardLoadingBar"> </motion.div>
          <ProgressBar percent={70} title={"Python"} rating={"🥇🥇🥇"} />
          <ProgressBar percent={90} title={"JavaScript"} rating={"🏆🏆🏆"} />
          <ProgressBar percent={60} title={"TypeScript"} rating={"👨‍💻👨‍💻👨‍💻"} />
          <ProgressBar percent={85} title={"React"} rating={"🔥🔥🔥"} />
          <ProgressBar percent={80} title={"Node.js"} rating={"🤌🤌🤌"} />
          <ProgressBar percent={75} title={"Flask"} rating={"👀👀👀"} />
          <ProgressBar percent={76} title={"SQL"} rating={"📈📈📈"} />
          <ProgressBar percent={70} title={"Git"} rating={"🔨🔨🔨"} />
          <ProgressBar percent={60} title={"MacOs"} rating={"🍎🍏👨‍💻"} />
          <ProgressBarSpecial
            percent={50}
            title={"Skills to improve on?"}
            rating={"Always Improving!!!"}
          />
        </div>
        <div className="infoCardLargeBrands" >
          <FontAwesomeIcon icon={['fab', 'react']} size="2x" />
          <FontAwesomeIcon icon={['fab', 'js']} size="2x"/>
          <FontAwesomeIcon icon={['fab', 'python']} size="2x"/>
          <FontAwesomeIcon icon={['fab', 'apple']} size="2x"/>
          <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
          <FontAwesomeIcon icon={['fab', 'node-js']} size="2x"/>
          <FontAwesomeIcon icon={['fab', 'css3-alt']} size="2x"/>
          <FontAwesomeIcon icon={['fab', 'html5']} size="2x"/>
          <FontAwesomeIcon icon={['fab', 'aws']} size="2x"/>
        </div>
      </Card>

    </motion.div>
  );
}
export default InfoCardLarge;
