import React from 'react'
import styles from "./skillCardCmp.module.css"

const SkillCard = ({children, title}) => {
  return (
    <div className={styles.SkillCard}>
        <h3>{title || "SkillName"}</h3>
        {children}
    </div>
  )
}

export default SkillCard;