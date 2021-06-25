import React from "react";
import { Container, Row, Col } from 'reactstrap';
import AboutMeCard from "./AboutMeCard";
import { motion } from "framer-motion"
import InfoCard from "./InfoCard";
import "./AboutMePage.css"
import InfoCardLarge from "./InfoCardLarge";
import { educationText, motivationText, aboutMeText, joblyText, tweebler, thisSite } from "./texts/bioTexts"
import PhotoCard from "./PhotoCard";

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
            <InfoCard  title="Education" textbody={educationText} />
          </Col>
          <Col >
            <InfoCard  title="Motivation" textbody={motivationText} />
          </Col>
        </Row>
        <InfoCardLarge />
        <PhotoCard />
      </motion.div>

      <InfoCard title="Jobly JobFinder 🔎" textbody={joblyText} />
      <h1 className="AboutMePage">.</h1>
      <InfoCard title="Tweebler 🦤 " textbody={tweebler} />
      <h1 className="AboutMePage">.</h1>
      <InfoCard title="This Website! " textbody={thisSite} />
      <h1 className="AboutMePage">.</h1>

    </Container>


  )
}

export default AboutMePage;