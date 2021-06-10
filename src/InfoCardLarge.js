import React from "react";
import "./InfoCardLarge.css"
import { Card, CardTitle, CardText } from 'reactstrap';
import { motion } from "framer-motion"
import ProgressBar from "./ProgressBar";
import ProgressBarSpecial from "./ProgressBarSpecial";


function InfoCardLarge(){

  return (
    
    <motion.div className="InfoCardLargeDiv"
    drag
      dragConstraints={{
        top: -1,
        left: -1,
        right: 1,
        bottom: 1,
      }}>
      <Card body className="InfoCardLarge text-center border border-dark">
        <CardTitle tag="h2">Skills</CardTitle>
        <CardText className="InfoCardLarge-Text">
          <motion.div className="InfoCardLoadingBar"> </motion.div>
          <ProgressBar percent={70} title={"Python"} rating={"🥇🥇🥇"}/>
          <ProgressBar percent={90} title={"JavaScript"} rating={"🏆🏆🏆"}/>
          <ProgressBar percent={60} title={"TypeScript"} rating={"👨‍💻👨‍💻👨‍💻"}/>
          <ProgressBar percent={85} title={"React"} rating={"🔥🔥🔥"}/>
          <ProgressBar percent={80} title={"Node.js"} rating={"🤌🤌🤌"}/>
          <ProgressBar percent={75} title={"Flask"} rating={"👀👀👀"}/>
          <ProgressBar percent={60} title={"SQL"} rating={"📈📈📈"}/>
          <ProgressBar percent={70} title={"Git"} rating={"🔨🔨🔨"}/>
          <ProgressBarSpecial 
                percent={50} 
                title={"Skills to improve on?"} 
                rating={"Always Improving!!!"}
          />

          </CardText>
      </Card>
    </motion.div>
  );
}
export default InfoCardLarge;
