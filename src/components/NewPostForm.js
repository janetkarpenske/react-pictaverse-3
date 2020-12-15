import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewPostForm (props) {

  function handlePostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({name: event.target.name.value, location: event.target.location.value, summary: event.target.summary.value, image: event.target.image.value, likes: 0, dislikes: 0, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handlePostFormSubmission}
      buttonText="Post" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewPostForm;