import React from 'react';
import PropTypes from 'prop-types';

function PostDetails(props) {
  const { post, onClickingDislike, onClickingLike, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h3><strong>{post.brand}'s {post.name}</strong></h3>
      <h4>${post.price}</h4>
      <h4><em>Alcohol Content </em>{post.alcoholContent}%</h4>
      <h4>Amount Left (in pints): {post.amountLeft}</h4>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingDislike(post.id) }>Dislike</button>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingLike(post.id) }>Like</button>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingDelete(post.id) }>Remove This Post</button>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingEdit(post.id) }>Edit Post</button>
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