import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from '../../containers/layout'
import Menu from '../Menu'
import Routes from './routes'

export default function App() {
  return (
    <Router>
      <Layout>
        <Menu />
        <Routes />
      </Layout>
    </Router>
  )
}
