import { Routes, Route } from "react-router-dom";

import { useState } from "react";
function App() {
  <div className="App">
    <Button type="primary">Button</Button>
  </div>;

  // Khai báo biến
  // Khai bao co 3 cach

  const a = 12;
  var b = 13;
  let c = 14;

  // function

  //function thường

  function khaibao() {
    alert("minh la function thuong");
  }

  //Arrow function
  const khaibaobien = () => {
    alert("Arrow Function");
  };

  //State and if

  const [test, setTest] = useState(true);

  const sum = () => {
    if (test === true) {
      a > b ? alert("a lon hon b") : alert("b lon hon a");
    } else {
      const sum = a + b; //
    }
  };
  sum();
  return (
    <>
      {/* truyen tham so */}
      <button onClick={() => sum()}>Fetch Alert</button>
      {/* khong truyen tham so  */}
      <button onClick={sum}>Fetch Alert khong tham so</button>
    </>
  );
}
