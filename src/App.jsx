import React from 'react'
import { Switch, Route, MemoryRouter } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Stepper from './views/Stepper'

import './App.styl'

const App = () => {
  return (
    <Container maxWidth="md">
      <h1>Tributi Test</h1>
      <MemoryRouter initialEntries={['/']}>
        <div className="container">
          <Switch>
            <Route path="/" component={Stepper} />
          </Switch>
        </div>
      </MemoryRouter>
    </Container>
  )
}

export default App
