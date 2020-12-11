import React from 'react';
import PropTypes from 'prop-types';

function Post (props) {
  return (
    <React.Fragment>
      <div className="hoverItem" onClick = {() => props.whenPostIsClicked(props.id)}> 
        <h4><strong>{props.brand}'s' {props.name}</strong> - ${props.price}</h4>
        <h5>Alcohol Content: {props.alcoholContent}% - Amount Left: {props.amountLeft} Pints</h5> 
        
      </div>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  amountLeft: PropTypes.number,
  id: PropTypes.string, //why is this a string and not a number?
  whenPostIsClicked: PropTypes.func
};

export default Post;