import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded'

import { BACK, NEXT, FINISH } from './constants'

import './FlowButton.styl'

const FlowButton = ({ type, route, ...props }) => {
  const directionArrowProps =
    type === BACK
      ? { startIcon: <ArrowBackIosRounded /> }
      : { endIcon: <ArrowForwardIosRounded />, type: 'submit' }
  const buttonProps = { ...props, ...directionArrowProps }
  const shouldDisabled = type === BACK && !route
  const isFinish = type === NEXT && !route
  const textContent = isFinish ? FINISH : type

  return (
    <Button
      disabled={shouldDisabled}
      {...buttonProps}
      color="secondary"
      className="flow-button"
      classes={{ disabled: 'flow-button--disabled' }}
    >
      {textContent}
    </Button>
  )
}

FlowButton.propTypes = {
  route: PropTypes.string,
  type: PropTypes.oneOf([NEXT, BACK]).isRequired,
}

FlowButton.defaultProps = {
  route: '',
}

export default FlowButton
