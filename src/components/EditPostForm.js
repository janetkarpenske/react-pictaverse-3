import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditPostForm (props) {
  const { post } = props;

  function handleEditSubmission(event) {
    event.preventDefault();
    props.onEditPost({name: event.target.name.value, location: event.target.location.value, summary: event.target.summary.value, image: event.target.image.value, likes: post.likes, dislikes: post.dislikes, id: post.id})
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler = {handleEditSubmission} buttonText="Update"/>
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func
};

export default EditPostForm;