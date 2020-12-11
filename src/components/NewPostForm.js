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
        brand: event.target.brand.value, 
        price: event.target.price.value,
        alcoholContent: event.target.alcoholContent.value,
        amountLeft: 124,
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