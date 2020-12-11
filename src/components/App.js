import React from "react";
import Header from "./Header";
import PostControl from "./PostControl"; 

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        <PostControl />
      </div>
    </React.Fragment>
  );
}

export default App;
