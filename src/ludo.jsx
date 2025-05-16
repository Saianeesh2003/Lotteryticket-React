import { useState } from "react";

function Ludo() {
  let [move, setMove] = useState({ b: 0, g: 0 });
  function inc() {
    setMove((prevV) => {
      return {
        ...prevV,
        b: prevV.b + 1,
      };
    });
  }
  return (
    <div>
      
      <p>blue moves:{move.b}</p>
      <button onClick={inc}>click to increment</button>
    
    </div>
  );
}
export default Ludo;