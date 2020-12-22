import React from 'react';
import PropTypes from 'prop-types';

function PostDetails(props) {
  const { post, onClickingDislike, onClickingLike, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <div className="whiteBackground">
      <div className="center-align detailPage container">
        <h3><strong>{post.name} {post.location}</strong></h3><br/><br/>
        
        <img className="detailImg" src={post.image}></img><br/><br/>
        <h4>{post.summary}</h4><br/><br/>
        <h4>Dislikes: {post.dislikes}: Likes: {post.likes}</h4><br/><br/>
        <button className="btn db btn-dark btn-md" onClick={ () => onClickingDislike(post.id) }>Dislike</button>
        <button className="btn db btn-dark btn-md" onClick={ () => onClickingLike(post.id) }>Like</button>
        <button className="btn db btn-dark btn-md" onClick={ () => onClickingDelete(post.id) }>Remove This Post</button>
        <button className="btn db btn-dark btn-md" onClick={ () => onClickingEdit(post.id) }>Edit Post</button>
      </div>
      </div>
    </React.Fragment>
  );
}

PostDetails.propTypes = {
  post: PropTypes.object,
  onClickingDislike: PropTypes.func,
  onClickingLike: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}
export default PostDetails;