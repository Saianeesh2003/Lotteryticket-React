import { useState } from "react";
import "./lottery.css"; 

function Lot() {
  function rand() {
    return Math.floor(Math.random() * 999) + 1;
  }
  
  let [dig, setDig] = useState(rand());
  let [result, setResult] = useState(null);
  
  function updateNumber() {
    let newDigit = Math.floor(Math.random() * 999) + 1;
    setDig(newDigit);
    let res = sumOfDigits(newDigit);

    if (res === 15) {
      setResult("win");
    } else {
      setResult("lose");
    } 
  }
  
  function sumOfDigits(num) {
    let sum = 0;
    for (; num > 0; num = Math.floor(num / 10)) {
      sum += num % 10;
    }
    return sum;
  }
  
  
  function formatNumber(num) {
    return num.toString().padStart(3, '0');
  }
  
  return (
    <div className="lottery-container">
      <h2 className="lottery-title">Lottery Game</h2>
      <p className="game-info">Get a sum of exactly 15 to win!</p>
      
      <div className="ticket-digits">
        {formatNumber(dig).split('').map((digit, index) => (
          <div key={index} className="digit">{digit}</div>
        ))}
      </div>
      
      <button className="lottery-button" onClick={updateNumber}>
        Generate Number
      </button>
      
      {result === "win" && (
        <div className="win-message">
          <h1>YOU HAVE WON!!!!!</h1>
          
        </div>
      )}
      
      {result === "lose" && (
        <div className="lose-message">
          <h1>You lose, try again by generating new ticket</h1>
          
        </div>
      )}
    </div>
  );
}

export default Lot;