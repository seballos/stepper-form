import React from 'react'
import Textfield from '../TextField'

const DateField = props => (
  <Textfield {...props} type="date" InputLabelProps={{ shrink: true }} />
)

export default DateField
