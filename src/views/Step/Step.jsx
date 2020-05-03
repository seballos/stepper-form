import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import FlowButton, { BACK, NEXT } from '../../components/FlowButton'

import './Step.styl'

const Step = ({
  title,
  fields,
  nextRoute,
  prevRoute,
  history,
  index,
  sharedState,
  setSharedState,
  onStepChange,
}) => {
  const [hasError, setHasError] = useState(false)
  const [state, setState] = useState(sharedState)

  // It handles next button call, it assumes a submit
  // since it's the button which validates the form
  const handleSubmit = evt => {
    evt.preventDefault()
    if (!evt.target.checkValidity()) {
      setHasError(true)
      return
    }
    const nextStepIndex = index + 1
    history.replace(nextRoute || '/thanks')
    onStepChange(nextStepIndex)
  }

  const onBackClick = () => {
    const prevStepIndex = index - 1
    history.replace(prevRoute)
    onStepChange(prevStepIndex)
  }

  const handleOnChange = (name, required) => evt => {
    if (required) {
      setHasError(false)
    }
    setState({ ...state, [name]: evt.target.value })
    setSharedState({ ...sharedState, [name]: evt.target.value })
  }

  return (
    <section>
      <div>{title}</div>
      <form
        className="step__form"
        onSubmit={handleSubmit}
        noValidate
        aria-describedby="progress"
      >
        <div className="step__fields-container">
          {fields.map(({ component, required, name, ...props }) => {
            const Component = component
            return (
              <Component
                key={name}
                {...props}
                className="step__field"
                required={required}
                error={required && hasError}
                onChange={handleOnChange(name, required)}
                value={state[name] || ''}
              />
            )
          })}
        </div>
        <div className="step__actions">
          <FlowButton type={BACK} route={prevRoute} onClick={onBackClick} />
          <FlowButton type={NEXT} route={nextRoute} />
        </div>
      </form>
    </section>
  )
}

Step.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({})),
  history: PropTypes.shape({ replace: PropTypes.func }).isRequired,
  index: PropTypes.number.isRequired,
  nextRoute: PropTypes.string,
  onStepChange: PropTypes.func,
  prevRoute: PropTypes.string,
  setSharedState: PropTypes.func.isRequired,
  sharedState: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
}

Step.defaultProps = {
  nextRoute: '',
  prevRoute: '',
  onStepChange: () => {},
}

export default withRouter(Step)
