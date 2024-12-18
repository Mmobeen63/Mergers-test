import React from 'react'
import styles from './badget.module.css'

const Badge = ({
  title = 'badge',
  textColor='#0a0a14',
  backgroundColor = '#FFFFFF',
  ...props
}) => {
  return (
    <p className={`${styles.badge} bg-[${backgroundColor}] text-[${textColor}]`} {...props}>
      {title}
    </p>
  )
}

export default Badge
