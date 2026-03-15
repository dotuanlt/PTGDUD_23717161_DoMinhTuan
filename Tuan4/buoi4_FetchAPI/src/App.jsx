import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);

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
  // useEffect(() => {
  //   var url = "https://jsonplaceholder.typicode.com/users";

  //   async function fetchdata () {
  //     var res = await fetch(url);

  //     try {
  //         if(res.ok){
  //           var data = await res.json();
  //           setUsers(data);
  //           setTimeout(() => {
  //             setLoading(false);
  //           }, 1000);
  //           console.log("succes");
  //         }
  //         else{
  //           console.log("error");
  //         }

  //     } catch (error) {
  //       console.log("error")
  //     }
  //   }
  //   fetchdata();

  // }, [])

  // Bài 3:
  async function findUser() {
    var url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    var res = await fetch(url);

    try {
      if (res.ok) {
        var data = await res.json();
        setUser(data);
        console.log(data);
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.log("error");
    }
  }

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
      {/* {
      loading ? (<h2>Loading...</h2>): 
          (users.map((item) => {
            return <div key = {item.id}>
              <h2>{item.name}</h2>
              <h2>{item.email}</h2>
            </div>
        }))
    } */}

      {/* Bài 3: */}
      {
        <div>
          <span>Nhập ID của User cần tìm: </span>
          <input
            type="text"
            name="get_UserID"
            id="get_UserID"
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            style={{ margin: "10px" }}
            type="button"
            value="Find"
            onClick={findUser}
          />
          <table border={1}>
            <tbody>
              <tr>
                <td style={{ width: "100px" }}>Name</td>
                <td style={{ width: "200px" }}>{user?.name}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{user?.phone}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>{user?.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </>
  );
}

export default App;
