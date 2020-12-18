import React from 'react';
// import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase'

function NewPostForm (props) {
  const firestore = useFirestore();

  function addPostToFirestore(event) {
    event.preventDefault();
    props.onNewPostCreation();

    return firestore.collection('posts').add(
      {
        name: event.target.name.value,
        location: event.target.location.value, 
        summary: event.target.summary.value,
        image: event.target.image.value,
        lat: parseFloat(event.target.lat.value),
        lng: parseFloat(event.target.lng.value),
        likes: 0,
        dislikes: 0,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={addPostToFirestore}
      buttonText="Post" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewPostForm;