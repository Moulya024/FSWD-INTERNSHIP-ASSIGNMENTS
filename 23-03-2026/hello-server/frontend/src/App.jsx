import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  // Function to call backend routes
  const getData = (route) => {
    axios.get(`http://localhost:5000${route}`)
      .then(res => setMessage(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello Server 🚀</h1>

      {/* 🔥 BONUS BUTTONS */}
      <button onClick={() => getData("/")}>Home</button>
      <button onClick={() => getData("/about")}>About</button>
      <button onClick={() => getData("/contact")}>Contact</button>

      {/* Display message */}
      <h2>{message}</h2>
    </div>
  );
}

export default App;
