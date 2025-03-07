import React from 'react'
import UncontrolledLoginForm from './UncontrolledLoginForm'

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginLeft:'500px', maxWidth: '500px', backgroundColor: 'blue', padding: '20px' }}>
      <h1 style={{color: 'white'}}>Uncontrolled Inputs App</h1>
      <UncontrolledLoginForm />
    </div>
  )
}

export default App


