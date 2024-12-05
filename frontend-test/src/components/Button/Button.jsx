import React from 'react'

const ReusableButton = ({ label = '', className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`primaryButton ${className}`}
    >
      {label}
    </button>
  )
}

export default ReusableButton
