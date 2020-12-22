import React from "react";
import PostControl from "./PostControl"; 
import Header from "./Header";

function App(){
  return ( 
    <React.Fragment>
      <div className="container-fluid">
        <Header />
        <PostControl />
      </div>
    </React.Fragment>
  );
}

export default App;
