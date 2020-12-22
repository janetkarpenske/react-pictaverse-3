import React from "react";

function Header(){  
  return (
    <React.Fragment>
    <ul className="headerList">
      <li>home</li>
      <li>sign in & register</li>
      <li className="nameItem">picta<span className="green">v</span>erse</li>
    </ul>
    </React.Fragment>
  );
}

export default Header