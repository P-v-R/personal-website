import React from 'react';
import { motion } from "framer-motion";
import "./ProgressBar.css"

/** 
 * ProgressBar
 * Props: 
 *    percent - how long bar will be
 *    title - title on bar
 *    rating - message under bar
 * 
 */
function ProgressBar({ percent, title, rating }) {
  return (
    <div>
      <div className="ProgressLogo">{rating}</div>
      <motion.div
        className="ProgressDiv"
        style={{ width: `${percent}%` }}
        whileHover={{ x: `${3}vw` }}
      >{title}</motion.div>
    </div>
  )
}

export default ProgressBar;