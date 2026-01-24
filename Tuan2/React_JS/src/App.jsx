import './App.css'
// import Button from './component/Button.jsx'
import Alert from './component/Alert'
import { useState } from 'react'
import LoginForm from './component/LoginForm'
import Responsive from './component/Responsive'
import Header from './component/Header'
import StudentInfo from './component/StudentInfo'
import Footer from './component/Footer'
import CounterApp from './component/CounterApp'

function App() {
  // const [bgColor, setBgColor] = useState('#4d83d2')

  return(
    //Tuần 1: Bài 2:
    // <>
    //   <Button type="primary">Primary</Button>
    //   <Button type="success">Success</Button>
    //   <Button type="danger">Danger</Button>
    // </>

    //Tuần 1: Bài 3:
    // <div style = {{backgroundColor: bgColor, height: '600px', width: '500px'}}>
    //   <Alert title = "Success" style = "success" onClick = {() => setBgColor('lightgreen')}></Alert>
    //   <Alert title = "Warning" style = "warning" onClick = {() => setBgColor('rgb(236, 240, 128)')}></Alert> 
    //   <Alert title = "Error" style = "error" onClick = {() => setBgColor('#f15b5b')}></Alert> 
    // </div>

    //Tuần 1: Bài 4:
    // <LoginForm></LoginForm>

    //Tuần 1: Bài 5:
    // <Responsive></Responsive>

    //Tuần 2: Bài 1
    // <>
    //   <Header name = 'Đỗ Minh Tuấn'></Header>
    //   <StudentInfo name = 'Đỗ Minh Tuấn' mssv = '23717161' className = 'DHKTPM19BTT'>

    //   </StudentInfo>
    //   <Footer name = 'Đỗ Minh Tuấn'></Footer>
    // </>

    <CounterApp></CounterApp>
    
  )
  
}

export default App
