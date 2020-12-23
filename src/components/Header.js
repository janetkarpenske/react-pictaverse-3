import React from "react";
import { Link } from "react-router-dom";

function Header(){  

  return (
    <React.Fragment>
    <ul className="headerList">
      <li><Link to="/">home</Link></li>
      <li><Link to="/signin">sign in & register</Link></li>
      <li className="nameItem">picta<span className="green">v</span>erse</li>
    </ul>
    </React.Fragment>
  );
}

export default Header

//<Link to="/">