import React from "react";
import HeaderCard from "./HeaderCard";
import { motion } from "framer-motion"


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
  return (

    <motion.div
    variants={containerVariants}
      // initial="hidden"
      // animate="visible"
      exit="exit">
      <HeaderCard />
    </motion.div>


  )
}

export default HomePage;