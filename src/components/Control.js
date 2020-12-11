import React from 'react';
//import PropTypes from 'prop-types';
import Splashpage from './Splashpage';


class PostControl extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedPost: null,
  //     editing: false
  //   };
  //}

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code

      currentlyVisibleState = <Splashpage />;
      //buttonText = "Add Post"; // new code
    }
    return (
      //<React.Fragment>
        {currentlyVisibleState}
        //<button className="btn btn-outline-dark btn-sm" onClick={this.handleClick}>{buttonText}</button>
      //</React.Fragment>
    );
  };


export default Control;