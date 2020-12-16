import React from 'react';
import PropTypes from 'prop-types';

function Post (props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostIsClicked(props.id)}> 
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="postImg" src={props.image}></img>
          </div>
        {/* <div onClick = {() => props.whenPostIsClicked(props.id)}>  */}
          <h4><strong>{props.name}</strong> - {props.location}</h4>
          <p>Summary: {props.summary}</p>
          <h5>Dislikes: {props.dislikes} - Likes: {props.likes}</h5> 
          {/* <img src={props.image}></img> */}
        {/* </div> */}
        </div>
      </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  summary: PropTypes.string,
  image: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  id: PropTypes.string, //why is this a string and not a number?
  whenPostIsClicked: PropTypes.func
};

export default Post;