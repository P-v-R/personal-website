import React from "react";
import HeaderCard from "./HeaderCard";
import { motion } from "framer-motion"
import {howdyText} from "./texts/bioTexts"

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x:"-100vw",
    transition: {ease:"easeInOut" }
  }
}
function HomePage() {
  console.log("Hello there! Thanks for checking my website out,\n I spent a lot of time on it and think it's \na good reflection of my personality. I hope you enjoy!")
  return (

    <motion.div
    variants={containerVariants}
      // initial="hidden"
      // animate="visible"
      exit="exit">
      <HeaderCard textbody={howdyText}/>
    </motion.div>


  )
}

export default HomePage;