import { useState, useEffect } from "react";

function App() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup
    return () => {
      clearInterval(interval);
    };

  }, []);

  return (
    <div style={{border: "1px solid", margin: "auto", padding: "40px"}}>
        <h1>Digital Clock</h1>

        <h2>{time.toLocaleTimeString()}</h2>    
    </div>
  );
}

export default App;