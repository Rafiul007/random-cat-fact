
import { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";

function App() {

  const [catFact,setCatFact]=useState("")

  function fetchData()
  {
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
    })
    
    
  }
  


  return (
    <div className="App">
      <div>
        <button className="btn" onClick={fetchData}>Meow!</button>
        <h2>{catFact}</h2>
      </div>
      
    </div>
  );
}

export default App;
