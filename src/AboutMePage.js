import React from "react";
import { Container } from 'reactstrap';
import AboutMeCard from "./AboutMeCard";
import { motion } from "framer-motion"
import InfoCard from "./InfoCard";
import "./AboutMePage.css"
import InfoCardLarge from "./InfoCardLarge";
import {educationText, motivationText, aboutMeText} from "./texts/bioTexts"

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: .5, duration: 1 }
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }
  }
}
function AboutMePage() {
  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
        <AboutMeCard title={"About Me"}textbody={aboutMeText} />
      </motion.div>
      <div className="AboutMePage Cards">
        <InfoCard title="Education" textbody={educationText} />
        <h1 className="AboutMePage">.</h1>
        <InfoCard title="Motivation" textbody={motivationText} />
      </div>
      <InfoCardLarge />
    </Container>

  )
}

export default AboutMePage;