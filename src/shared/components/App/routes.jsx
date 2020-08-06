import React from 'react'
import { Switch, Route } from 'react-router-dom'
import home from '../../pages/home'
import about from '../../pages/about'
import contact from '../../pages/contact'

export default function routes() {
  return (
    <Switch>
      <Route path='/' render={home} />
      <Route path='/about' render={about} />
      <Route path='/contact' render={contact} />
    </Switch>
  )
}
