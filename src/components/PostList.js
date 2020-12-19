import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import './../styling/posts.css';
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

        <div style={{width: '95vw', height: '80vh', marginLeft: '30px'}}>
          <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} //&key=${process.env.REACT_APP_GOOGLE_KEY_TWO}
          //height tells it to be 100% of whatever container it is in
          loadingElement={<div style={{height: "100%"}}></div>}
          containerElement={<div style={{height: "600px"}}></div>}
          mapElement={<div style={{height: "100%"}}></div>}
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
          lat={post.lat}
          lng={post.lng}
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
