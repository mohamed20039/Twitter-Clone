import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SignUp from "./Pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Post from "./Components/Posts/Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
