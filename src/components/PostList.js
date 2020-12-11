import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <React.Fragment>
      <h2 className="center-align">Your Feed</h2>
      {Object.values(props.postList).map((post) =>
        <Post
        whenPostIsClicked = { props.onPostSelection }
        name={post.name}
        brand={post.brand}
        price={post.price}
        alcoholContent={post.alcoholContent}
        amountLeft={post.amountLeft}
        id={post.id}
        key={post.id}/>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;
