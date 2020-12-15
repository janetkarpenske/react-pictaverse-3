import React from 'react';
import PropTypes from 'prop-types';

function PostDetails(props) {
  const { post, onClickingDislike, onClickingLike, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h3><strong>{post.name} {post.location}</strong></h3>
      <h4>{post.summary}</h4>
      <img src="{post.image}"></img>
      <h4>Dislikes: {post.dislikes}: Likes: {post.likes}</h4>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingDislike(post.id) }>Dislike</button><br/>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingLike(post.id) }>Like</button><br/>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingDelete(post.id) }>Remove This Post</button><br/>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingEdit(post.id) }>Edit Post</button><br/>
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