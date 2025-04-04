import React from "react";
import useCounter from "./useCounter";

function Sayac() {
  const [num, increment, decrement, reset] = useCounter();
  return (
    <div>
      <h2>Sayı = {num}</h2>
      <button onClick={increment}>Arttır</button>
      <button onClick={reset}>Sıfırla</button>
      <button onClick={decrement}>Azalt</button>
    </div>
  );
}

export default Sayac;
