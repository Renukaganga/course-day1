import React, { useState } from "react";
import Register from "./Register";
import Ref from "./Ref";

function Cond(props) {
  const [login, setLogin] = useState(true);

  const handleClick1 = () => {
    setLogin(false);
  };
  const handleClick = () => {
    setLogin(true);
  };

  return (
    <div style={{padding:'50px',textAlign:'center'}}>
      <button onClick={handleClick}>login</button>

      <button onClick={handleClick1}>register</button>
      <br></br>
      {login ? <Ref /> : <Register />}
    </div>
  );
}

export default Cond;
