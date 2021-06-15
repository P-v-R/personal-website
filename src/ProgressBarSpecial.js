import React from 'react';
import { motion } from "framer-motion";
import "./ProgressBar.css"


function ProgressBarSpecial({ percent, title, rating }) {
  console.log("percent === >", percent)
  return (
    <div>
      <div className="ProgressLogo">{rating}</div>
      <motion.div
        className="ProgressDivSpecial"
        style={{ width: `${percent}%` }}
        whileHover={{ x: 250 }}
        transition={{}}
      >{title}</motion.div>
    </div>
  )
}

export default ProgressBarSpecial;