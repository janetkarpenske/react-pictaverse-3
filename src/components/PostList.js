import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import PostStyling from './../styling/posts.css';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import WrappedMap from './Map';

function PostList(props){
  useFirestoreConnect([
    { collection: 'posts' }
  ]);

  const posts = useSelector(state => state.firestore.ordered.posts);

  if (isLoaded(posts)) {
    return (
      <React.Fragment>
        
        <h2 className="center-align feedHeader">picta<span className="green">v</span>erse</h2>

        <div>
          <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} 
          //height tells it to be 100% of whatever container it is in
          loadingElement={<div style={{height: "50%"}}></div>}
          containerElement={<div style={{height: "50%"}}></div>}
          mapElement={<div style={{height: "50%"}}></div>}
          />
        </div>




        <div className="container">
        {posts.map((post) => {
        
          return <Post
          whenPostIsClicked = { props.onPostSelection }
          name={post.name}
          location={post.location}
          summary={post.summary}
          image={post.image}
          likes={post.likes}
          dislikes={post.dislikes}
          id={post.id}
          key={post.id}/>
        })}
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading Pictaverse...</h3>
      </React.Fragment>
    )
  }
}

PostList.propTypes = {
  // postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;
