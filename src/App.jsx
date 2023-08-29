import { useEffect, useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(async () => {
      try {
        const { data } = await axios.post(
          `https://projectteam7-backend.onrender.com/auth/signin`,
          {
            email: "user@example.com",
            password: "Qwerty123",
          }
        );
        setCount((count) => count + 1);
        console.log("data:", data);
      } catch (error) {
        console.log("error.message:", error.message);
      }
    }, 600000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <div>
        <span>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </span>
        <span>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </span>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>count is {count}</button>
        <p>Server Updater Start count and console every 20 minutes</p>
      </div>
      <p className="read-the-docs">Private Policy</p>
    </>
  );
}
export default App;
