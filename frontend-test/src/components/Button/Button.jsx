import { Button } from '@mui/material'
import React from 'react'
const ReusableButton = ({label="filter", ...props}) => {
  return (
      <Button {...props}>{label}</Button>
  )
}

export default ReusableButton