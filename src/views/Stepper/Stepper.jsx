import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Switch, Redirect, Route } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import steps from '../../config'
import Step from '../Step'
import Thanks from '../Thanks'

import './Stepper.styl'

const MAX_PROGRESS = 100

const Stepper = ({ match }) => {
  const [sharedState, setSharedState] = useState({})
  const [progress, setProgress] = useState(0)

  const onStepChange = step => {
    const currentProgress = (step * MAX_PROGRESS) / steps.length
    setProgress(currentProgress)
  }
  return (
    <Fragment>
      <section>
        <h3 id="progressTitle" className="stepper__progress__title">
          Progress
        </h3>
        <LinearProgress
          aria-describedby="progressTitle"
          variant="determinate"
          value={progress}
          className="stepper__progress"
          id="progress"
        />
      </section>
      <Switch>
        <Redirect exact from={`${match.path}`} to="/personal-information" />
        {steps.map(({ slug, ...props }, index, array) => {
          const next = array[index + 1] || {}
          const prev = array[index - 1] || {}
          const { slug: nextRoute } = next
          const { slug: prevRoute } = prev
          return (
            <Step
              exact
              index={index}
              key={slug}
              path={slug}
              {...props}
              nextRoute={nextRoute}
              prevRoute={prevRoute}
              sharedState={sharedState}
              setSharedState={setSharedState}
              onStepChange={onStepChange}
            />
          )
        })}
        <Route path="/thanks" component={Thanks} />
      </Switch>
    </Fragment>
  )
}
Stepper.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
}

export default Stepper
