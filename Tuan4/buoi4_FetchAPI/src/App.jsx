import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  //Bài 1:
  // useEffect(() => {
  //   var url = "https://jsonplaceholder.typicode.com/users";
  //   var res = fetch(url);

  //   res.then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     setUsers(data)
  //     console.log(data)
  //   })
  // }, [])
  

  return (
    <>
    {/* Bài 1: */}
      {/* {
        users.map((item) => {
          return <div key = {item.id}>
              <h2>{item.name}</h2>
              <h2>{item.email}</h2>
          </div>
        })
      } */}
    </>
  )
}

export default App
