import React from 'react'
import './App.scss'

import { Button } from './components'

const App = () => {
  return (
    <div
      style={{
        border: '1px dashed tomato',
        padding: '1rem',
        margin: '1rem',
      }}>
      <small style={{ textAlign: 'center', display: 'block', color: 'tomato' }}>This is loaded from Library</small>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'tomato',
          color: 'white',
        }}>
        <h1>Library component</h1>
      </div>
      <div style={{ margin: '10px', padding: '10px', textAlign: 'center' }}>
        <Button>Click</Button>
      </div>
    </div>
  )
}

export default App
