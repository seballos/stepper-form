import React from 'react'
import { TextField as MaterialTextField } from '@material-ui/core'

import './TextField.styl'

const Textfield = props => (
  <MaterialTextField
    inputProps={{ className: 'textfield__input' }}
    variant="filled"
    fullWidth
    {...props}
  />
)

export default Textfield
