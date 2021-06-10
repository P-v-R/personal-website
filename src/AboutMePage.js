import React from "react";
import { Container, Row, Col } from 'reactstrap';
import AboutMeCard from "./AboutMeCard";
import { motion } from "framer-motion"
import InfoCard from "./InfoCard";
import "./AboutMePage.css"
import InfoCardLarge from "./InfoCardLarge";

function AboutMePage() {
  return (
    <Container>
      <motion.div>
        <AboutMeCard />
      </motion.div>
      <div className="AboutMePage Cards">
        <InfoCard title="Education" />
        <h1 className="AboutMePage">.</h1>
        <InfoCard title="Motivation" />
      </div>
      <InfoCardLarge/>

    </Container>

  )
}

export default AboutMePage;