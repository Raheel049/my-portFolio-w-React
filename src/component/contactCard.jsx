import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./contactCard.module.css"

const ContactCard = ({iconName,iconDes,icon}) => {
  return (
    <>
    <div className={styles.ContactCardCont}>
        <div className={styles.iconBox}>
            <FontAwesomeIcon icon={icon} className={styles.icons} />
        </div>
        <div className={styles.iconNameDes}>
            <h2>{iconName}</h2>
            <p>{iconDes}</p>
        </div>
    </div>

    </>
)
}

export default ContactCard