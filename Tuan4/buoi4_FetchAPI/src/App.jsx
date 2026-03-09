import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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

  //Bài 2:
  useEffect(() => {
    var url = "https://jsonplaceholder.typicode.com/users";
    
    async function fetchdata () {
      var res = await fetch(url);

      try {
          if(res.ok){
            var data = await res.json();
            setUsers(data);
            setTimeout(() => {
              setLoading(false);
            }, 1000);
            console.log("succes");
          }
          else{
            console.log("error");  
          }
          
      } catch (error) {
        console.log("error")
      }


      
      
    }
    fetchdata();
  
  }, [])
  

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


    {/* Bài 2: */}
    {
      loading ? (<h2>Loading...</h2>): 
          (users.map((item) => {
            return <div key = {item.id}>
              <h2>{item.name}</h2>
              <h2>{item.email}</h2>
            </div>
        }))
    }
    

    </>
  )
}

export default App
