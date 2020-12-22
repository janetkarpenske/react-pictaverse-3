import React from "react";
import PostControl from "./PostControl"; 
import Header from "./Header";

import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <React.Fragment>
      <Router>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/">
              <PostControl />
            </Route>
          </Switch>
        </div>
        
      </Router>
    </React.Fragment>
  );
}

export default App;
