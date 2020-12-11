import React from "react";
import Homepage from "./Homepage";
import PostControl from "./PostControl"; 

function App(){
  return ( 
    <React.Fragment>
      <Homepage />
      <div className="container-fluid">
        <PostControl />
      </div>
    </React.Fragment>
  );
}

export default App;
