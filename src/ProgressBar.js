import React from 'react';
import { motion } from "framer-motion";
import "./ProgressBar.css"


function ProgressBar({ percent, title, rating }) {
  return (
    <div>
      <div className="ProgressLogo">{rating}</div>
      <motion.div
        className="ProgressDiv"
        style={{ width: `${percent}%` }}
        whileHover={{ x: 75 }}
      >{title}</motion.div>
    </div>
  )
}

export default ProgressBar;