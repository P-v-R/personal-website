import React from "react";
import "./InfoCardLarge.css"
import { Card, CardTitle } from 'reactstrap';
import { motion } from "framer-motion"
import ProgressBar from "./ProgressBar";
import ProgressBarSpecial from "./ProgressBarSpecial";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/**
 * InfoCardLarge
 *  large display card to display skills
 *  returns animate on hover progress bars 
 *  and logos of skills 
 */
function InfoCardLarge() {

  let hoverEffect = {scale: 1.2, rotate:5,
  transition: { duration: .4 }}

  return (

    <motion.div className="InfoCardLargeDiv"
      animate={{  opacity: 1 }}
      initial={{  opacity: 0 }}
      transition={{ delay: 1, duration: 2 }}
      >
      <Card body className="InfoCardLarge text-center border border-dark">
        <CardTitle tag="h2">Skills</CardTitle>
        <div className="InfoCardLarge-Text">
          <motion.div className="InfoCardLoadingBar"> </motion.div>
          <ProgressBar percent={95} title={"Python"} rating={"🥇"} />
          <ProgressBar percent={95} title={"JavaScript"} rating={"🏆"} />
          <ProgressBar percent={95} title={"TypeScript"} rating={"👨‍💻"} />
          <ProgressBar percent={95} title={"React"} rating={"🔥"} />
          <ProgressBar percent={95} title={"Node.js"} rating={"🤌"} />
          <ProgressBar percent={95} title={"Flask"} rating={"👀"} />
          <ProgressBar percent={95} title={"Django"} rating={"🙀"} />
          <ProgressBar percent={95} title={"SQL"} rating={"📈"} />
          <ProgressBar percent={95} title={"Git"} rating={"🔨"} />
          <ProgressBar percent={95} title={"MacOs"} rating={"🍎"} />
          <ProgressBar percent={95} title={"Adobe Creative suite "} rating={"🎨"} />
          <ProgressBarSpecial
            percent={75}
            title={"Skills to improve on?"}
            rating={"Always Improving!"}
          />
        </div>
        <div className="infoCardLargeBrands d-flex flex-wrap" >
          <motion.div className="SkillLogo"
            whileHover={hoverEffect}>
            <FontAwesomeIcon className="icon" icon={['fab', 'react']} size="3x" />
          </motion.div>
          <motion.div className="SkillLogo"
            whileHover={hoverEffect}>
            <FontAwesomeIcon className="icon" icon={['fab', 'js']} size="3x" />
          </motion.div>
          <motion.div className="SkillLogo"
            whileHover={hoverEffect}>
            <FontAwesomeIcon className="icon" icon={['fab', 'python']} size="3x" />
          </motion.div>
          <motion.div className="SkillLogo"
            whileHover={hoverEffect}>
            <FontAwesomeIcon className="icon" icon={['fab', 'apple']} size="3x" />
          </motion.div>
          <motion.div className="SkillLogo"
            whileHover={hoverEffect}>
            <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="3x" />
          </motion.div>
          <motion.div className="SkillLogo"
            whileHover={hoverEffect}>
            <FontAwesomeIcon className="icon" icon={['fab', 'node-js']} size="3x" />
          </motion.div>
          <motion.div className="SkillLogo"
            whileHover={hoverEffect}>
            <FontAwesomeIcon className="icon" icon={['fab', 'css3-alt']} size="3x" />
          </motion.div>
          <motion.div className="SkillLogo"
            whileHover={hoverEffect}>
            <FontAwesomeIcon className="icon" icon={['fab', 'html5']} size="3x" />
          </motion.div>
          <motion.div className="SkillLogo"
            whileHover={hoverEffect}>
            <FontAwesomeIcon className="icon" icon={['fab', 'aws']} size="3x" />
          </motion.div>
          <motion.div className="SkillLogo"
            whileHover={hoverEffect}>
            <FontAwesomeIcon className="icon" icon={['fab', 'bootstrap']} size="3x" />
          </motion.div>
          {/* <motion.div className="SkillLogo"
            whileHover={hoverEffect}>
            <FontAwesomeIcon className="icon" icon={['fab', 'docker']} size="3x" />
          </motion.div> */}
        </div>
      </Card>
    </motion.div>
  );
}
export default InfoCardLarge;
