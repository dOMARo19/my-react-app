import React from 'react'
import Random from "./Random"
import DisplayMessage from "./DisplayMessage"

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginLeft:'500px', maxWidth: '500px', backgroundColor: 'blue', padding: '20px' }}>
      <h1>React TypeScript App</h1>
      <Random min={1} max={100} />
      <DisplayMessage message="Hello, this is a stateless component!" />
    </div>
  )
}

export default App


