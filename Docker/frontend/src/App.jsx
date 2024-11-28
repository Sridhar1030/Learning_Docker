import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    // Use Axios to send a POST request to the backend
    axios
      .post("http://localhost:3000/post")
      .then((res) => setResponse(res.data)) // Access response data directly
      .catch((error) => console.error("Error:", error)); // Handle error
  }, []);

  return (
    <div className="App">
      <h1>Frontend to Backend Communication</h1>
      <p>{response}</p>
    </div>
  );
}

export default App;
