import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div>
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        <div style={{margin: "10px"}}>
          <span style={{margin: "10px"}}>Name:</span>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div style={{margin: "10px"}}>
          <span style={{margin: "10px"}}>Email:</span>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div style={{margin: "10px"}}>
          <span style={{margin: "10px"}}>Age:</span>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <h2 style={{margin: "20px"}}>Preview</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default App;
