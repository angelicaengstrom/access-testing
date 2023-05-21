import React from 'react'
import Form from './components/Form'
import Test from './components/Test'
import styles from './appStyles.modules.css'


function App() {
  return (
    <div class="content">
      <div class="form-content">
        <h1>Tillgänglighetstest</h1>
        <Form/>
      </div>
      <Test/>
    </div>
  )
}

export default App
