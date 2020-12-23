import React from 'react';
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
        lat: 48.8566,
        lng: 2.3522,
        likes: 0,
        dislikes: 0,
        timeOpen: firestore.FieldValue.serverTimestamp()

        // lat: parseFloat(event.target.lat.value),
        // lng: parseFloat(event.target.lng.value),
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