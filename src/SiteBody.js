import React, { useState } from "react";
import HeaderCard from "./HeaderCard";
import AboutMeCard from "./AboutMeCard";

import { motion } from "framer-motion"

function SiteBody() {
  const [currentPage, setCurrentPage] = useState(0)

  function clickHandler() {
    console.log("button clicked", currentPage)
    setCurrentPage(currentPage => currentPage + 1)
  }
  return (
    <div>
      {currentPage < 1 &&
        <motion.div>
          <HeaderCard clickHandler={clickHandler} />
        </motion.div>}
      {currentPage >= 1 &&
        <motion.div
        animate={{ x: 5 }}
        initial={{ x: 2000 }}
        >
          <AboutMeCard />
        </motion.div>}
    </div>
  )
}

export default SiteBody;