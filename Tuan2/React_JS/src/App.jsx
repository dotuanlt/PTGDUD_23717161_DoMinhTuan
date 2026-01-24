import './App.css'
// import Button from './component/Button.jsx'
import Alert from './component/Alert'
import { useState } from 'react'
import LoginForm from './component/LoginForm'

function App() {
  const [bgColor, setBgColor] = useState('#4d83d2')

  return(
    //Bài 2:
    // <>
    //   <Button type="primary">Primary</Button>
    //   <Button type="success">Success</Button>
    //   <Button type="danger">Danger</Button>
    // </>

    //Bài 3:
    // <div style = {{backgroundColor: bgColor, height: '600px', width: '500px'}}>
    //   <Alert title = "Success" style = "success" onClick = {() => setBgColor('lightgreen')}></Alert>
    //   <Alert title = "Warning" style = "warning" onClick = {() => setBgColor('rgb(236, 240, 128)')}></Alert> 
    //   <Alert title = "Error" style = "error" onClick = {() => setBgColor('#f15b5b')}></Alert> 
    // </div>

    //Bài 4:
    <LoginForm></LoginForm>

  )
  
}

export default App
