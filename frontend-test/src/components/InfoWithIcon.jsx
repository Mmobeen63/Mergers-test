import React from 'react'
import styles from './info.module.css'

// InfoWithIcon component definition
const InfoWithIcon = ({
  title = '', // Default title is an empty string
  desc = '', // Default description is an empty string
  iconUrl = '' // Default icon URL is an empty string
}) => {
  return (
    <div className={styles.container}>
      {/* Display the icon image */}
      <img
        className={styles.icon}
        src={iconUrl} // URL or path of the icon image
        width={30} // Width of the icon
        height={30} // Height of the icon
        alt='icon' // Alt text for the icon image
      />
      {/* Display the title */}
      <div className={styles.heading}>{title}</div>
      {/* Display the description */}
      <div className={styles.desc}>{desc}</div>
    </div>
  )
}

export default InfoWithIcon
