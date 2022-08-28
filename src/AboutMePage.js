import React from "react";
import { Container, Row, Col } from 'reactstrap';
import AboutMeCard from "./AboutMeCard";
import { motion } from "framer-motion"
import InfoCard from "./InfoCard";
import "./AboutMePage.css"
import InfoCardLarge from "./InfoCardLarge";
import { 
  educationText,
  motivationText,
  aboutMeText,
  namerrText, 
  radixText,
  movepriceText
} from "./texts/bioTexts"
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
            <InfoCard key="1" title="Education" textbody={educationText} />
          </Col>
          <Col >
            <InfoCard key="2" title="Motivation" textbody={motivationText} />
            <PhotoCard photoSrc={seaPhoto} title="The Technical Stuff 👇"/>            
          </Col>
        </Row>
        <InfoCardLarge />
        <PhotoCard photoSrc={skyPhoto} title="Projects" />
      </motion.div>
      
      <ProjectCard title="Radix 💸"
        description={radixText}
        link={"https://www.radixdlt.com/"} />
      <h1 className="AboutMePage">.</h1>
      <ProjectCard title="Moveprice 📦"
        description={movepriceText}
        link={"https://www.moveprice.com/"} />
      <h1 className="AboutMePage">.</h1>
      <ProjectCard title="Namerr 🥸"
        description={namerrText}
        link={"https://www.npmjs.com/package/namerr"}
        ghLink={"https://github.com/P-v-R/namerr"}
        isPublic={true} />
      <h1 className="AboutMePage">.</h1>
      <ProjectCard title="Check out my Github! 💾"
        description="Find all my work here!"
        link={"https://github.com/P-v-R"}
        isPublic={true} />
      <h1 className="AboutMePage">.</h1>
    </Container>
  )
}

export default AboutMePage;