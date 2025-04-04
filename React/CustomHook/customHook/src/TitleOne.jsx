import React from "react";
import { useState, useEffect } from "react";
import useTitle from "./useTitle";

function TitleOne() {
  const [num, setNum] = useState(0);
  //   useEffect(() => {
  //     document.title = `sayı ${num}`;
  //   }, [num]);

  useTitle(num);

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>sayi -{num}</button>
    </div>
  );
}

export default TitleOne;
