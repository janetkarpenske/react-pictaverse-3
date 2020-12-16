import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
//import PostStyling from './../styling/posts.css';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function PostList(props){
  useFirestoreConnect([
    { collection: 'posts' }
  ]);

  const posts = useSelector(state => state.firestore.ordered.posts);

  if (isLoaded(posts)) {
    return (
      <React.Fragment>
        <h2 className="center-align">Your Feed</h2>
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
