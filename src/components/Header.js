import React from 'react';

function Header () {
  return (
    <React.Fragment>
      <div className="mainHeader"></div>
      <div className="center-align">
        <h1 className="title">pictaverse</h1>
        <h3>A photography-driven travel guide.</h3>
        <h6><strong>Created By: Janet Karpenske</strong></h6>
      </div>
    </React.Fragment>
  );
}

export default Header;