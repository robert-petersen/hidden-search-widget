import {FaSearch} from "react-icons/fa";
import {useState} from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      <div className={ isActive ? "active search" : "search" }>
        <input type="text" className="input" placeholder="Search..."></input>
        <button 
          className="btn"
          onClick={() => {setIsActive(!isActive)}}
        ><FaSearch className="icon"/></button>
      </div>
    </div>
  );
}

export default App;
