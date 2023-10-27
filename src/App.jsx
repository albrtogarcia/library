import React from 'react'
import { Dashboard } from './layouts/Dashboard/Dashboard'
import './App.scss'

import Button from './components/Button/Button'

const App = () => {
  return (
    <Dashboard>
      <h1 className="content-header">Buttons</h1>
      <Button>Click</Button>
    </Dashboard>
  )
}

export default App
