import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditPostForm (props) {
  const firestore = useFirestore();
  const { post } = props;

  function handleEditSubmission(event) {
    event.preventDefault();
    props.onEditPost();
    const propertiesToUpdate = {
      name: event.target.name.value,
      location: event.target.location.value,
      summary: event.target.summary.value,
      image: event.target.image.value,
      likes: post.likes,
      dislikes: post.dislikes
    }
    return firestore.update({collection: 'posts', doc: post.id }, propertiesToUpdate)
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