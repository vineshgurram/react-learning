import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Careers() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    function goHomePage(){
        navigate("/",{state:{username}});
    }
    return (
      <div>
        <h2>Careers</h2>
        <p>Welcome to the Careers page!</p>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <button onClick={goHomePage}>Go to Homepage</button>
      </div>
    );
  }
  