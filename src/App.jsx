
import Button from './Button.jsx'
import Input from './Input.jsx'

const App = () => {
  return (
    <div style={{backgroundColor: "yellow", marginLeft: "250px", padding: "20px", width: "100%"}}>
      <h1 style={{color: "blue"}}>Hello World</h1>
      <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
      <Input placeholder="Enter your name" type="text" />
      <Input placeholder="Enter your email" type="email" />
      <Input placeholder="Enter your password" type="password"/>
      </div>
      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
      <Button text="Submit" type="submit" disabled = {false} />
      <Button text="Reset" type="reset" disabled ={false} />
      <Button text="Button" disabled = {true} />
      </div>
    </div> 
  )
}

export default App

