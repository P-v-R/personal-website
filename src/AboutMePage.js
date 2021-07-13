import React from "react";
import { Container, Row, Col } from 'reactstrap';
import AboutMeCard from "./AboutMeCard";
import { motion } from "framer-motion"
import InfoCard from "./InfoCard";
import "./AboutMePage.css"
import InfoCardLarge from "./InfoCardLarge";
import { educationText, motivationText, aboutMeText, joblyText, warblerText, jeopardyText } from "./texts/bioTexts"
import PhotoCard from "./PhotoCard";
import ProjectCard from "./ProjectCard";
import skyPhoto from "./assets/sky.png"
import seaPhoto from "./assets/sea.png"

/** reusable framer motion variants to incline on card renders */
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: .5, duration: 1 }
  },
  exit: {
    x: -10000,
    transition: {
      ease: "easeInOut",
      duration: 1
    }
  }
}

/** AboutMePage 
 *    Where all smaller components are rendered on the about me experience
 * 
 *    renders:
 *      AboutMeCard
 *      InfoCard
 *      InfoCardLarge
 *      PhotoCard
 */

function AboutMePage() {
  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AboutMeCard title={"About Me"} textbody={aboutMeText} />
        <Row>
          <Col >
            <InfoCard title="Education" textbody={educationText} />
          </Col>
          <Col >
            <InfoCard title="Motivation" textbody={motivationText} />
            <PhotoCard photoSrc={seaPhoto} title="The Technical Stuff 👇"/>            
          </Col>
        </Row>
        <InfoCardLarge />
        <PhotoCard photoSrc={skyPhoto} title="Projects" />
      </motion.div>
      <ProjectCard title="Jobly JobFinder 🔎"
        description={joblyText}
        link={"http://jobly-jobfinder.surge.sh/"}
        ghLink={"https://github.com/P-v-R/react-jobly-frontend"} />
      <h1 className="AboutMePage">.</h1>
      <ProjectCard title="Warbler 🦤 "
        description={warblerText}
        link={"http://warbler-kr.herokuapp.com/"}
        ghLink={"https://github.com/P-v-R/warbler"} />
      <h1 className="AboutMePage">.</h1>
      <ProjectCard title="JQuery-Jeopardy 🕺"
        description={jeopardyText}
        link={"https://dazzling-austin-dd2ae2.netlify.app/"}
        ghLink={"https://github.com/P-v-R/Jeopardy-JQuery"} />
      <h1 className="AboutMePage">.</h1>
    </Container>
  )
}

export default AboutMePage;